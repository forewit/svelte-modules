
<script lang="ts">
  /** @type {import('./$types').PageData}*/
  import { base } from "$app/paths";
  import Article from "$lib/Article.svelte";

  export let data: { title: string, markdown: string };
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<a href="{base}/blog">...back</a>

<Article markdown={data.markdown} />