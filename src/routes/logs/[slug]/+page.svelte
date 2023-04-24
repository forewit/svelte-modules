<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<a href="/logs">...back</a>

<h1>{data.title}</h1>
<div>{@html data.content}</div>

