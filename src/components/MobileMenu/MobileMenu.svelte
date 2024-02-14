<script lang="ts">
  import { Menu, Text } from "@svelteuidev/core";
  import { Menu as MenuIcon, X, List } from "lucide-svelte";
  import { appLinks } from "../../store/store";
  import logo from "$lib/images/agroecology_logo.png";
  let openned = false;
  let links = $appLinks;
  const handleLinkClick = (link: string) => {
    links = links.map((li) =>
      li.link === link ? { ...li, active: true } : { ...li, active: false }
    );
    appLinks.set(links);
  };
</script>

<section class="!w-screen z-30 block md:hidden">
  <div class="flex justify-between h-20 p-2 relative pb-2 mr-3">
    <div class="">
      <a href="/">
        <img
          src={logo}
          alt="SvelteKit"
          class="h-full w-auto max-w-full rounded-lg"
        />
      </a>
    </div>

    {#if !openned}
      <button class="h-full inline-block" on:click={() => (openned = true)}
        ><MenuIcon size={48} /></button
      >
    {:else}
      <button class="h-full" on:click={() => (openned = false)}
        ><X size={48} /></button
      >
    {/if}
  </div>
  <div
    class="absolute bg-white w-full z-30 rounded-lg transition-all ease-in-out duration-200"
    style="maximum-height:{openned ? '400px' : '10px'};display:{openned
      ? 'block'
      : 'none'};"
    on:click={() => setTimeout(() => (openned = false), 200)}
  >
    <ul class="list-none flex flex-col gap-4 mx-auto pb-4">
      {#each links as { active, link, name, icon }}
        <li class="text-xl mx-auto">
          <a class:active on:click={() => handleLinkClick(link)} href={link}>
            {name}</a
          >
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  section {
    width: 100%;
    background-color: white;
  }
  .active {
    cursor: pointer;
  }
</style>
