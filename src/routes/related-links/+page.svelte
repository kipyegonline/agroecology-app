<script lang="ts">
  import { goto } from "$app/navigation";
  import { ExternalLinkIcon, CheckCheckIcon, Check } from "lucide-svelte";
  import { onDestroy, onMount } from "svelte";
  type Links = { name: string; link: string; des: string; clicked?: boolean };
  let title = "clicked-links";

  let defaultLinks = [
    {
      name: "The Organic Farmer (magazine,radio,articles,Mkulima Mbunifu,videos) ",
      des: "",
      link: "https://theorganicfarmer.org/",
    },
    {
      name: "Biovision Infonet System",
      des: "",
      link: "https://www.infonet-biovision.org",
    },
    {name:" [PELUM] 12 Best Agroecological Practices",des:"",link:"https://www.pelumkenya.net/wp-content/uploads/2021/11/12-Best-Agroecological-Practices.pdf"},
   {name:"Evaluating the Integration of Agroecological Principles into",des:"",link:"https://www.cifor-icraf.org/publications/pdf/reports/Kenya-Legal-Policy-Framework.pdf"},
    {name:"[KNA] Agroecology Conference to propel push for sustainable agriculture",des:"",link:"https://www.kenyanews.go.ke/agroecology-conference-to-propel-push-for-sustainable-agriculture/"},
   {
      name: "PUBLIC CONSULTATION FEEDBACK ON THE DRAFT NATIONAL AGROECOLOGY STRATEGY FOR FOOD SYSTEM TRANSFORMATION",
      des: "",
      link: "https://kilimo.go.ke/public-consultation-feedback-on-the-draft-national-agroecology-strategy-for-food-system-transformation-2/",
    },
    {
      name: "THE 13 PRINCIPLES OF AGROECOLOGY",
      link: "https://www.agroecology-europe.org/the-13-principles-of-agroecology/",
      des: "",
    },
    {
      name: " Principles​ of Agroecology",
      link: "https://www.agroecology-pool.org/13aeprinciples/",
      des: "",
    },
    {
      name: "Agroecology: Importance, benefits and Principles",
      link: "https://eartheclipse.com/environment/agroecology-importance-benefits-principles.html",
      des: "",
    },
    {
      name: "What is Agroecology",
      link: "https://agricology.co.uk/what-is-agroecology/",
      des: "",
    },
    {
      name: "What Is Agroecology? An In-Depth Guide",
      link: "https://grocycle.com/what-is-agroecology",
      des: "",
    },
    {
      name: "The role of Agroecology in Sustainable Intensification",
      link: "https://www.organicresearchcentre.com/manage/authincludes/article_uploads/ORC119_SNHagroecology.pdf",
      des: "",
    },
    {
      name: "What Is Agroecology? [PDF]",
      link: "http://agroeco.org/",
      des: "",
    },
    {
      name: "Agroecology:What is it and what it has to offer [PDF]",
      link: "https://www.iied.org/sites/default/files/pdfs/migrate/14629IIED.pdf",
      des: "",
    },
    {
      name: "FAO:Agroecology Knowledge Hub",
      link: "https://www.fao.org/agroecology/home/en/",
      des: "",
    },
    {
      name: "Agroecology, regenerative agriculture, and nature-based solutions",
      link: "https://www.fao.org/family-farming/detail/en/c/1611311/",
      des: "",
    },
    {
      name: "Regenerative agriculture—agroecology without politics?",
      link: "https://www.frontiersin.org/articles/10.3389/fsufs.2022.844261/full",
      des: "",
    },
    {
      name: "Agroecology training manual; Key concepts,prinicples and practices [PDF]",
      link: "http://agroeco.org/wp-content/uploads/2015/11/Agroecology-training-manual-TWN-SOCLA.pdf",
      des: "",
    },
  ];
 
  const descriptions=defaultLinks.map(dl=>`${dl.name}`).join(",  ")
  onMount(()=>{
    // remove tracking clicked links
    const exists=JSON.parse(localStorage.getItem(title) as string);
    if(exists)localStorage.removeItem(title)
  })
</script>

<svelte:head>
  <title>Home| Agroecology app | related links and resources | {descriptions}</title>
  <meta name="description" content={`Agroecology resources, related : ${descriptions}` } />
</svelte:head>

<section class="pt-4 md:pt-20 m-2 md:m-4 min-h-screen">
 
  <h1 class="text-3xl md:text-4xl font-bold text-center text-emerald-700 mb-12 tracking-tight">
   Links related to Agroecology.
  </h1>




<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">


   {#if Array.isArray(defaultLinks)}
    {#each defaultLinks as link, i (link.link)}
      <a
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        class="bg-white dark:bg-gray-800 rounded-md shadow hover:shadow-lg transition-shadow duration-200 flex flex-col"
      >
        <div class=" flex-grow">
          <div class="bg-jungle-600 dark:bg-jungle-400 p-4 transform hover:scale-105 hover:bg-jungle-400 transition-colors duration-200 text-white py-2 px-3 rounded-t-lg h-full">
            <h3 class="font-medium line-clamp-4">{link.name}</h3>
          </div>
          
        </div>
        <div class="mt-4  py-3  mr-4 flex justify-center items-center text-jungle-600 dark:text-jungle-400 hover:text-jungle-800 dark:hover:text-jungle-600">
          <span>Visit</span>
          <ExternalLinkIcon
            class="inline-block reative -top-4"
            size={15}
          />
        
        </div>
      </a>
    {/each}
    {/if}
     
  
</div>
</section>




