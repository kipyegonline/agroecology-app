<script lang="ts">
  import { goto } from "$app/navigation";
  import { ExternalLinkIcon, CheckCheckIcon, Check } from "lucide-svelte";
  import { onDestroy, onMount } from "svelte";
  type Links = { name: string; link: string; des: string; clicked?: boolean };
  let title = "clicked-links";
  let links: Links[] | undefined;
  const locallinks = JSON.parse(localStorage.getItem(title) as string);
  onMount(() => {
    if (locallinks) {
      links = locallinks;
    } else links = defaultLinks;
  });
  onDestroy(() => {
    localStorage.setItem(title, JSON.stringify(links));
  });
  let defaultLinks = [
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
  <title>Home| Agroecology app | related links</title>
  <meta name="description" content="Agroecology resources" />
</svelte:head>

<section class="pt-20 border-red">
  <ul class="flex gap-2 flex-col">
    {#if links}
      {#each links as link, i (link.link)}
        <li class="p-4 bg-white rounded-lg min-h-4">
          <a href={link.link} target="_blank" on:click={handleClick(link)}>
            <div>
              <p>
                {i + 1}. {" "}{link.name}
                <ExternalLinkIcon
                  class="inline-block reative -top-4"
                  size={15}
                />
                {#if link?.clicked}
                  <span title="clicked">
                    <CheckCheckIcon
                      class="float-right"
                      color={link?.clicked ? "blue" : "lightblue"}
                    /></span
                  >
                {/if}
              </p>
              <small>{link.des}</small>
            </div>
          </a>
        </li>
      {/each}
    {/if}
  </ul>
</section>
