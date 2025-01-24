<!-- AgroecologicalPractices.svelte -->
<script>
    import { Leaf, Layers, RotateCcw, Sprout, Flower2 } from 'lucide-svelte';
    import { fade, fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    export let examples=[]
    const practices = [
      {
        icon: Leaf,
        title: 'Minimum Tillage',
        description: 'No or minimum tillage improves soil structure, including aeration and water infiltration and retention capacity and organic matter'
      },
      {
        icon: Layers,
        title: 'Mixing Crops in a Single Plot',
        description: 'Via intercropping and poly-cultures: biological complementarities improve nutrient and input efficiency, use of space and pest regulation, thus enhancing crop yield stability'
      },
      {
        icon: RotateCcw,
        title: 'Crop Rotation',
        description: 'Nutrients are conserved from one season to the next, and the life cycles of insect pests, diseases, and weeds are interrupted'
      },
      {
        icon: Sprout,
        title: 'Intercropping',
        description: 'Growing different crops together to maximize land use and create beneficial interactions'
      },
      {
        icon: Flower2,
        title: 'Cover Crops and Mulching',
        description: 'Cover crops reduces soil erosion, provide nutrients to the soil and enhance biological control of pests. Mulching prevents moisture loss'
      }
    ];
   
  </script>
  
  <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div in:fade={{ duration: 800, delay: 200 }}>
        <h1 class="text-4xl font-bold text-center text-emerald-700 mb-12 tracking-tight">
          Agroecological Practices
        </h1>
      </div>
      
      <div class="grid gap-6">
        {#each examples as practice, i}
          <div 
            in:fly={{ y: 20, duration: 400, delay: 300 + (i * 100), easing: quintOut }}
            class="group bg-white rounded-lg hover:bg-gray-50/80 shadow-sm hover:shadow-md 
                   transition-all duration-300 p-6 border border-gray-100/80"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 mt-1">
                <svelte:component 
                  this={practices[1].icon} 
                  size={24} 
                  class="text-emerald-600 stroke-2 transform transition-transform duration-300 
                         group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
              <div class="flex-1">
                <h2 class="text-xl font-semibold text-gray-800 mb-2 transition-colors 
                           duration-300 group-hover:text-emerald-700">
                  {practice.name}
                </h2>
                <p class="text-gray-600 leading-relaxed transition-colors duration-300 
                         group-hover:text-gray-700">
                  {practice.des}
                </p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </main>