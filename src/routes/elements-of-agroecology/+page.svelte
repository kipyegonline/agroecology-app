<script lang="ts">
  import { agroecology, elements } from "../../components/payload";

  let loading = true;
  let lorem = `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi, impedit alias soluta suscipit quia deserunt voluptatibus est cupiditate placeat veniam ratione maiores fugit autem quam nemo sed blanditiis ullam?`;
</script>

<svelte:head>
  <title>Agroecology|Elements of agroecology</title>
  <meta name="description" content="Elements of Agroecology" />
</svelte:head>
<section class="pt-20">
  <h1 class="">Elements of agroecology</h1>

  <div class="overflow-x-scroll w-full md:overflow-x-auto flex justify-center">
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
            ><td class=" px-2 text-justify font-medium"
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
