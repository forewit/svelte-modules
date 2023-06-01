<script lang="ts">
  import { onMount } from "svelte";

  let leftNotch = 0;

  function updateNotch() {
    leftNotch = window.orientation == 90 ? 1 : 0;
  }

  onMount(() => {
    window.addEventListener("orientationchange", updateNotch);
    updateNotch();
  });
</script>

  <div id="main-grid" style="--notch-left: {leftNotch}">
    <div id="content">
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
    user-select: none;;

    /* setup grid to account for notch */
    display: grid;
    gap: 0px 0px;
    grid-template-columns: calc(env(safe-area-inset-left) * var(--notch-left)) 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "notch slot";
    
    /* temporary */
    box-shadow: inset 0px 0px 10px 5px white;
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
