<script lang="ts">
  import { Modal ,BackgroundImage, Box,Text, Title} from "@svelteuidev/core";
  import type { POE } from "$store/store";
export let element:null|POE=null
export const close=()=>{
 element=null
}
 
</script>
<Modal opened={!!element} on:close={close} size="xl" class="overflow-y-scroll" closeOnClickOutside={false} overflow="inside">
  

  <BackgroundImage src={element?.gImage} alt="" class="w-full !h-[320px] md:!h-[640px] object-cover relative " ><Text></Text>
   </BackgroundImage>
   <Box class='p-4 !text-white ' style="background:rgba(0,0,0,0.8)">
    <Title class="pb-2 !text-white">{element?.name}</Title>
   
    <Text class="!text-white">{element?.more}</Text>
  </Box>
  
    
</Modal>