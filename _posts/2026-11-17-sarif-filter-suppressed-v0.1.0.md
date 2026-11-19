---
layout: post
title: "Introducing sarif-filter-suppressed: stop suppressed findings from coming back to life"
date: 2026-11-17 02:17:10 +0000
tags: ["sarif-filter-suppressed", "unsloth-qwen3-8-flash-next-gguf-iq4-xs"]
---

UnitVectorY Labs is pleased to announce the first public release of **sarif-filter-suppressed**, a lightweight GitHub Action that strips suppressed findings out of SARIF reports before they are uploaded. Version **v0.1.0** was published on **November 17, 2026**, marking the project's debut.

If you have ever marked a finding as suppressed—say, with a `# nosemgrep` comment or an equivalent exclusion in your scanner—only to see that same finding reappear as an alert days later, this Action is for you. It closes a frustrating gap between scanners that *record* your suppression decisions and the tools that *consume* the results and ignore them.

## What it does

`sarif-filter-suppressed` sits in the middle of your scanning pipeline. You point it at a SARIF 2.1.0 report, and it writes a filtered copy with the suppressed results removed:

- Results carrying a suppression with status `accepted` are removed.
- Results carrying a suppression with **no status** are removed as well, matching the common convention of treating an unmarked suppression as honored.
- Results whose suppressions are `rejected` or `underReview` are kept, so your team's pending review decisions are not silently thrown away.
- Results with no suppression at all pass through untouched.

Everything besides the filtered results is preserved: the remaining result fields, rules, artifacts, metadata, and indices all survive intact. Notably, rules are never pruned even when all of their findings are removed, and exact numeric values keep their original precision through the rewrite so large identifiers and timestamps are never mangled.

The Action reports what it did through step outputs—`original`, `removed`, `retained`, and the path to the filtered `output`—so you can see the impact of each run at a glance in your workflow logs.

## Why it matters

Modern static-analysis tools increasingly speak SARIF, and SARIF gives you a standard way to say "I looked at this finding and decided to suppress it." But a suppression is only useful if the tool that ultimately displays your results agrees to respect it. Plenty of consumers do not, so a finding you deliberately silenced can quietly resurface as an alert, eroding trust in your dashboard and generating noise that pulls attention away from real issues.

This Action puts the decision back in your hands. By removing suppressed findings before upload, it guarantees that what lands in your code-scanning view reflects the exclusions you actually made—no ghost alerts, no re-suppressing the same finding on every scan.

It was also built to stay out of your way:

- **No dependencies.** It runs on the runner's Node.js 24 runtime using only JavaScript standard-library features—no third-party packages, no build or compile step, and no container image to pull.
- **No secrets or network calls.** The filtering step needs no token and no extra workflow permissions; your scan and upload steps keep whatever permissions they already had.
- **Fail-safe by design.** The report is validated *before* any output is written, so a rejected or malformed input can never overwrite a good file. The Action only accepts SARIF version `2.1.0` and gives clear errors on anything else, and it refuses inputs and outputs that resolve to the same file—including through symlinks and hard links—so it can never clobber your original report.

## Getting started

`sarif-filter-suppressed` is consumed as a GitHub Action by referencing it in your workflow. Drop it between the step that produces your SARIF file and the step that uploads it, then hand the filtered file to your upload action. For example, a Semgrep scan can be filtered on its way into GitHub code scanning:

```yaml
- name: Scan with Semgrep
  id: scan
  run: uvx --from semgrep==1.172.0 semgrep scan --sarif --output findings.sarif

- name: Remove suppressed findings
  id: filter
  uses: UnitVectorY-Labs/sarif-filter-suppressed@v0.1.0
  with:
    input: findings.sarif
    output: findings-filtered.sarif

- name: Upload results
  uses: github/codeql-action/upload-sarif@v4.39.3
  with:
    sarif_file: ${{ steps.filter.outputs.output }}
    category: semgrep
```

Both `input` and `output` are required, and the output must resolve to a different path than the input; relative paths are resolved from the job's working directory. The Action requires a runner that supports the Node 24 Actions runtime.

Because this is an initial `0.1.0` release with no stability guarantees yet, the project recommends pinning to the `v0.1.0` tag—or, for maximum reproducibility, to a reviewed commit SHA—rather than tracking a moving branch. The maintainers dogfood the Action this way in their own CI, applying it to their code-scanning uploads.

## A note on scope

`sarif-filter-suppressed` is aimed squarely at consumers that do not honor SARIF suppression markers; it is not a full SARIF schema validator, and it deliberately preserves structure (like the full `rules` collection) rather than optimizing report size. It is a focused, single-purpose tool: make sure the findings you suppressed stay suppressed.

The project is released under the MIT license and is available now on GitHub. Give it a try in your next SARIF pipeline and turn the alerts you already dismissed back into silence.

---

*Transparency note: this post was AI-generated using the model `unsloth/Qwen3.8-Flash-Next-GGUF:IQ4_XS`, based on the [`UnitVectorY-Labs/sarif-filter-suppressed`](https://github.com/UnitVectorY-Labs/sarif-filter-suppressed) repository and its [`v0.1.0` release](https://github.com/UnitVectorY-Labs/sarif-filter-suppressed/releases/tag/v0.1.0). Generated on 2026-11-17. Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
