<script lang="ts">

  import ElementsComponent from "../../components/Elements/index.svelte";
 
let title=`Elements of Agroecology`,description=`10 Elements of Agroecology`
</script>
<svelte:head>
  <title> Agroecology app | {title}</title>
  <meta
    name="description"
    content={description}
  />
</svelte:head>
<ElementsComponent/>