<script lang="ts">
  
    import {principlesofAgroEcology} from '$store/store';
  import Principle from './principle.svelte';
  
  
  
  </script>
  
  <section class="max-w-7xl mx-auto px-4 py-16">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Principles of Agroecology</h2>
    <p class="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
      Discover the core principles that guide sustainable agricultural practices and ecosystem management
    
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {#each $principlesofAgroEcology as principle}
      {#key  principle.name}
      <Principle principle={principle} />
      {/key}
      
      {/each}
     
    </div>
  </section>