// UnitVectorY-Labs Blog enhancements: reveal-on-scroll-up header, reading progress,
// code copy bars, table scroll regions, heading anchors, post TOC, instant search
// and tag filtering. All content remains navigable without JavaScript.
(function () {
  const scriptEl = document.currentScript;
  const searchIndexUrl =
    (scriptEl && scriptEl.dataset && scriptEl.dataset.searchIndex) ||
    "/assets/js/search-data.json";

  function initHeaderScroll() {
    const siteHeader = document.querySelector(".site-header");
    if (!siteHeader) return;
    let lastY = window.scrollY;
    let anchorY = lastY;
    let lastDir = 0;
    let ticking = false;

    function updateHeaderVisibility() {
      ticking = false;
      const y = Math.max(0, window.scrollY);
      const step = y - lastY;
      if (step === 0) return;
      const dir = step > 0 ? 1 : -1;
      if (dir !== lastDir) {
        anchorY = lastY;
        lastDir = dir;
      }
      const travel = y - anchorY;
      const threshold = Math.max(siteHeader.offsetHeight, 64);
      if (y <= threshold || siteHeader.matches(":focus-within")) {
        siteHeader.classList.remove("is-hidden");
        anchorY = y;
      } else if (travel > 12) {
        siteHeader.classList.add("is-hidden");
        anchorY = y;
      } else if (travel < -10) {
        siteHeader.classList.remove("is-hidden");
        anchorY = y;
      }
      lastY = y;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(updateHeaderVisibility);
        }
      },
      { passive: true },
    );
    siteHeader.addEventListener("focusin", function () {
      siteHeader.classList.remove("is-hidden");
    });
  }

  function initReadingProgress() {
    const bar = document.getElementById("reading-progress");
    const prose = document.querySelector(".blog-prose");
    if (!bar || !prose) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    function update() {
      ticking = false;
      const rect = prose.getBoundingClientRect();
      const total = prose.offsetHeight - window.innerHeight * 0.65;
      if (total <= 0) {
        bar.style.width = "100%";
        return;
      }
      const passed = -rect.top;
      const pct = Math.max(0, Math.min(100, (passed / total) * 100));
      bar.style.width = pct.toFixed(1) + "%";
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true },
    );
    update();
  }

  function enhanceCodeBlocks() {
    const prose = document.querySelector(".blog-prose");
    if (!prose) return;

    const blocks = [];
    prose.querySelectorAll("div.highlighter-rouge").forEach((div) => {
      if (!div.closest(".uvy-code")) blocks.push(div);
    });
    prose.querySelectorAll("pre").forEach((pre) => {
      if (!pre.closest(".uvy-code") && !pre.closest("div.highlighter-rouge")) {
        blocks.push(pre);
      }
    });

    let seq = 0;
    blocks.forEach((node) => {
      const code = node.querySelector("code") || node;
      const cls = (node.className + " " + (code.className || "")).trim();
      const langMatch = cls.match(/language-([a-zA-Z0-9_+-]+)/);
      const lang = langMatch && langMatch[1] !== "plaintext" ? langMatch[1] : "text";

      const codeId = "uvy-code-block-" + ++seq;
      code.id = code.id || codeId;
      const pre = node.tagName === "PRE" ? node : node.querySelector("pre");
      if (pre && !pre.hasAttribute("tabindex")) pre.setAttribute("tabindex", "0");

      const wrap = document.createElement("div");
      wrap.className = "uvy-code";

      const bar = document.createElement("div");
      bar.className = "uvy-code__bar";

      const label = document.createElement("span");
      label.textContent = lang;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "uvy-button--quiet uvy-button--small uvy-copy";
      btn.dataset.copyTarget = code.id;
      btn.setAttribute("aria-label", "Copy " + lang + " code");
      btn.innerHTML =
        '<span data-copy class="with-icon">' +
        '<svg class="icon icon-small" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><use href="#tabler-copy"></use></svg>' +
        "Copy</span>" +
        '<span data-copied class="with-icon">' +
        '<svg class="icon icon-small" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><use href="#tabler-check"></use></svg>' +
        "Copied</span>";

      bar.append(label, btn);
      node.parentNode.insertBefore(wrap, node);
      wrap.append(bar, node);
    });
  }

  function enhanceTables() {
    const prose = document.querySelector(".blog-prose");
    if (!prose) return;
    prose.querySelectorAll("table").forEach((table) => {
      if (table.closest(".table-wrap")) return;
      const wrap = document.createElement("div");
      wrap.className = "table-wrap";
      wrap.setAttribute("role", "region");
      wrap.setAttribute("tabindex", "0");
      wrap.setAttribute("aria-label", "Scrollable table");
      table.parentNode.insertBefore(wrap, table);
      wrap.append(table);
    });
  }

  function enhanceHeadingsAndToc() {
    const prose = document.querySelector(".blog-prose");
    if (!prose) return;

    const headings = [...prose.querySelectorAll("h2[id], h3[id], h4[id]")];
    headings.forEach((h) => {
      if (h.querySelector(".blog-heading-anchor")) return;
      const text = h.textContent.trim();
      const a = document.createElement("a");
      a.className = "blog-heading-anchor";
      a.href = "#" + h.id;
      a.setAttribute("aria-label", "Link to section " + text);
      a.textContent = "#";
      h.append(a);
    });

    const tocAside = document.getElementById("post-toc");
    const tocNav = document.getElementById("post-toc-nav");
    const tocHeadings = headings.filter(
      (h) => h.tagName === "H2" || h.tagName === "H3",
    );
    if (!tocAside || !tocNav || tocHeadings.length < 2) return;

    const links = [];
    tocHeadings.forEach((h) => {
      const a = document.createElement("a");
      a.href = "#" + h.id;
      if (h.tagName === "H3") a.className = "is-sub";
      const anchor = h.querySelector(".blog-heading-anchor");
      const raw = anchor
        ? h.textContent.slice(0, h.textContent.length - anchor.textContent.length).trim()
        : h.textContent.trim();
      a.textContent = raw;
      tocNav.append(a);
      links.push({ id: h.id, el: h, link: a });
    });
    tocAside.hidden = false;

    function setActive(id) {
      links.forEach((item) => {
        if (item.id === id) item.link.setAttribute("aria-current", "location");
        else item.link.removeAttribute("aria-current");
      });
    }
    setActive(links[0].id);

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          if (visible.length) setActive(visible[0].target.id);
        },
        { rootMargin: "-72px 0px -65% 0px", threshold: 0 },
      );
      links.forEach((item) => observer.observe(item.el));
    }
  }

  function highlightText(container, text, terms) {
    if (!text) return;
    const escaped = terms
      .filter(Boolean)
      .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    if (!escaped.length) {
      container.textContent = text;
      return;
    }
    const re = new RegExp("(" + escaped.join("|") + ")", "gi");
    const parts = text.split(re);
    parts.forEach((part, idx) => {
      if (idx % 2 === 1) {
        const mark = document.createElement("mark");
        mark.textContent = part;
        container.append(mark);
      } else if (part) {
        container.append(document.createTextNode(part));
      }
    });
  }

  function initBlogSearch() {
    const input = document.getElementById("blog-search-input");
    const clearBtn = document.getElementById("blog-search-clear");
    const status = document.getElementById("blog-search-status");
    const resultsBox = document.getElementById("blog-search-results");
    const feedView = document.getElementById("blog-feed-view");
    if (!input || !resultsBox || !feedView) return;

    let posts = null;
    let loading = null;

    function loadIndex() {
      if (posts) return Promise.resolve(posts);
      if (loading) return loading;
      loading = fetch(searchIndexUrl)
        .then((res) => (res.ok ? res.json() : []))
        .then((data) => {
          posts = Array.isArray(data) ? data : [];
          return posts;
        })
        .catch(() => {
          posts = [];
          return posts;
        });
      return loading;
    }

    function clearSearch() {
      input.value = "";
      if (clearBtn) clearBtn.hidden = true;
      if (status) status.textContent = "";
      resultsBox.hidden = true;
      resultsBox.textContent = "";
      feedView.hidden = false;
    }

    function renderResults(query, items) {
      const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
      const scored = [];

      items.forEach((post) => {
        const title = post.t || "";
        const titleL = title.toLowerCase();
        const tags = Array.isArray(post.g) ? post.g : [];
        const tagsL = tags.map((g) => g.toLowerCase());
        const excerpt = post.e || "";
        const excerptL = excerpt.toLowerCase();
        const dateStr = (post.d || "") + " " + (post.ds || "").toLowerCase();

        let matchedAll = true;
        let score = 0;

        for (const term of terms) {
          let hit = false;
          if (tagsL.some((g) => g === term)) {
            score += 36;
            hit = true;
          } else if (tagsL.some((g) => g.includes(term))) {
            score += 20;
            hit = true;
          }
          if (titleL.includes(term)) {
            score += 18;
            hit = true;
          }
          if (dateStr.includes(term)) {
            score += 8;
            hit = true;
          }
          if (excerptL.includes(term)) {
            score += 4;
            hit = true;
          }
          if (!hit) {
            matchedAll = false;
            break;
          }
        }
        if (matchedAll && score > 0) scored.push({ post, score });
      });

      scored.sort((a, b) => b.score - a.score || (b.post.d || "").localeCompare(a.post.d || ""));
      const top = scored.slice(0, 40);

      feedView.hidden = true;
      resultsBox.hidden = false;
      resultsBox.textContent = "";
      if (clearBtn) clearBtn.hidden = false;
      if (status) {
        status.textContent =
          scored.length === 1
            ? "1 matching post"
            : scored.length > top.length
              ? "Showing top " + top.length + " of " + scored.length + " matches"
              : scored.length + " matching posts";
      }

      if (!top.length) {
        const empty = document.createElement("div");
        empty.className = "uvy-empty";
        const strong = document.createElement("strong");
        strong.textContent = "No matching posts";
        const p = document.createElement("p");
        p.textContent = 'No articles matched "' + query + '". Try a repository name, version, or shorter keyword.';
        empty.append(strong, p);
        resultsBox.append(empty);
        return;
      }

      const list = document.createElement("ol");
      list.className = "blog-stream";
      top.forEach(({ post }) => {
        const li = document.createElement("li");
        li.className = "blog-stream__item";

        const article = document.createElement("article");
        article.className = "blog-entry";

        const aside = document.createElement("div");
        aside.className = "blog-entry__aside";
        const timeEl = document.createElement("time");
        timeEl.setAttribute("datetime", post.d || "");
        timeEl.textContent = post.d || "";
        const rt = document.createElement("span");
        rt.className = "blog-entry__readtime";
        rt.textContent = (post.m || 1) + " min read";
        aside.append(timeEl, rt);

        const tags = Array.isArray(post.g) ? post.g : [];
        if (tags[0]) {
          const badge = document.createElement("span");
          badge.className = "uvy-badge blog-tag blog-tag--project";
          highlightText(badge, tags[0], terms);
          aside.append(badge);
        }

        const body = document.createElement("div");
        body.className = "blog-entry__body";

        const h3 = document.createElement("h3");
        h3.className = "blog-entry__title";
        const a = document.createElement("a");
        a.href = post.u || "#";
        highlightText(a, post.t || "", terms);
        h3.append(a);

        const p = document.createElement("p");
        p.className = "blog-entry__excerpt";
        highlightText(p, post.e || "", terms);

        const footer = document.createElement("div");
        footer.className = "blog-entry__footer";
        const readMore = document.createElement("a");
        readMore.className = "blog-read-link";
        readMore.href = post.u || "#";
        readMore.textContent = "Read article";
        footer.append(readMore);

        body.append(h3, p, footer);
        article.append(aside, body);
        li.append(article);
        list.append(li);
      });
      resultsBox.append(list);
    }

    input.addEventListener("focus", () => {
      loadIndex();
    });

    input.addEventListener("input", async () => {
      const q = input.value.trim();
      if (!q) {
        clearSearch();
        return;
      }
      const items = await loadIndex();
      renderResults(q, items);
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && input.value) {
        event.preventDefault();
        clearSearch();
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        clearSearch();
        input.focus();
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key !== "/" || event.ctrlKey || event.metaKey || event.altKey) return;
      const tag = (document.activeElement && document.activeElement.tagName) || "";
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        (document.activeElement && document.activeElement.isContentEditable)
      ) {
        return;
      }
      event.preventDefault();
      input.focus();
      input.select();
    });
  }

  function initTagFilter() {
    const input = document.getElementById("tag-filter-input");
    const clearBtn = document.getElementById("tag-filter-clear");
    const countEl = document.getElementById("tag-filter-count");
    const emptyEl = document.getElementById("tag-filter-empty");
    const tabs = [...document.querySelectorAll("[data-tag-filter]")];
    const chips = [...document.querySelectorAll("[data-tag-chip]")];
    const sections = [...document.querySelectorAll("[data-tag-section]")];
    if (!input || !chips.length) return;

    let activeKind = "all";

    function applyFilter() {
      const q = input.value.trim().toLowerCase();
      let shown = 0;

      chips.forEach((chip) => {
        const matchKind = activeKind === "all" || chip.dataset.tagKind === activeKind;
        const matchText = !q || (chip.dataset.tagName || "").includes(q);
        chip.hidden = !(matchKind && matchText);
        if (!chip.hidden) shown++;
      });

      sections.forEach((sec) => {
        const matchKind = activeKind === "all" || sec.dataset.tagKind === activeKind;
        const matchText = !q || (sec.dataset.tagName || "").includes(q);
        sec.hidden = !(matchKind && matchText);
      });

      if (clearBtn) clearBtn.hidden = !q && activeKind === "all";
      if (emptyEl) emptyEl.hidden = shown > 0;
      if (countEl) {
        countEl.textContent = shown === 1 ? "1 tag shown" : shown + " tags shown";
      }
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        activeKind = tab.dataset.tagFilter || "all";
        applyFilter();
      });
      tab.addEventListener("keydown", (event) => {
        if (
          event.key === "ArrowLeft" ||
          event.key === "ArrowRight" ||
          event.key === "Home" ||
          event.key === "End"
        ) {
          requestAnimationFrame(() => {
            const selected = tabs.find(
              (t) => t.getAttribute("aria-selected") === "true",
            );
            if (selected) {
              activeKind = selected.dataset.tagFilter || "all";
              applyFilter();
            }
          });
        }
      });
    });

    input.addEventListener("input", applyFilter);
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        input.value = "";
        activeKind = "all";
        tabs.forEach((t) => {
          const isAll = t.dataset.tagFilter === "all";
          t.setAttribute("aria-selected", String(isAll));
          t.tabIndex = isAll ? 0 : -1;
        });
        applyFilter();
        input.focus();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initHeaderScroll();
    initReadingProgress();
    enhanceCodeBlocks();
    enhanceTables();
    enhanceHeadingsAndToc();
    initBlogSearch();
    initTagFilter();
  });
})();
