<script>
      import { onMount } from 'svelte';
   
   
   import bg from "$lib/agripics/20231206112701_IMG_5391.JPG";
 
  import { ArrowBigDown, ArrowBigDownDash,MoreVertical,ScrollIcon,ChevronDownCircle} from "lucide-svelte";
  import { fade, fly } from "svelte/transition";
  import HeroSvg from './HeroSVG.svelte';
   const handleScroll=()=>{
    const benefits=document.getElementById("benefits");
    if(benefits) benefits.scrollIntoView({behavior:"smooth"})
   }

    
    let visible = false;
    
    onMount(() => {
      // Trigger animations after component mounts
      setTimeout(() => {
        visible = true;
      }, 200);
    });
  </script>


  



  <div class="relative overflow-hidden   !bg-white/50">
    <!-- Background SVG with z-index positioning -->
    <div class="absolute inset-0 w-full h-full z-20 transition-opacity duration-700 ease-in-out  pointer-events-none"
         class:opacity-0={!visible}
         class:opacity-100={visible}>
         <HeroSvg/>
      <!-- Insert the SVG code here directly -->
    </div>
    
    <!-- Your existing agroecology content with animation -->
    <div class="relative z-10 transition-all duration-700 ease-in-out"
         class:opacity-0={!visible} 
         class:opacity-100={visible}
         class:translate-y-4={!visible}
         class:translate-y-0={visible}>
      <!-- Your existing content here -->
        <!-- Hero Section -->
    <div class="relative bg-white dark:bg-gray-800 overflow-hidden transition-colors duration-200">
      <div class="max-w-7xl mx-auto">
        <div class="relative pb-8 bg-white dark:bg-gray-800 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div class="text-center">
              <h1   in:fly={{ y: -50, duration: 1000 }}  class="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8">
                <span class="block text-jungle-600 dark:text-jungle-400">Agroecology</span>
              </h1>
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={bg}
                    alt="Sustainable farming"
                    class="w-full h-96 object-cover "
                    height="380"
                    width="100"
                     style="border:5px solid green"
                    loading="lazy"
                  />
                </div>
                <div  class="text-left space-y-6">
                  <p  in:fade={{ delay: 300, duration: 800 }} class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    Agroecology is an integrated approach that simultaneously applies ecological and social concepts and principles to the design and management of sustainable food and agricultural systems.
                  </p>
                  <p in:fade={{ delay: 300, duration: 800 }} class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    It seeks to optimize the interactions between <b title={"4H"} class="text-jungle-600 ">plants,</b> <b title={"4H"}  class="text-jungle-600">animals,</b><b title={"4H"}  class="text-jungle-600">humans,</b> and the  <b title={"4H"}  class="text-jungle-600"> environment</b>    while taking into consideration the social aspects needed for a sustainable and fair food system.
                  </p>
                  <div class="pt-4">
                    <h2 in:fly={{ y: -50, duration: 1000 }} class="text-2xl font-bold text-jungle-600 dark:text-white mb-4">Why Agroecology?</h2>
                    <p in:fade={{ delay: 300, duration: 800 }} class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                      Agroecology transforms existing food production systems into more sustainable and resilient food production systems, ensuring food security while preserving our environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="p-8 flex-col items-center relative -top-24 hidden md:flex">
        <button on:click={handleScroll}><ChevronDownCircle size={72}  class="text-jungle-600"/>
          <small>Scroll down</small></button>
       
        
        
      </div>
    </div>
       <!--end here-->
    </div>
  </div>
  
   
 
  
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