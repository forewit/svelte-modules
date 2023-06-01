<script>
    /** @type {import('./$types').PageData} */
    import { base } from "$app/paths";

    export let data;
</script>

<a href="{base}/logs">...back</a>

<h1>{data.title}</h1>
<div>{@html data.content}</div>

