<script lang="ts">
  import { fade } from "svelte/transition";
  export let friend = "",
    index = 0;

  let fuck = !true;
  export let current = -1;
  export let click = () => {};
</script>

<li
  style:padding="10px 5px"
  style="background:{current === index ? 'purple' : ''}; color:{current ===
  index
    ? 'white'
    : ''}"
  on:click={click}
  class:fuck
  transition:fade
>
  {index + 1}.{"  "}
  <slot />
</li>

<style>
  li {
    border-bottom: 1px solid #ccc;
    padding: 5px 0;
  }
  .fuck {
    color: cyan;
  }
</style>
