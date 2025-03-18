 <script>
    import bg2 from "$lib/agripics/20231206112701_IMG_5391.JPG";
    let darkMode=false
 </script>
 
 <!-- Organic Farming Section -->
 <section class="max-w-7xl mx-auto px-4 py-16">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">What is Organic Farming?</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="rounded-lg overflow-hidden">
        <img
          src={bg2}
          alt="Organic farming"
          class="w-full h-[400px] object-cover"
        />
      </div>
      <div>
        <p class="text-lg {darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed">
          Organic farming is a production system that sustains the health of soils, ecosystems, and people. It relies on ecological processes, biodiversity, and cycles adapted to local conditions, rather than using inputs with adverse effects. It combines tradition, innovation, and science to benefit the shared environment and promote fair relationships and good quality of life for all involved.
        </p>
      </div>
    </div>
  </section>