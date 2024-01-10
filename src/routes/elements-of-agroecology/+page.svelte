<script lang="ts">
  import { agroecology, elements } from "../../components/payload";

  let loading = true;
</script>

<svelte:head>
  <title>agroecology|Elements of agroecology</title>
</svelte:head>
<section>
  <p>{agroecology}</p>
  <h1>Elements of agroecology</h1>
  <ul style="list-style:none;">
    {#each elements as element, i}
      <li>{i + 1}. {"  "}{element}</li>
    {/each}
  </ul>
</section>

<style>
  p::first-line {
    color: rgb(51, 238, 13);
  }
</style>
