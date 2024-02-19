<script lang="ts">
  import { Menu, Text, Burger } from "@svelteuidev/core";
  import { Menu as MenuIcon, X, List } from "lucide-svelte";
  import { appLinks } from "../../store/store";
  import logo from "$lib/images/agroecology_logo.png";
  import { fade } from "svelte/transition";
  let opened = false;
  let links = $appLinks;
  const handleLinkClick = (link: string) => {
    links = links.map((li) =>
      li.link === link ? { ...li, active: true } : { ...li, active: false }
    );
    appLinks.set(links);
  };
  const closeMenu = () => setTimeout(() => (opened = false), 200);
</script>

<section class="!w-screen z-30 block md:hidden">
  <div class="flex justify-between h-16 p-2 relative pb-2 mr-3">
    <div class="">
      <a href="/">
        <img
          src={logo}
          on:click={closeMenu}
          alt="SvelteKit"
          class="h-full w-auto max-w-full rounded-lg"
        />
      </a>
    </div>

    <Burger {opened} on:click={() => (opened = !opened)} size="lg" />
  </div>
  <div
    class="absolute bg-white w-full z-30 rounded-lg transition-all ease-in-out duration-200"
    style="maximum-height:{opened ? '400px' : '10px'};display:{opened
      ? 'block'
      : 'none'};"
    on:click={closeMenu}
  >
    <ul
      class="list-none flex flex-col gap-4 mx-auto pb-4"
      transition:fade={{ delay: 250, duration: 300 }}
    >
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
