<script>
    import { onMount } from 'svelte';
    
    let darkMode = false;
    
    // Toggle dark mode
    function toggleDarkMode() {
      darkMode = !darkMode;
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    
    // Benefits data
    const benefits = [
      {
        title: 'Increased Food Security',
        description: 'Improving soil fertility and crop yields leading to increased food production',
        icon: '🌾'
      },
      {
        title: 'Improved Environmental Health',
        description: 'Reducing greenhouse gas emissions, conserving water and protecting biodiversity',
        icon: '🌿'
      },
      {
        title: 'Enhanced Farmer Livelihoods',
        description: 'Through increased farmer income and improved working conditions',
        icon: '👨‍🌾'
      },
      {
        title: 'Greater Resilience',
        description: 'Agroecological systems are better able to withstand climate change, pests and diseases',
        icon: '🌡️'
      }
    ];
    import bg2 from "$lib/2025/plants.jpg";
    import og from "$lib/2025/IMG_3365.JPG";
    
  </script>
  
  <main class="min-h-screen transition-colors duration-300 {darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}">
    <!-- Navigation -->
    <nav class=" hidden py-4 px-6 flex justify-between items-center {darkMode ? 'bg-gray-800' : 'bg-white shadow-sm'}">
      <h1 class="text-2xl font-bold text-blue-500">AgroEco</h1>
      <button
        on:click={toggleDarkMode}
        class="p-2 rounded-full {darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}"
        aria-label="Toggle dark mode"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
    </nav>
  
    <!-- Hero Section -->
    <section id="benefits"  class="relative h-[500px] overflow-hidden">
      <img
        src={og}
        alt="Agricultural landscape"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 class="text-4xl md:text-6xl font-bold text-white text-center px-4">
          Benefits of Agroecology
        </h2>
      </div>
    </section>
  
    <!-- Benefits Section -->
    <section class="max-w-7xl mx-auto px-4 py-16" >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each benefits as benefit}
          <div class="p-6 rounded-lg {darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'} transition-transform hover:scale-105">
            <div class="text-4xl mb-4">{benefit.icon}</div>
            <h3 class="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p class="{darkMode ? 'text-gray-300' : 'text-gray-600'}">{benefit.description}</p>
          </div>
        {/each}
      </div>
    </section>
  
   
  </main>
  
  <style>
    :global(html) {
      scroll-behavior: smooth;
    }
  </style>