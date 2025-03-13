<script lang="ts">
  import { Center, Text } from "@svelteuidev/core";
  import { agripics } from "../../store/store";
  
</script>

<svelte:head>
  <title>Agroecology|Blogs</title>
  <meta name="description" content="Elements of Agroecology" />
</svelte:head>
<section class="pt-4 md:pt-20 m-2 md:m-4">

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each  $agripics as [a, b], index}
     <div class="relative rounded-lg overflow-hidden group">
        <img src={a} alt={b} class="w-full h-64 object-cover rounded-lg  transform group-hover:scale-105 transition-transform duration-300" />
        <div class="absolute bottom-0 w-full bg-gray-800 bg-opacity-70 text-white p-2 rounded-b-lg">
          <p class="text-sm">{b}</p>
        </div>
      </div>
    {/each}
  </div>
</section>



