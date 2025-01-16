<script>
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
    let title="Sustainable farming";
  </script>
  <svelte:head>
    <title>Home| Agroecology app | {title}</title>
    <meta
      name="description"
      content="A one stop platform for agroecology;  principles of agroecology, Elements of agroecology and agroecology examples, pictorials and blogs"
    />
  </svelte:head>
  
  <main class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
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
              <a href="/principles" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-jungle-600 dark:hover:text-jungle-400">
                <Grid class="h-4 w-4 mr-1" />
                <span>Principles</span>
              </a>
              <a href="/elements" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-jungle-600 dark:hover:text-jungle-400">
                <Layout class="h-4 w-4 mr-1" />
                <span>Elements</span>
              </a>
              <a href="/examples" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-jungle-600 dark:hover:text-jungle-400">
                <BookOpen class="h-4 w-4 mr-1" />
                <span>Examples</span>
              </a>
              <a href="/resources" class="flex items-center text-gray-600 dark:text-gray-300 hover:text-jungle-600 dark:hover:text-jungle-400">
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
  
    <!-- Hero Section -->
    <div class="relative bg-white dark:bg-gray-800 overflow-hidden transition-colors duration-200">
      <div class="max-w-7xl mx-auto">
        <div class="relative pb-8 bg-white dark:bg-gray-800 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div class="text-center">
              <h1 class="text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8">
                <span class="block text-jungle-600 dark:text-jungle-400">Agroecology</span>
              </h1>
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3"
                    alt="Sustainable farming"
                    class="w-full h-96 object-cover"
                  />
                </div>
                <div class="text-left space-y-6">
                  <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    Agroecology is an integrated approach that simultaneously applies ecological and social concepts and principles to the design and management of sustainable food and agricultural systems.
                  </p>
                  <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    It seeks to optimize the interactions between plants, animals, humans, and the environment while taking into consideration the social aspects needed for a sustainable and fair food system.
                  </p>
                  <div class="pt-4">
                    <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Why Agroecology?</h2>
                    <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                      Agroecology transforms existing food production systems into more sustainable and resilient food production systems, ensuring food security while preserving our environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </main>
  
  <style>
    :root {
      --jungle-400: #4ade80;
      --jungle-600: #16a34a;
    }
  
    :global(.dark) {
      --jungle-400: #4ade80;
      --jungle-600: #16a34a;
    }
  </style>