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
  import MobileMenu from "$components/MobileMenu/MobileMenu.svelte";
  import ContactModal from "$components/ContactModal/Contact.svelte";

  let bgStyles = "";
  let open = false;
</script>

<div class="app">
  <AppShell>
    <Navbar class=" p-2 !h-16 !hidden md:!block " width={{ base: "100%" }}
      ><Header /></Navbar
    >
    <MobileMenu />
    <SvelteUIProvider
      class="border--400 border container"
      withNormalizeCSS
      withGlobalStyles
      themeObserver={$colorScheme}
    >
      <main class=" border-greens-400 borders">
        <slot />
      </main>
      <ContactModal {open} closeModal={() => (open = false)} />
      <Footer
        height={60}
        class="bg-green-700 text-white flex items-center justify-center fixed bottom-0 w-full"
      >
        <p>All rights Reserved &copy; {new Date().getFullYear()}</p>
        <button
          class="absolute right-4 bottom-2 text-sm"
          on:click={() => (open = true)}
        >
          Contact Us
        </button>
      </Footer>
    </SvelteUIProvider>
  </AppShell>
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
