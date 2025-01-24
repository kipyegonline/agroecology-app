 <script lang="ts">
     import { Home, Leaf, Grid, BookOpen, Layout, Link2, Sun, Moon } from 'lucide-svelte';
     import { onMount } from 'svelte';
  
  let darkMode = false;

  onMount(() => {
    // Check system preferences
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkMode = true;
      document.documentElement.classList.add('dark');
    }
  });

  function toggleDarkMode() {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark');
  }
 </script>
 <!-- Navigation -->
 <nav class="bg-white dark:bg-gray-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <Leaf class="h-8 w-8 text-jungle-600 dark:text-jungle-400" />
          <span class="ml-2 text-xl font-semibold text-gray-800 dark:text-white">AgroEco</span>
        </div>
        
        <div class="flex items-center space-x-8">
          <div class="hidden md:flex space-x-8">
            <a href="/" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-jungle-600 dark:hover:text-jungle-400">
              <Home class="h-4 w-4 mr-1" />
              <span>Home</span>
            </a>
            <a href="/v2#principles" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-jungle-600 dark:hover:text-jungle-400">
              <Grid class="h-4 w-4 mr-1" />
              <span>Principles</span>
            </a>
            <a href="/elements-of-agroecology" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-jungle-600 dark:hover:text-jungle-400">
              <Layout class="h-4 w-4 mr-1" />
              <span>Elements</span>
            </a>
            <a href="/agroecology-practices" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-jungle-600 dark:hover:text-jungle-400">
              <BookOpen class="h-4 w-4 mr-1" />
              <span>Examples</span>
            </a>
            <a href="/blogs" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-jungle-600 dark:hover:text-jungle-400">
                <BookOpen class="h-4 w-4 mr-1" />
                <span>Blogs</span>
              </a>
            <a href="/related-links" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-jungle-600 dark:hover:text-jungle-400">
              <Link2 class="h-4 w-4 mr-1" />
              <span>Resources</span>
            </a>
          </div>
          <button 
            on:click={toggleDarkMode}
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
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
    </div>
  </nav>