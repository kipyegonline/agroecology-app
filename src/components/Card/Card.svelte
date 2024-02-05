<script lang="ts">
  import { Card, Text, Box, Center, Divider } from "@svelteuidev/core";
  import type { POE } from "../../store/store";
  import Badge from "../badge/badge.svelte";
  type Category = { name: string; description: string; categories: string[] };
  export let p: POE = { name: "", description: "", categories: [], fao: [] };
</script>

<Card shadow="lg" padding="lg" class="w-full md:w-80 mx-w-80 min-h-64 ">
  <h3 class="text-xl font-medium py-2 text-center">{p.name}</h3>
  <Text class="leading-6 mb-4">{p.description}</Text>

  <Center class=" flex gap-4  text-xl absolute left-0 right-0 bottom-2  ">
    {#each p.categories as cat}
      <Badge category={cat} />
    {/each}
  </Center>
</Card>
