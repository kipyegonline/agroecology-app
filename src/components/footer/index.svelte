<script>
    import { Heart, Mail,ChevronUpCircle } from 'lucide-svelte';
    const currentYear = new Date().getFullYear();
    export let handleClick = () =>{};          
    const handleTop=()=>{
      window.scroll(0,0)
    }           
  </script>
  
  <footer class="bg-green-800 text-white py-6 px-4 mt-auto relative">
    <button  on:click={handleTop} title="Goto top" class="fixed right-4 bottom-2 flex flex-col">
       <ChevronUpCircle class="text-white inline-block mr-2" size={48}/>
      <small>Go to Top</small></button>
   
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-around items-center gap-4">
      <!-- Copyright and Made with Love -->
      <div class="flex flex-col sm:flex-row items-center gap-4">
        <span class="text-sm"> &copy;  {currentYear} AgroEco. All rights reserved.</span>
        <div class="flex items-center gap-2 text-sm">
          <span>Made with</span>
          <Heart size={16} fill="#ff0000" color="#ff0000" class="animate-pulse"/>
          <a href="https://vince-resume.vercel.app/" class="text-white font-medium" target="_blank">by Vincent Kipyegon</a>
         
        </div>
      </div>
      
      <!-- Contact Button -->
      <button 
      on:click={handleClick}
        class="px-4 py-2 bg-white text-green-800 rounded-full hover:bg-green-100 transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
      >
        <Mail size={16} />
        Contact Us
      </button>
    </div>
  </footer>