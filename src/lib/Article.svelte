<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte/internal";

  export let markdownURL: string;
  export let offsetTop: number = 0;

  let main: HTMLElement;

  // convert markdown to html
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
            ? `<img src="${base}${imageMatch[2]}" alt="${imageMatch[1]}" ${
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


  // toggle classes on the main element when an element with the triggers attribute is intersected
  function onIntersection(entries: IntersectionObserverEntry[]): void {
    if (!main) return;
    entries.forEach((entry) => {
      const mainClasses =
        entry.target.getAttribute("triggers")?.split(" ") || [];

      mainClasses.forEach((className) => {
        main.classList.toggle(className, entry.isIntersecting);
      });
    });
  }


  // fetch the markdown file from the url
  async function getArticle(url: string): Promise<string> {
    const res = await fetch(url);
    return await res.text();
  }


  onMount(() => {
    // get the markdown file
    getArticle(markdownURL).then((text) => {
      // convert markdown to html
      const markdown = markdownToHtml(text);

      // set the markdown as the innerHTML of the article
      main.innerHTML = markdown;

      // create an observer to watch for elements with the triggers attribute
      const observer = new IntersectionObserver(onIntersection, {
        root: main,
        rootMargin: "0px",
        threshold: 0.5,
      });

      // observe all elements with the triggers attribute
      main
        .querySelectorAll("[triggers]")
        .forEach((element) => observer.observe(element));
    });    
  });
</script>

<main bind:this={main} style="height: calc(100% - {offsetTop}px);"/>

<style>
  main {
    overflow: auto;
    scroll-behavior: smooth;
    transition: background-color 0.5s, color 0.5s;
  }
</style>
