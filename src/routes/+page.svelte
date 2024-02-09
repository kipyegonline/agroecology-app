<script lang="ts">
  import { poe } from "../components/payload";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { user, principlesofAgroEcology } from "../store/store";
  import Card from "../components/Card/Card.svelte";
  import { Box, Text, Center, Card as SvelteCard } from "@svelteuidev/core";
  import { agroecology } from "$components/payload";
  let title = "";
</script>

<svelte:head>
  <title>Home| Agroecology app | {title}</title>
  <meta name="description" content="All things agroecology" />
</svelte:head>
<!--what is agroecology-->

<section class="pt-10">
  <Center>
    <Text variant="gradient" class=" text-2xl md:text-5xl py-2 my-4" underline
      >What is Agroecology</Text
    >
  </Center>
  <Center class="min w-full min-w-60  p-4 border border-cyan-600">
    <SvelteCard class="p-4 rounded-lg">
      <Text
        size="lg"
        class="leading-6 text-justify first-letter:text-4xl first-letter:font-medium"
        >{agroecology}</Text
      ></SvelteCard
    >
  </Center>
  <!--organic farming-->
  <Center>
    <Text variant="gradient" class=" text-2xl md:text-5xl py-2 my-4" underline
      >What is organic farming</Text
    >
  </Center>
  <Center class="min w-full min-w-60  p-4 border border-cyan-600">
    <SvelteCard class="p-4 rounded-lg">
      <Text
        size="lg"
        class="leading-6 text-justify first-letter:text-4xl first-letter:font-medium"
        >Organic farming is a system of agriculture that prioritizes natural
        processes and ecological balance over the use of synthetic chemicals. It
        aims to produce food and other agricultural products in a way that is
        <b
          >sustainable and minimizes harm to the environment and human health.</b
        ></Text
      >
    </SvelteCard>
  </Center>
  <!--characteristics-->
  <!--Benefits-->
  <!---Examples->
<!- principles and elements-->
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
