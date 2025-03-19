<script lang="ts">
  import { page } from '$app/stores';
  import { fly, slide } from 'svelte/transition';
  import { Home, Leaf, Grid, BookOpen, Layout, Link2, Sun, Moon, Menu, X } from 'lucide-svelte';
  import { onMount } from 'svelte';

  const menuItems = [
    { icon: Home, name: 'Home', href: '/' },
    { icon: Grid, name: 'Principles', href: '/#principles' },
    { icon: Layout, name: 'Elements', href: '/elements-of-agroecology' },
    { icon: BookOpen, name: 'Examples', href: '/agroecology-practices' },
    { icon: BookOpen, name: 'Blogs', href: '/blogs' },
    { icon: Link2, name: 'Resources', href: '/related-links' }
  ];

  let darkMode = false;
  let mobileMenuOpen = false;
  let isVisible = true;
  let lastScrollY = 0;
  let scrollThreshold = 20; // Minimum scroll amount to trigger hiding/showing

  onMount(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkMode = true;
      document.documentElement.classList.add('dark');
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup when component is destroyed
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  function handleScroll() {
    const currentScrollY = window.scrollY;
    
    // Check if we've scrolled enough to trigger a change
    if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) {
      return;
    }
    
    // Show navbar when scrolling up, hide when scrolling down
    if (currentScrollY < lastScrollY) {
      // Scrolling up
      isVisible = true;
    } else {
      // Scrolling down - only hide when we're not at the top of the page
      if (currentScrollY > 50) {
        isVisible = false;
      }
    }
    
    lastScrollY = currentScrollY;
  }

  function toggleDarkMode() {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark');
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<nav class="bg-white dark:bg-gray-800 shadow-sm z-50 transition-all duration-300 {isVisible ? 'sticky top-0' : 'fixed -top-20'}" style="width: 100%;">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center">
        <a href="/" class="flex items-center"> <Leaf class="h-8 w-8 text-jungle-600 animate-pulse dark:text-jungle-400" />
          <span class="ml-2 text-xl font-semibold text-gray-800 dark:text-white">AgroEco</span></a>
       
      </div>
      
      <!-- Mobile Menu Toggle -->
      <div class="md:hidden">
        <button 
          on:click={toggleMobileMenu} 
          class="text-gray-600 dark:text-gray-300 hover:text-jungle-600"
        >
          {#if mobileMenuOpen}
          <span transition:fly="{{ x: 200, duration: 200 }}"><X class="h-6 w-6"  /></span>
            
          {:else}
          <span  transition:fly="{{ x: -200, duration: 200 }}"> <Menu class="h-6 w-6"  /></span>
           
          {/if}
        </button>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <div class="flex space-x-8">
          {#each menuItems as item}
            <a 
              href={item.href} 
              class="flex items-center {$page.url.pathname === item.href 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-gray-600 dark:text-gray-300'} 
              hover:text-jungle-600 dark:hover:text-jungle-400"
            >
              <svelte:component 
                this={item.icon} 
                class="h-4 w-4 mr-1" 
              />
              <span>{item.name}</span>
            </a>
          {/each}
        </div>
        <button 
          on:click={toggleDarkMode}
          class="p-2 rounded-full hidden hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {#if darkMode}
            <Sun class="h-5 w-5 text-gray-300" />
          {:else}
            <Moon class="h-5 w-5 text-gray-600" />
          {/if}
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    {#if mobileMenuOpen}
      <div 
        class="md:hidden absolute left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50" 
        transition:slide="{{ duration: 300 }}"
      >
        <div class="px-2 pt-2 pb-3 space-y-1"  >
          {#each menuItems as item}
            <a 
              href={item.href} 
              class="block px-3 py-2 flex items-center {$page.url.pathname === item.href 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-gray-600 dark:text-gray-300'} 
              hover:bg-gray-100 dark:hover:bg-gray-700"
              on:click={toggleMobileMenu}
            >
              <svelte:component 
                this={item.icon} 
                class="h-4 w-4 mr-2" 
              />
              <span>{item.name}</span>
            </a>
          {/each}
          <button 
            on:click={toggleDarkMode}
            class=" hidden w-full text-center md:text-left px-3 py-2  items-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {#if darkMode}
              <Sun class="h-5 w-5 mr-2 text-gray-300" />
              <span>Light Mode</span>
            {:else}
              <Moon class="h-5 w-5 mr-2 text-gray-600" />
              <span>Dark Mode</span>
            {/if}
          </button>
        </div>
      </div>
    {/if}
  </div>
</nav>