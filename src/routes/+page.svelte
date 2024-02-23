<script lang="ts">
  import { poe } from "../components/payload";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { user, principlesofAgroEcology } from "../store/store";
  import Card from "../components/Card/Card.svelte";
  import {
    Box,
    Text,
    Center,
    Card as SvelteCard,
    Image,
  } from "@svelteuidev/core";
  import { agroecology } from "$components/payload";
  import bg from "$lib/agripics/20231206112701_IMG_5391.JPG";
  import bg2 from "$lib/agripics/20230908153132_IMG_0882.JPG";
  import tea from "$lib/agripics/20240110115442_IMG_6741.JPG";
  let title = "";
  let nat = "National Agroecology for Food System Transformation Strategy";

  let orgdef = `Organic farming is a production
system that sustains the health of soils, ecosystems
and people. It relies on ecological processes,
biodiversity and cycles adapted to local conditions,
rather minimize harm to the environment and human health.
Organic agriculture combines tradition, innovation
and science to benefit the shared environment and
promote fair relationships and a good quality of
life for all involved. `;
  let whyAgro = `Agroecology seeks to transform existing
food production systems to a more sustainable and resilient food production system.`;
  let firstLetter =
    "first-letter:text-4xl first-letter:font-medium first-letter:text-green-600";
</script>

<svelte:head>
  <title>Home| Agroecology app | {title}</title>
  <meta
    name="description"
    content="A one stop platform for agroecology;  principles of agroecology, Elements of agroecology and agroecology examples, pictorials and blogs"
  />
</svelte:head>
<!--what is agroecology-->

<section class="pt-2 md:pt-10">
  <Center>
    <Text
      variant="gradient"
      class=" !text-2xl md:!text-5xl py-0 md:py-2 my-2 md:my-4"
      underline>What is Agroecology</Text
    >
  </Center>
  <Center class="min w-full min-w-60  p-4  ">
    <SvelteCard
      class="p-4 rounded-lg !flex flex-col md:flex-row gap-4 justify-between"
    >
      <Box class="w-full md:w-1/2 p-4">
        {#each agroecology.split(".") as para, i}
          <Text
            size="md"
            class={i === 0
              ? firstLetter + " !leading-7 text-left md:text-justify "
              : " !leading-7 text-left md:text-justify "}>{para}.</Text
          >
        {/each}
        <Box>
          <Text class="text-center font-semibold" size="md"
            >Why Agroecology</Text
          >
          <Text size="md" class="!leading-7 py-2">{whyAgro}</Text>
        </Box>
      </Box>
      <Box class="w-full md:w-1/2 rounded-lg -order-1 md:order-0">
        <Image src={bg} />
      </Box>
    </SvelteCard>
  </Center>
  <!--Benefits-->
  <Text class=" !text-2xl md:!text-5xl py-2 my-4" variant="gradient"
    >Benefits of Agroecology</Text
  >
  <Center class="w-full">
    <SvelteCard class="p-4 flex flex-col md:flex-row gap-4">
      <Box
        class=" flex flex-col items-center  gap-4 w-full md:w-1/2 rounded-lg "
      >
        <Text size="md" class="text-lg"
          ><b>Increased Food security</b> by improving soil fertility and crop yields
          leading to increased food production.</Text
        >
        <Text size="md" class="text-lg"
          ><b>Improved environmental health</b> by reducing greenhouse gas emissions,conserving
          water and protect biodiversity.</Text
        >
        <Text size="md" class="text-lg"
          ><b>Enhanced farmer livelihoods</b> through increased farmer income and
          improved working conditons.</Text
        >

        <Text size="md" class="text-lg"
          ><b>Greater resilience</b> - Agroecological systems are better able to
          withstand climate change,pests and diseases.</Text
        ></Box
      >
      <Box class="w-full md:w-1/2 rounded-lg -order-1 md:order-0">
        <img src={tea} alt="" />
      </Box>
    </SvelteCard>
  </Center>
  <!--organic farming-->
  <Center>
    <Text variant="gradient" class=" !text-2xl md:!text-5xl py-2 my-4" underline
      >What is organic farming</Text
    >
  </Center>
  <Center class="min w-full min-w-60  p-4 ">
    <SvelteCard
      class="p-4 rounded-lg !flex flex-col md:flex-row gap-4 justify-between"
    >
      <Box class="w-full md:w-1/2 p-4">
        <Text
          size="lg"
          class="!leading-6 hidden text-justify first-letter:text-4xl first-letter:font-medium first-letter:text-green-600"
          >Organic farming is a system of agriculture that prioritizes natural
          processes and ecological balance over the use of synthetic chemicals.
          It aims to produce food and other agricultural products in a way that
          is
          <b
            >sustainable and minimizes harm to the environment and human health.</b
          ></Text
        >
        {#each orgdef.split(".") as org, i}
          <Text
            size="md"
            class={i === 0
              ? firstLetter +
                " !leading-7 text-left md:text-justify first-letter:text-green-600 "
              : " !leading-7 text-left md:text-justify "}>{org}</Text
          >
        {/each}
      </Box>

      <Box class="w-full md:w-1/2 rounded-l -order-1 md:order-0">
        <Image src={bg2} />
      </Box>
    </SvelteCard>
  </Center>
</section>

<style>
  .active {
    background: purple;
  }
  section {
    display: flex !important;
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
    display: flex !important;
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
