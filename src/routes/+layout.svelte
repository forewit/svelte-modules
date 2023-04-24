<style>
    nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: #333;
        padding: 10px;
    }

    a {
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

<nav>
    <a href="/">Home</a>
    <a href="/logs">logs</a>
</nav>

<slot></slot>
