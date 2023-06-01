<script lang="ts">
  import { onMount } from "svelte";

  let notchLeft = 0,
    notchRight = 0,
    notchTop = 0;

  function handleOrientation() {
    notchRight = screen.orientation.type == "landscape-primary" ? 1 : 0;
    notchLeft = screen.orientation.type == "landscape-secondary" ? 1 : 0;
    notchTop = screen.orientation.type == "portrait-primary" ? 1 : 0;
  }

  onMount(() => {
    screen.orientation.onchange = handleOrientation;
    handleOrientation();
  });
</script>

<svelte:head>
  <meta
    name="viewport"
    content="width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
  />
</svelte:head>

<div
  id="container"
  style="--notch-left: {notchLeft}; --notch-right: {notchRight}; --notch-top: {notchTop};"
>
  <div id="content">
    <slot />
  </div>
</div>

<style>
  #container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    /* setup grid to account for notch */
    margin-left: calc(env(safe-area-inset-left) * var(--notch-left));
    margin-right: calc(env(safe-area-inset-right) * var(--notch-right));
    margin-top: calc(env(safe-area-inset-top) * var(--notch-top));
  }

  #content {
    position: absolute;
    width: 100%;
    height: 100%;

    /* temporary */
    background: aliceblue;
  }

  /* Import the Ysabeau font */
  @font-face {
    font-family: "Poltawski Nowy";
    src: url("/fonts/Poltawski Nowy/PoltawskiNowy-VariableFont_wght.ttf")
      format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  :global(*) {
    box-sizing: border-box;
  }
  :global(html, body) {
    font-family: "Poltawski Nowy";
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: lightskyblue;
  }
</style>
