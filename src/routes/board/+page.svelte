<script lang="ts">
  import { onMount } from "svelte";

  interface Shape {
    x: number;
    y: number;
    w: number;
    h: number;
    color?: string;
  }

  const DEFAULT_COLOR = "black";

  let canvas: HTMLCanvasElement,
    width = 0,
    height = 0,
    shapes: Shape[] = [];

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width;
    canvas.height = height;

    /* temporary */
    console.log("resize");
  }

  function draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, width, height);
    for (let shape of shapes) {
      ctx.fillStyle = shape.color || DEFAULT_COLOR;
      ctx.fillRect(shape.x, shape.y, shape.w, shape.h);
    }
  }

  onMount(() => {
    let ctx = canvas.getContext("2d");

    shapes.push({ x: 0, y: 0, w: 200, h: 200, color: "red" });
    shapes.push({ x: 0, y: 0, w: 100, h: 100, color: "blue" });


    if (ctx) draw(ctx);
  });
</script>

<canvas id="canvas" class="card" bind:this={canvas} />

<style>
  .card {
    position: absolute;
    background-color: #ffffff;
    margin: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  }
</style>
