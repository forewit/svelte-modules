<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";
</script>

<nav>
  <a href="{base}/" class:selected={$page.url.pathname === "{base}/"}>Home</a>
  <a href="{base}/logs" class:selected={$page.url.pathname === "{base}/logs"}>logs</a>
  <a href="{base}/trello" class:selected={$page.url.pathname === "{base}/trello"}>trello</a>
  <a href="{base}/board" class:selected={$page.url.pathname === "{base}/board"}>board</a>
</nav>

<slot />

<style>
  nav {
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
    background-color: #555;
  }
</style>
