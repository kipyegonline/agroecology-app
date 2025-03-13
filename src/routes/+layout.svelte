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
  import AppFooter from "$components/Footer/index.svelte";
import Nav from "$components/Nav/index.svelte"
  let open = false;
const setOpen=()=>{ 
  
  open = !open};

  let bgStyles = "";
</script>

<div class="app">
  <AppShell>
  
    <Nav/>
    
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
  <AppFooter handleClick={setOpen} />
 
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
