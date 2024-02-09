<script lang="ts">
  import { fade } from "svelte/transition";
  import { Card, Text, Box, Center, Divider, Image } from "@svelteuidev/core";
  import type { POE } from "../../store/store";
  import Badge from "../badge/badge.svelte";
  type Category = {
    name: string;
    description: string;
    categories: string[];
    image: string;
  };
  export let p: POE = {
    name: "",
    description: "",
    categories: [],
    fao: [],
    image: "",
    more: "",
  };
</script>

<Card
  shadow="xl"
  padding="lg"
  class="w-full md:w-80 mx-w-80 min-h-64 rounded-xl scale-100 hover:-top-2 hover:-left-2 transition-all ease-in-out duration-800 hover:shadow-2xl"
>
  <h3 transition:fade class="text-xl font-semibold py-2 text-center">
    {p.name}
  </h3>
  <Center class=" min-h-40  overflow-hidden pb-2 mb-4"
    ><Image
      src={p.image}
      alt={p.name}
      title={p.name}
      class="mx-w-full h-60 md:h-40  object-fill "
    /></Center
  >

  <Text class="leading-6 text-justify text-base mb-4">{p.description}</Text>

  <Center class=" flex gap-4  text-xl absolute left-0 right-0 bottom-2  ">
    {#each p.categories as cat}
      <Badge category={cat} />
    {/each}
  </Center>
</Card>
