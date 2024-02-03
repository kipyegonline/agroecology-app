<script lang="ts">
  import { Card, Text } from "@svelteuidev/core";
  import type { POE } from "../../store/store";
  type Category = { name: string; description: string; categories: string[] };
  export let p: POE = { name: "" };
</script>

<Card shadow="lg" padding="lg" class="w-full md:w-80 mx-w-80 ">
  <h3 class="text-xl font-medium py-2 text-center">{p.name}</h3>
  <Text size="sm" class="leading-6">{p.description}</Text>
  <div class="chips">
    {#each p.categories as cat}
      <span> {cat}</span>
    {/each}
  </div>
</Card>
