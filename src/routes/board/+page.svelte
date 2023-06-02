<!-- 
this is a single svelte3 component for a grid of squares that fills the screen evenly.
use the #each directive to create a grid of square elements

this is not for a game, but rather for using the hover feature on each square to detect where the mouse is at
-->
<script lang="ts">
    import { onMount } from "svelte";

  const SQUARE_SIZE = 50;
  let gridWidth = 0,
    gridHeight = 0;

  function handleResize() {
    gridWidth = Math.floor(window.innerWidth / SQUARE_SIZE);
    gridHeight = Math.floor(window.innerHeight / SQUARE_SIZE);
  }

  onMount(() => {
    handleResize();
  });
</script>

<svelte:window on:resize={handleResize} />

<div
  class="grid"
  style="--grid-width: {gridWidth}; --grid-height: {gridHeight}"
>
  {#each Array(gridWidth * gridHeight) as _, i}
    <div class="square" />
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(var(--grid-width), 1fr);
    grid-template-rows: repeat(var(--grid-height), 1fr);
    width: 100%;
    height: 100%;
  }

  .square {
    background-color: #fff;
    border: 1px solid #f5f5f5;
    width: 100%;
    height: 100%;
  }

  .square:hover {
    background-color: aliceblue;
    scale: 1.5;
    transition: scale 0.2s ease-in-out;
  }
</style>
