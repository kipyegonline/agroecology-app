<script lang="ts">
     import { fade } from 'svelte/transition';
  export  let friend="",index=0;
  export let getValue=(f:number)=>{};

</script>

<li transition:fade on:click={()=>getValue(index+1)}>{index+1}. {" "}{friend}</li>
<style>
    li{
        border-bottom:1px solid #ccc;
        padding:5px 0;
    }
</style>