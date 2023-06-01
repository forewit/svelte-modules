<script lang="ts">
  import { onMount } from "svelte";

  let notchLeft = 0,
    notchRight = 0,
    notchTop = 0,
    notchBottom = 0;

  function handleOrientation() {
    notchLeft = screen.orientation.angle == 90 ? 1 : 0;
    notchRight = screen.orientation.angle == -90 ? 1 : 0;
    notchTop = screen.orientation.angle == 0 ? 1 : 0;
    notchBottom = screen.orientation.angle == 180 ? 1 : 0;
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
  id="main-grid"
  style="--notch-left: {notchLeft}; --notch-right: {notchRight}; --notch-top: {notchTop}; --notch-bottom: {notchBottom};"
>
  <div id="content">
    notchLeft: {notchLeft}
    notchRight:
    <slot />
  </div>
</div>

<style>
  #main-grid {
    /* make fulscreen */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    /* setup grid to account for notch */
    display: grid;
    gap: 0px 0px;
    grid-template-columns: calc(env(safe-area-inset-left) * var(--notch-left)) 1fr calc(
        env(safe-area-inset-right) * var(--notch-right)
      );
    grid-template-rows: calc(env(safe-area-inset-top) * var(--notch-top)) 1fr calc(
        env(safe-area-inset-bottom) * var(--notch-bottom)
      );
    grid-template-areas:
      "notch notch notch"
      "notch slot notch"
      "notch notch notch";

    /* temporary */
    box-shadow: inset 0px 0px 10px 5px white;
    background: darkcyan;
  }
  #content {
    grid-area: slot;
    position: relative;
    height: 100%;
    width: 100%;

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
    background: white; /* steelblue */
  }
</style>
