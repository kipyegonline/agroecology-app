<script lang="ts">
  import { Center, Text } from "@svelteuidev/core";
  import { agripics } from "../../store/store";
</script>

<svelte:head>
  <title>Agroecology|Blogs</title>
  <meta name="description" content="Elements of Agroecology" />
</svelte:head>
<section class="pt-20 m-4">
  <div class="flex flex-col flex-wrap gap-4">
    {#each $agripics as [a, b]}
      <Center class=" ">
        <div
          class="flex flex-col md:flex-row gap-4 items-center gap justify-evenly"
        >
          <div class=" w-full md:w-1/2">
            <img alt={b} class="w-full" src={a} />
          </div>
          <div class=" w-full md:w-1/2">
            <Text size="lg" class="leading-6">{b}</Text>
          </div>
        </div>
      </Center>
    {/each}
  </div>
</section>
