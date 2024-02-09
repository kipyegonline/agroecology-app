<script lang="ts">
  import { colorScheme } from "@svelteuidev/core";
  //import { MoonIcon as Moon, SunIcon as Sun } from "lucide-svelte";
  import { page } from "$app/stores";
  import logo from "$lib/images/agroecology_logo.png";
  import github from "$lib/images/github.svg";
  const isDark = $colorScheme === "dark";
  type Link = { name: String; link: string; active: boolean };
  let links: Link[] = [
    { name: "Home", link: "/", active: !false },
    {
      name: "Principles of Agroecology",
      link: "/principles-of-agroecology",
      active: false,
    },
    {
      name: "Elements of Agroecology",
      link: "/elements-of-agroecology",
      active: false,
    },
    { name: "Related links", link: "/related-links", active: false },
    { name: "Blogs", link: "/blogs", active: false },
  ];
  const handleLinkClick = (link: Link) => {
    links = links.map((li) =>
      li.name === link.name ? { ...li, active: true } : { ...li, active: false }
    );
  };
</script>

<header>
  <div class="corner">
    <a href="/">
      <img src={logo} alt="SvelteKit" class="h-40 w-40 max-w-full" />
    </a>
  </div>

  <nav>
    <ul>
      {#each links as link}
        <li class="text-xl">
          <a
            class:active={link.active}
            on:click={() => handleLinkClick(link)}
            href={link.link}>{link.name}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
  <!--
  <div class="absolute right-0 mr-4">
    {#if isDark}
      <span><Moon /></span>
    {:else}
      <span><Sun /></span>
    {/if}
    <span></span>
  </div>-->
</header>

<style>
  header {
    display: flex;
    justify-content: center;
  }

  .corner {
    width: 3em;
    height: 3em;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  li a {
    transition: all ease-in 500ms;
  }
  .active {
    color: green;
    border-bottom: 1px solid green;
  }

  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: space-evenly;
    --background: rgba(255, 255, 255, 0.7);
    gap: 2rem;
    width: 100%;
    border: 1px solid cyan;
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
    width: 100%;
  }

  li {
    position: relative;
    height: 100%;
  }

  li[aria-current="page"]::before {
    --size: 6px;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--color-theme-1);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: capitalize;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover,
  a:active {
    color: var(--color-theme-1);
  }
</style>
