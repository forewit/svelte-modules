<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte/internal";

  export let markdown = `# Section 1 {-dark}
content for section 1
![leaf](${base}/images/leaf.svg)

# Section 2 {+dark}
content for section 2
![moon](${base}/images/moon.svg)

# Section 3 {-dark}
content for section 3
![sun](${base}/images/sun.svg)

# Section 4 
content for section 4`;

  let main: HTMLElement;

  function markdownToHtml(markdown: string) {
    const lines = markdown.split("\n");
    return lines
      .map((line) => {
        if (line.startsWith("# ")) {
          const level = line.match(/^#+/)?.[0]?.length || 0;
          const title = line.slice(level + 1);
          const slug = titleToSlug(title);
          const className = line.match(/\{(.+?)\}/)?.[1];
          const titleHtml = className
            ? title.replace(`{${className}}`, "")
            : title;
          return `<h${level} id="${slug}" ${
            className ? `trigger-class="${className}"` : ""
          }>${titleHtml}</h${level}>`;
        } else if (line.startsWith("![")) {
          const altTextEnd = line.indexOf("](");
          const srcStart = altTextEnd + 2;
          const srcEnd = line.indexOf(")", srcStart);
          const altText = line.slice(2, altTextEnd);
          const src = line.slice(srcStart, srcEnd);
          return `<img src="${src}" alt="${altText}" />`;
        } else {
          return `<p>${line}</p>`;
        }
      })
      .join("");
  }

  function titleToSlug(title: string) {
    return title
      .replace(/\{.+?\}/g, "") // remove function names
      .replace(/\s+/g, "-") // replace spaces with "-"
      .replace(/^-+|-+$/g, "") // remove leading and trailing "-"
      .toLowerCase(); // convert to lowercase
  }

  function onIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      let mainClasses = entry.target.getAttribute("trigger-class") || "";
      console.log(mainClasses);

      // mainClasses could be in the format "+light -dark"
      // which should add the "light" class and remove the "dark" class

      // split into an array of classes
      const classes = mainClasses.split(" ");

      // remove any empty strings
      const filteredClasses = classes.filter((c) => c);

      // add or remove each class
      filteredClasses.forEach((c) => {
        if (c.startsWith("+")) {
          main.classList.add(c.slice(1));
        } else if (c.startsWith("-")) {
          main.classList.remove(c.slice(1));
        }
      });
    });
  }

  onMount(() => {
    // wait for the markdown to be rendered
    setTimeout(() => {
      // add an observer to each section
      const observer = new IntersectionObserver(onIntersection, {
        root: main,
        rootMargin: "0px 0px -30px 0px",
        threshold: 1,
      });
      const sections = main.querySelectorAll("[trigger-class]");
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
