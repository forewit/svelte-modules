<script>
  import "../global.css";
</script>

<nav>
  <a href="/">Home</a>
  <a href="/logs">logs</a>
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
  }

  a:hover {
    background-color: #555;
    border-radius: 4px;
  }
</style>
