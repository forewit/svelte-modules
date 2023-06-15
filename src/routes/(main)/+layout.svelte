<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";
</script>

<nav>
  <a href="{base}/" class:selected={$page.url.pathname === "/"}>Home</a>
  <a href="{base}/logs" class:selected={$page.url.pathname === "/logs"}>logs</a>
  <a href="{base}/trello" class:selected={$page.url.pathname === "/trello"}
    >trello</a
  >
  <a href="{base}/board" class:selected={$page.url.pathname === "/board"}
    >board</a
  >
  <a href="{base}/blog" class:selected={$page.url.pathname === "/blog"}>blog</a>
</nav>

<slot />

<style>
  nav {
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #333;
    padding: 10px;
    column-gap: 10px;
  }

  a {
    background-color: #444;
    color: white;
    text-decoration: none;
    font-size: 16px;
    padding: 5px 10px;
    transition: background-color 0.3s;
    border-radius: 4px;
  }

  a:hover {
    background-color: #555;
  }

  a.selected {
    background-color: #777;
  }

  .dark-background {
    background-color: #333;
    color: #fff;
  }
</style>
