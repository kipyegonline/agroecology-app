<script lang="ts">
      import { ChevronRight, Leaf, Tractor as Farm, Sprout, Filter, Users, Heart } from 'lucide-svelte';
  import type { POE } from "$store/store";

    export let principle={}
      // Function to get appropriate icon based on principle name
      function getPrincipleIcon(name:string) {
      const icons = {
        "Recycling": Filter,
        "Input reduction": Leaf,
        "Soil Health": Sprout,
        "Animal health": Heart,
        "Biodiversity": Farm,
        "Synergy": Users
      };
      return icons[name] || Leaf;
    }
</script>
<article class="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
    <!-- Image Container -->
    <div class="relative h-48 overflow-hidden">
      <img
        src={principle?.image}
        alt={principle?.name}
        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <div class="p-4 bg-black/50 w-full">
          <h3 class="text-white text-xl font-semibold">{principle?.name}</h3>
        </div>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-4 flex-1 flex flex-col">
      <p class="text-gray-600 dark:text-gray-300 mb-4 flex-1">
        {principle?.description}
      </p>
      
      <!-- Categories -->
      <div class="flex flex-wrap gap-2 mb-4">
        {#each principle?.categories as category}
          <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
            {category}
          </span>
        {/each}
      </div>
      
      <!-- FAO Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        {#each principle?.fao as tag}
          <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm">
            {tag}
          </span>
        {/each}
      </div>
      
      <!-- Icon and Learn More -->
      <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <div class="text-blue-500 dark:text-blue-400">
          <svelte:component this={getPrincipleIcon(principle.name)} size={24} />
        </div>
        <button class="flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
          Learn more
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  </article>