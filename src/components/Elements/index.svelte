<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly, scale } from 'svelte/transition';
    import { spring } from 'svelte/motion';
    import {elements } from "../../components/payload";
   
  
    // For animation staggering
    let visible = false;
    let hovered: null|number = null;
  
    onMount(() => {
      // Trigger animations after component mounts
      setTimeout(() => {
        visible = true;
      }, 100);
    });
  
    // Spring animation for card hover
    const coords = spring({ x: 0, y: 0 }, {
      stiffness: 0.1,
      damping: 0.25
    });
  
    function handleMousemove(event, index:number) {
      const { clientX, clientY, currentTarget } = event;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      
      coords.set({
        x: (clientX - left - width / 2) / 10,
        y: (clientY - top - height / 2) / 10
      });
    }
  
    function handleMouseleave() {
      coords.set({ x: 0, y: 0 });
    }
    /** on:mousemove={(e) => handleMousemove(e, i)}
              on:mouseleave={handleMouseleave}
              on:focus={() => hovered = i}
              on:blur={() => hovered = null}
              on:mouseenter={() => hovered = i}
              on:mouseleave={() => hovered = null}*/
  </script>
  
  <svelte:head>
    <title>Elements of Agroecology</title>
  </svelte:head>
  
  <main class="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 
        class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-green-700 mb-4"
        in:fly={{ y: -50, duration: 1000 }}
      >
        Elements of Agroecology
      </h1>
      
      <p 
        class="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16"
        in:fade={{ delay: 300, duration: 800 }}
      >
        Sustainable farming practices that work with nature, not against it.
      </p>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each elements as element, i}
          {#if visible}
            <div 
              class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 h-full"
              in:fly={{ y: 50, delay: i * 200, duration: 800 }}
           
              style="transform: perspective(1000px) rotateX({$coords.y}deg) rotateY({$coords.x}deg);"
              tabindex="0"
            >
              <div class="p-1 bg-gradient-to-br {i === 0 ? 'from-green-400 to-green-600' : i === 1 ? 'from-teal-400 to-teal-600' : 'from-emerald-400 to-emerald-600'}">
                <div class="bg-white p-4">
                  <div class="flex justify-center mb-4 h-48 overflow-hidden">
                    <img 
                      src={element.image} 
                      alt={element.name} 
                      class="h-full w-auto object-contain transition-transform duration-700 transform {hovered === i ? 'scale-110' : 'scale-100'}"
                    />
                  </div>
                  
                  <h2 class="text-2xl font-semibold text-gray-800 mb-3 capitalize">{element.name}</h2>
                  
                  <p class="text-gray-600 leading-relaxed">
                    {element.des}
                  </p>
                  
                  <div class="mt-4 flex justify-end hidden">
                    <button 
                      class="px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors duration-300 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </main>
  
  <style>
    :global(body) {
      overflow-x: hidden;
    }
  </style>