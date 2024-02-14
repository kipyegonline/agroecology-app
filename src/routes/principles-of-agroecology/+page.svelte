<script lang="ts">
  import { poe } from "$components/payload";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { user, principlesofAgroEcology } from "$store/store";
  import Card from "$components/Card/Card.svelte";
  import { Box, Text } from "@svelteuidev/core";

  let info: string;

  onMount(() => {
    user.set({ name: "Kipyegon", married: false, age: 20 });
  });
  let current = -1;
  const handleClick = (num: number) => (current = num);
  let title = "Principles of agroecology";
  let h1styles = { padding: "5px", color: "blue", fontStyle: "italics" };
</script>

<svelte:head>
  <title>Home| {title}</title>
  <meta name="description" content="Principles of agroecology" />
</svelte:head>

<section class="pt-4 md:pt-20 m-2 md:m-4">
  <Text variant="gradient" class=" text-2xl md:text-5xl py-2 my-4" underline
    >Principles of Agroecology</Text
  >

  <Box class="flex   gap-3 flex-wrap">
    {#each $principlesofAgroEcology as p, index (p.name)}
      <Card {p} />
    {/each}</Box
  >
</section>

<style>
  .active {
    background: purple;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
  .principles {
    list-style: none;
    padding: 5px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2rem;
  }
  .principles li {
    max-width: 300px;
  }
  .card {
    background: white;

    line-height: 1.25;
    border: 1px solid #ccc;
    padding: 0.75rem;
    transition: all 2s ease-in-out;
    min-width: 300px;

    height: min-content;
    min-height: 250px;
  }

  .card h3 {
    border: 1px solid cyan;
    text-align: center;
    margin: 0;
    padding: 0.5rem;
  }
  .card p {
    text-align: center;
    min-height: 100px;
    border: 1px solid magenta;
    padding: 1rem;
  }
  .chips {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .chips span {
    border-radius: 10px;
    border: 1px solid green;
    padding: 5px 10px;
    width: 30px;
  }
  ul {
    list-style: none;
    background: white;
    padding: 1rem;
    transition: all 500ms ease-in;
  }
</style>
