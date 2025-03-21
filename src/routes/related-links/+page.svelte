<script lang="ts">
  import { goto } from "$app/navigation";
  import { ExternalLinkIcon, CheckCheckIcon, Check } from "lucide-svelte";
  import { onDestroy, onMount } from "svelte";
  type Links = { name: string; link: string; des: string; clicked?: boolean };
  let title = "clicked-links";
  let links: Links[] | undefined;
  const isWindow = globalThis?.window;
  const locallinks = isWindow
    ? JSON.parse(localStorage.getItem(title) as string)
    : null;
  const setItem = (items: Links[]) =>
    localStorage.setItem(title, JSON.stringify(items));
  onMount(() => {
    if (locallinks) {
      if (locallinks.length !== defaultLinks.length) setItem(defaultLinks);
      else links = locallinks;
    } else {
      links = defaultLinks;
    }
  });
  onDestroy(() => {
    if (links !== undefined) setItem(links);
  });
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
  const handleClick = (link: Links): null => {
    if (links) {
      links = links.map((li) =>
        li.link === link.link ? { ...li, clicked: true } : { ...li }
      );
    }
    return null;
  };
</script>

<svelte:head>
  <title>Home| Agroecology app | related links and resources</title>
  <meta name="description" content=" Agroecology resources, related links" />
</svelte:head>

<section class="pt-4 md:pt-20 m-2 md:m-4 min-h-screen">
 
  <h1 class="text-3xl md:text-4xl font-bold text-center text-emerald-700 mb-12 tracking-tight">
   Links related to Agroecology.
  </h1>




<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

  {#if links?.length === 0}
    <div class="text-center text-gray-600 dark:text-gray-300">No related links available.</div>
  {:else}
   {#if Array.isArray(links)}
    {#each links as link, i (link.link)}
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
          {#if link?.clicked}
            <CheckCheckIcon class="inline-block relative -top-4" size={15} />
          {/if}
        </div>
      </a>
    {/each}
    {/if}
     
  {/if}
</div>
</section>




