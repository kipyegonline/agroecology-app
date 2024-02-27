<script>
  import {
    SvelteUIProvider,
    colorScheme,
    AppShell,
    Navbar,
    Footer,
  } from "@svelteuidev/core";
  import Header from "./Header.svelte";
  import "./styles.css";
  import { onMount } from "svelte";
  import MobileMenu from "$components/MobileMenu/MobileMenu.svelte";
  import ContactModal from "$components/ContactModal/Contact.svelte";

  let open = false;
  onMount(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-1466RY5B8K");
  });

  let bgStyles = "";
</script>

<div class="app">
  <AppShell>
    <Navbar class=" p-2 !h-16 !hidden md:!block " width={{ base: "100%" }}
      ><Header /></Navbar
    >
    <MobileMenu />
    <SvelteUIProvider
      class="border--400 border container relative "
      withNormalizeCSS
      withGlobalStyles
      themeObserver={$colorScheme}
    >
      <main class=" border-greens-400 borders relative">
        <slot />
      </main>
      <ContactModal {open} closeModal={() => (open = false)} />
    </SvelteUIProvider>
  </AppShell>
  <footer
    class="bg-green-700 h-16 text-white flex items-center justify-center !static left-0 right-0 bottom-0 w-full"
  >
    <p>All rights Reserved &copy; {new Date().getFullYear()}</p>
    <div class="relative w-full">
      <button
        class="absolute bottom-0 right-0 md:right-4 md:bottom-2 text-sm"
        on:click={() => (open = true)}
      >
        Contact Us
      </button>
    </div>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
    main {
      padding: 0.25rem;
    }
  }
</style>
