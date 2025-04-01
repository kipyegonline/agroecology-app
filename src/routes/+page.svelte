<script>
  import Hero from "$components/home/Hero.svelte";
  import WhyAgroecology from "$components/home/WhyAgroecology.svelte";
  import Principles from "$components/principles/index.svelte";
import ElementSlider from "$components/ElementSlider/index.svelte";

let title="Agroecology Kenya"
let description=`Agroecology in Kenya, Agroecology Kenya,| National Agroecology strategy Kenya, | National Agroecology Strategy for Food Systems Transformation, | 13 principles of Agroecology |  10 elements of agroecology, | Agroecology conference Kenya ${new Date().getFullYear()}, Sustainable food farming. Ecological Organic Agriculture | Biovision Africa Trust | Best Agroecological Practices PELUM Kenya | Nairobi Conference on Agroecology, sustainable Agrifood systems| Agroecology Revolution in Kenya | Eastern Africa Agroecology Conference | agroecological practices examples`
</script>

<svelte:head>
  <title>Home| Agroecology app | {title}</title>
  <meta
    name="description"
    content={description}
  />
</svelte:head>
<main class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">

<Hero />
<WhyAgroecology />
<ElementSlider />
<Principles/>
</main>