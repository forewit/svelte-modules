<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  let gridContainer: HTMLElement;

  /* 
  Set notch css properties based on window orientation.
  These properties can be used to determine if there is a notch
  and which side of the screen the notch is on.
  */
  function setNotchCssProperties(): void {
    if (window.orientation == 0) {
      gridContainer.style.setProperty("--notch-top", "1");
    } else if (window.orientation == 90) {
      gridContainer.style.setProperty("--notch-left", "1");
    } else if (window.orientation == -90) {
      gridContainer.style.setProperty("--notch-right", "1");
    }
  }

  onMount(() => {
    window.addEventListener("orientationchange", setNotchCssProperties);
    setNotchCssProperties();
  });
</script>

<div id="grid-container" class="g-fullscreen" bind:this={gridContainer}>
  <div id="content">
    <slot />
  </div>
</div>

<style>
  #grid-container {
    --notch-top: 0;
    --notch-right: 0;
    --notch-left: 0;

    display: grid;
    gap: 0px 0px;
    grid-template-columns: calc(env(safe-area-inset-left) * var(--notch-left)) 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "notch slot";

    /* temporary */
    background: red;
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
    src: url("{base}/fonts/Poltawski Nowy/PoltawskiNowy-VariableFont_wght.ttf")
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
  :global(.g-fullscreen) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
