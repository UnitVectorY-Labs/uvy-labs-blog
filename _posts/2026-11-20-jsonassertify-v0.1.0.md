---
layout: post
title: "JSONassertify 0.1.0: Assertions You Can Trust"
date: 2026-11-20 00:27:00 -0000
tags: ["jsonassertify", "unsloth-qwen3-8-flash-next-gguf-iq4-xs"]
---

JSONassertify `0.1.0` was released on **November 20, 2026**. If you write Java tests
that assert on JSON — REST responses, message payloads, serialized documents — this is
the release where the library starts saying "no" more often, and that is a good thing.

JSONassertify is a maintained fork of the long-standing JSONassert library, published on
Maven Central as `com.unitvectory:jsonassertify`. Its promise has not changed: write JSON
unit tests in less code, comparing an expected document against an actual one logically
rather than character by character. What changed in `0.1.0` is the trustworthiness of the
answer that comparison gives you.

This is also a small milestone in its own right. It is the project's first release past
the `0.0.x` series, and it carries the largest batch of correctness fixes the library has
shipped in a single version: ten fixes to the comparison engine, several of which address
bugs that are still open in upstream JSONassert.

## What's new

There are no new methods to learn in this release — the API surface is unchanged. Every
change is in what `JSONAssert.assertEquals` and `assertNotEquals` decide is equal, and the
`0.1.0` work concentrates in four places.

**Numbers are compared exactly.** Previously, JSON numbers were widened to IEEE-754
doubles before comparison. Two genuinely different values that happen to round to the same
double — a large identifier like `9007199254740992` versus `9007199254740993`, or a precise
decimal that differs in its last digits — compared as equal, so a test could stay green
after the value under test had actually changed. Comparison now uses arbitrary-precision
decimal arithmetic, which catches those cases while keeping the forgiving behavior most
tests rely on: `1` still equals `1.00`, and `100000000000000000000` still equals `1e20`.

**Nulls are no longer invisible.** A missing `return` in the comparison path meant some
expected-null-versus-actual-value mismatches were reported and then discarded, letting
tests pass that should have failed. Those mismatches now fail, and `null` renders as the
literal text `null` in failure output instead of being mishandled, so the message you get
describes the problem you have.

**Unordered array matching is honest about counting.** In lenient mode, arrays are matched
without regard to order. The matcher could previously satisfy two expected elements with
the same actual element, effectively double-counting it, and a failed trial match against
one candidate could leak its diagnostics into an otherwise successful comparison. Each
actual element is now consumed at most once, speculative failures stay speculative, and
reported paths keep the index they came from. An empty expected `ArrayValueMatcher`
expectation also now fails against a non-empty selection rather than quietly accepting it.

**Customizations are actually honored.** If you use `CustomComparator` and `Customization`
to plug your own value matching into specific paths, those customizations previously had
blind spots: they were bypassed when the customized field was also the field the engine
chose as an unordered object array's unique key, they lost array-index context in nested
arrays, and a path ending in a trailing wildcard token behaved differently from the same
path without it. All three are fixed, and matching across an unordered object array now
uses a proper one-to-one assignment, so ambiguous candidates can be paired up correctly
rather than failing on an unlucky ordering.

**Top-level scalars work.** `JSONAssert.assertEquals("null", "null", false)` used to throw
a parse exception — the parser accepted objects, arrays, strings, and numbers at the top
level, but not `true`, `false`, or `null`. Those literals now parse and compare in every
compare mode, and a mismatched top-level scalar produces a real failure message
(`Expected: "expected", got: "actual"`) instead of an empty one. Surrounding whitespace is
normalized; whitespace inside quoted strings is still significant.

## Why it matters

An assertion library earns its place in your build by failing when your code is wrong and
staying quiet when it is not. The first category — catching real regressions — was the one
`0.0.x` could get wrong. A test that passes because two different 64-bit identifiers
collapse to the same double, or because a `null` slipped through a code path that forgot to
report it, is worse than no test at all: it is confidence you did not earn.

That is the theme of this release. Nothing here expands what you can express; it tightens
what you can believe. It also underlines the reason JSONassertify exists. Upstream
JSONassert has been largely quiet, and its current release requires Java 21 — a non-starter
for a great many test suites. JSONassertify keeps the Java 8 baseline, modernizes the
dependencies around it, and in this release fixes comparison bugs that the original project
has not shipped.

One consequence deserves emphasis: **this release is stricter in places where it was
previously wrong.** Upgrading requires no code changes — no signatures moved — but a test
that passed on `0.0.6` for the wrong reasons can turn red on `0.1.0`. Expect that for
comparisons that relied on number precision collapsing, on null-versus-value mismatches in
arrays, on unordered arrays reusing elements, on empty `ArrayValueMatcher` expectations, or
on customizations that were silently ignored. A newly failing test after the upgrade is
most likely the library telling you something you wanted to know sooner.

## Getting it

Add or bump the dependency in your test scope:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonassertify</artifactId>
    <version>0.1.0</version>
    <scope>test</scope>
</dependency>
```

Or, with Gradle:

```groovy
testImplementation 'com.unitvectory:jsonassertify:0.1.0'
```

If you are coming from JSONassert, the migration is a package rename:
`org.skyscreamer.jsonassert` becomes `com.unitvectory.jsonassertify`, and the classes and
method signatures you already know are where you left them. The one thing to watch during
that move is the underlying parser, which comes from `org.json` rather than the
long-unmaintained `android-json` artifact the original depended on.

Released artifacts — jar, sources, and Javadoc — are on both GitHub Releases and Maven
Central, and the project is Apache License 2.0. Examples and a cookbook live at
[jsonassertify.unitvectorylabs.com](https://jsonassertify.unitvectorylabs.com/).

If your test suite is the only thing standing between a JSON response and a silent schema
drift, `0.1.0` is worth the upgrade for the precision and null fixes alone. Run it against
your suite, and read whatever goes red carefully — in nearly every case, it is your code
that changed, not the library.

---

*Transparency note: this post was generated by an AI model,
[unsloth/Qwen3.8-Flash-Next-GGUF:IQ4_XS](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF),
from the [UnitVectorY-Labs/JSONassertify](https://github.com/UnitVectorY-Labs/JSONassertify)
repository and its [v0.1.0 release](https://github.com/UnitVectorY-Labs/JSONassertify/releases/tag/v0.1.0)
(released 2026-11-20). Generated 2026-11-22.*

*Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
