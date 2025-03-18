<script lang="ts">
 import { onMount, onDestroy, SvelteComponent } from 'svelte';
 import { 
    Recycle, 
    Droplets, 
    Sprout, 
    Leaf, 
    Network, 
    ShieldCheck, 
    Users, 
    Heart, 
    Utensils, 
    Building2, 
    RotateCcw, 
    Zap 
  } from 'lucide-svelte';
  import { BackgroundImage, Image, Modal,Text } from '@svelteuidev/core';
import _diversity from "$lib/elements/diversity.png";
import _cocreation from "$lib/elements/cocreation.png";
import _synergies from "$lib/elements/synergies.png";
import _efficiency from "$lib/elements/efficiency.png";
import _recycling from "$lib/elements/recycling.png";
import _resilience from "$lib/elements/resilience.png";
import _human_social from "$lib/elements/human_social_values.png";
import _culture from "$lib/elements/culture.png";
import _governance from "$lib/elements/responsible_governance.png";
import _circular from "$lib/elements/circular_economy.png";
import _participation from "$lib/elements/participation.png";
import _soil from "$lib/elements/soil_health.png";
import _animal from "$lib/elements/animal_health.png";
import _input from "$lib/elements/input_reduction.png";
import _biodiversity from "$lib/elements/biodiversity.png";
import _connectivity from "$lib/elements/connectivity.png";
import _fairness from "$lib/elements/fairness.png";
import _knowledge from "$lib/elements/cocreation.png";
import _economic_diversification from "$lib/elements/economic_diversification.png";
 
    
    // Define the type for agroecology elements
    interface AgroecologyElement {
      id: number;
      title: string;
      image: string;
      description: string;
      icon:any
    }
    
    // Agroecology elements data
    const agroecologyElements: AgroecologyElement[] = [
      { id: 1, title: 'Recycling', image: _recycling, description: 'Recycling biomass and nutrients',icon: Recycle },
      { id: 2, title: 'Water Efficiency', image: _efficiency, description: 'Efficient water management',icon: Droplets },
      { id: 3, title: 'Soil Health', image: _soil, description: 'Building soil health',icon: Sprout },
      { id: 4, title: 'Biodiversity', image: _biodiversity, description: 'Enhancing biodiversity',icon: Leaf },
      { id: 5, title: 'Synergy', image: _synergies, description: 'Creating beneficial synergies',icon: Network },
      { id: 6, title: 'Resilience', image: _resilience, description: 'Building resilient systems',icon: ShieldCheck },
      { id: 7, title: 'Co-creation', image: _cocreation, description: 'Knowledge co-creation',icon: Users },
      { id: 8, title: 'Social Values', image: _human_social, description: 'Human and social values,',icon: Heart },
      { id: 9, title: 'Culture & Traditions', image: _culture, description: 'Culture and food traditions,',icon: Utensils },
      { id: 10, title: 'Responsible Governance', image: _governance, description: 'Responsible governance',icon: Building2 },
      { id: 11, title: 'Circular Economy', image: _circular, description: 'Circular and solidarity economy',icon: RotateCcw },
      { id: 12, title: 'Efficiency', image: _efficiency, description: 'Input reduction and efficiency,',icon: Zap }

    ];
  
    // Carousel state
    let currentIndex: number = 0;
    let autoplayInterval: ReturnType<typeof setInterval> | null = null;
    let isTransitioning: boolean = false;
    let containerWidth: number;
    let slideWidth: number;
    let slidesPerView: number = 4;
    let touchStartX: number = 0;
    let touchEndX: number = 0;
    let element:null|AgroecologyElement=null;
  
    // Calculate total slides and total pages
    $: totalSlides = agroecologyElements.length;
    $: totalPages = Math.ceil(totalSlides / slidesPerView);
    $: activePageIndex = Math.floor(currentIndex / slidesPerView);
  
    // Set slides per view based on screen width
    const updateSlidesPerView = (): void => {
      if (window.innerWidth < 640) {
        slidesPerView = 1;
      } else if (window.innerWidth < 768) {
        slidesPerView = 2;
      } else if (window.innerWidth < 1024) {
        slidesPerView = 3;
      } else {
        slidesPerView = 4;
      }
    };
  
    // Get displayed slides
    $: displayedSlides = [...agroecologyElements, ...agroecologyElements.slice(0, slidesPerView)];
  
    // Handle window resize
    const handleResize = (): void => {
      updateSlidesPerView();
      if (slideContainer) {
        containerWidth = slideContainer.clientWidth;
        slideWidth = containerWidth / slidesPerView;
      }
    };
  
    let slideContainer: HTMLDivElement;
  
    onMount(() => {
      updateSlidesPerView();
      handleResize();
      window.addEventListener('resize', handleResize);
      startAutoplay();
    });
  
    onDestroy(() => {
      stopAutoplay();
      window.removeEventListener('resize', handleResize);
    });
  
    // Autoplay functionality
    const startAutoplay = (): void => {
      stopAutoplay();
      autoplayInterval = setInterval(() => {
        goToNext();
      }, 5000);
    };
  
    const stopAutoplay = (): void => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    };
  
    // Navigation functions
    const goToNext = (): void => {
      if (!isTransitioning) {
        isTransitioning = true;
        currentIndex = (currentIndex + 1) % totalSlides;
        setTimeout(() => {
          isTransitioning = false;
        }, 500);
      }
    };
  
    const goToPrev = (): void => {
      if (!isTransitioning) {
        isTransitioning = true;
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        setTimeout(() => {
          isTransitioning = false;
        }, 500);
      }
    };
  
    const goToPage = (pageIndex: number): void => {
      if (!isTransitioning) {
        isTransitioning = true;
        currentIndex = pageIndex * slidesPerView;
        setTimeout(() => {
          isTransitioning = false;
        }, 500);
      }
    };
  
    // Touch events for mobile swipe
    const handleTouchStart = (e: TouchEvent): void => {
      touchStartX = e.touches[0].clientX;
      stopAutoplay();
    };
  
    const handleTouchMove = (e: TouchEvent): void => {
      touchEndX = e.touches[0].clientX;
    };
  
    const handleTouchEnd = (): void => {
      if (touchStartX - touchEndX > 50) {
        goToNext();
      } else if (touchEndX - touchStartX > 50) {
        goToPrev();
      }
      startAutoplay();
    };
    const openModal = (IElement: AgroecologyElement) => {
     
      element=IElement;
    };  
    console.log(element,'tough')
  </script>
  
  <div class="w-full py-8 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">Elements of Agroecology</h2>
     
      <Modal opened={!!element} on:close={() => element = null}  size="xl" title={element?.title ?? ""} closeOnClickOutside={false} overflow="inside" >
        <BackgroundImage src={element?.image} alt={element?.title} class="w-full h-[320px] md:h-[640px] object-cover"><Text></Text></BackgroundImage>
       
        <div class="p-4">
          <p class="text-gray-600">{element?.description}</p>
       </Modal>
           <div class="relative">
        <!-- Carousel container -->
        <div 
          bind:this={slideContainer}
          class="overflow-hidden relative"
          on:touchstart={handleTouchStart}
          on:touchmove={handleTouchMove}
          on:touchend={handleTouchEnd}
          on:mouseenter={stopAutoplay}
          on:mouseleave={startAutoplay}
        >
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            style="transform: translateX({-currentIndex * (slideWidth)}px);"
          >
            {#each displayedSlides as slide, i}
              <div class="flex-shrink-0" style="width: {slideWidth}px; padding: 0 8px;">
                <div class="bg-white rounded-lg shadow-md overflow-hidden h-full">
                  <img src={slide.image} alt={slide.title} class="w-full h-48 object-cover" />
                  <div class="p-4 flex flex-col">
                    <div class="flex-grow">
                      <h3 class="text-xl font-semibold mb-2"><svelte:component this={slide.icon} class="inline-block mr-2"/>{slide.title}</h3>
                      <p class="text-gray-600">{slide.description}</p></div>
                    
                    <button 
                    class="bg-green-600 hover:bg-green-700 inline-block text-white py-2 px-4 rounded-md transition-colors w-full mt-6"
                    on:click={() => openModal(slide)}
                  >
                    View Image
                  </button>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Navigation arrows -->
        <button 
          class="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 opacity-70 hover:opacity-100 transition-opacity"
          on:click={goToPrev}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          class="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 opacity-70 hover:opacity-100 transition-opacity"
          on:click={goToNext}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <!-- Pagination dots -->
        <div class="flex justify-center mt-6">
          {#each Array(totalPages) as _, i}
            <button
              class="mx-1 w-3 h-3 rounded-full transition-colors duration-300 {activePageIndex === i ? 'bg-green-600' : 'bg-gray-300'}"
              on:click={() => goToPage(i)}
              aria-label="Go to slide {i + 1}"
            ></button>
          {/each}
        </div>
      </div>
    </div>
  </div>