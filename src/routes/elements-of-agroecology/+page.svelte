<script lang="ts">

  import ElementsComponent from "../../components/Elements/index.svelte";
  import {elements } from "../../components/payload";
  const descriptions=elements.map(element=>element.name).join(" | ")
 
let title=`Elements of Agroecology`,description=`10 Elements of Agroecology: ${descriptions}`;
</script>
<svelte:head>
  <title> Agroecology app | {title}</title>
  <meta
    name="description"
    content={description}
  />
</svelte:head>
<ElementsComponent/>