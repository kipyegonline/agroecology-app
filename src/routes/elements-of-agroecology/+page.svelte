<script lang="ts">
  import { agroecology, elements } from "../../components/payload";

  let loading = true;
</script>

<svelte:head>
  <title>Agroecology|Elements of agroecology</title>
  <meta name="description" content="Elements of Agroecology" />
</svelte:head>
<section class="pt-20">
  <h1 class="">Elements of agroecology</h1>

  <div class="overflow-x-scroll md:overflow-x-auto flex justify-center">
    <table class="table">
      <thead>
        <tr><th>#</th><th>Element</th></tr>
      </thead>
      <tbody>
        {#each elements as element, i}
          <tr
            ><th>{i + 1}.</th><th class="text-left capitalize font-medium"
              >{element.name}</th
            ></tr
          >
        {/each}
      </tbody>
    </table>
  </div>
</section>

<style>
  th {
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-collapse: collapse;
  }
  th:first-child {
    width: 50px;
  }

  table {
    max-width: 100%;
    border: 1px solid red;
    font-weight: 400;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow:
      3px 3px 5px #fff,
      -3px -3px 5px #fff;
  }
</style>
