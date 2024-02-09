<script lang="ts">
  import { agroecology, elements } from "../../components/payload";

  let loading = true;
</script>

<svelte:head>
  <title>Agroecology|Elements of agroecology</title>
  <meta name="description" content="Elements of Agroecology" />
</svelte:head>
<section class="p-4">
  <a href="/">Home</a>
  <p class="text-center text-xl">{agroecology}</p>
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
