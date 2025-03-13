<script lang="ts">
  import { Text } from "@svelteuidev/core";
  import { agroecology, elements } from "../../components/payload";
  import { fade, fly } from 'svelte/transition';

  let loading = true;
  let lorem = `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi, impedit alias soluta suscipit quia deserunt voluptatibus est cupiditate placeat veniam ratione maiores fugit autem quam nemo sed blanditiis ullam?`;
</script>

<svelte:head>
  <title>Agroecology|Elements of agroecology</title>
  <meta name="description" content="Elements of Agroecology" />
</svelte:head>
<section class="pt-4 md:pt-20 m-2 md:m-4 hidden">
  <Text
    class=" !text-2xl md:!text-5xl py-0 md:py-2 my-2 md:my-4 text-center"
    variant="gradient">Elements of agroecology</Text
  >

  <div class="overflow-x-scroll w-full md:overflow-x-auto flexy justify-center hidden">
    <table class="table">
      <thead>
        <tr><th>#</th><th>Element</th><th>Description</th></tr>
      </thead>
      <tbody>
        {#each elements as element, i}
          <tr
            ><td class="font-medium">{i + 1}.</td>
            <td class="text-left capitalize font-medium w-auto md:w-60"
              >{element.name}</td
            ><td class=" px-2 font-medium"
              >{element.des.length > 0 ? element.des : lorem}</td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>

<style>
  th,
  td {
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-collapse: collapse;
  }
  th:first-child {
    width: 50px;
  }

  table {
    max-width: 100%;

    font-weight: 400;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow:
      3px 3px 5px #fff,
      -3px -3px 5px #fff;
  }
</style>

<header class="bg-jungle-600 dark:bg-jungle-400 text-white py-8 mb-4 hidden"></header>
  <div in:fade={{ duration: 800, delay: 200 }} class="max-w-7xl mx-auto px-4">
    <h1 class="text-4xl font-bold text-center text-emerald-700 mb-12 tracking-tight">Elements of agroecology</h1>
  </div>



<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
  {#each elements as element, index}
    <div
     
      class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform"
    >
      <div class="p-4">
        <img src={elements[0].image} alt={element.name} class="w-full h-40 object-cover rounded-t-lg mb-4" />
        <h3 class="text-lg font-medium text-gray-800 dark:text-white capitalize">{element.name}</h3>
        <p class="text-gray-600 dark:text-gray-300 mt-2">{element.des}</p>
      </div>
    </div>
  {/each}
</div>