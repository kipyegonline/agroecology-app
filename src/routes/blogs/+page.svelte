<script lang="ts">
  import { Center } from "@svelteuidev/core";
  import { agripics } from "../../store/store";
</script>

<svelte:head>
  <title>Agroecology|Blogs</title>
  <meta name="description" content="Elements of Agroecology" />
</svelte:head>
<section class="pt-20 m-4">
  <p>There are no blogs at the moment. Kindly check back soon.</p>
  <div class="flex flex-wrap gap-4">
    {#each $agripics as pic}
      <div>
        <img alt="blog image" class="min-h-20 max-w-60" src={pic} />
      </div>
    {/each}
  </div>
</section>
