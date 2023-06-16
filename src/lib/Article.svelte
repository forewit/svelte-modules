<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte/internal";

  export let markdown: string = "";

  let main: HTMLElement;

  function markdownToHtml(markdown: string): string {
    return markdown
      .split("\n")
      .map((line) => {
        const triggers = line.match(/\{(.+?)\}/)?.[1];
        line = line.replace(/\{(.+?)\}/, "").trim();

        if (line.startsWith("#")) {
          const level = line.match(/^(#+)/)?.[0].length || 1;
          const title = line.replace(/^(#+\s*)/, "");
          const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
          return `<h${level} id="${slug}" ${
            triggers ? `triggers="${triggers}"` : ""
          }>${title}</h${level}>`;
        } else {
          const imageMatch = line.match(/^!\[(.+?)\]\((.+?)\)$/);
          const linkMatch = line.match(/^\[(.+?)\]\((.+?)\)$/);
          return imageMatch
            ? `<img src="${imageMatch[2]}" alt="${imageMatch[1]}" ${
                triggers ? `triggers="${triggers}"` : ""
              }/>`
            : linkMatch
            ? `<a href="${linkMatch[2]}" ${
                triggers ? `triggers="${triggers}"` : ""
              }>${linkMatch[1]}</a>`
            : `<p ${triggers ? `triggers="${triggers}"` : ""}>${line}</p>`;
        }
      })
      .join("")
      .replace(/!\[(.+?)\]\((.+?)\)/g, `<img src="$2" alt="$1" />`)
      .replace(/\[(.+?)\]\((.+?)\)/g, `<a href="$2">$1</a>`);
  }

  function onIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      const mainClasses =
        entry.target.getAttribute("triggers")?.split(" ") || [];

      mainClasses.forEach((className) => {
        main.classList.toggle(className, entry.isIntersecting);
      });
    });
  }

  onMount(() => {
    // wait for the markdown to be rendered
    setTimeout(() => {
      // add an observer to each section
      const observer = new IntersectionObserver(onIntersection, {
        root: main,
        rootMargin: "0px 0px 0px 0px", // top, right, bottom, left
        threshold: 0.5, // trigger when 50% of the section is in view
      });
      const sections = main.querySelectorAll("[triggers]");
      sections?.forEach((section) => {
        observer.observe(section);
      });
    }, 0);
  });
</script>

<main bind:this={main}>
  <article>
    {@html markdownToHtml(markdown)}
  </article>
</main>

<style>
  main {
    overflow: auto;
    scroll-behavior: smooth;
    height: calc(100% - 50px); /* 50px is the height of the nav */
    transition: background-color 0.5s, color 0.5s;
  }
</style>
