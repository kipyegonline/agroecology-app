<script lang="ts">
  import { Badge } from "@svelteuidev/core";
  interface Scale {
    FA: string;
    FS: string;
    FI: "Field";
  }
  const scale = { FA: "farm", FS: "food system", FI: "field" };
  export let category: keyof Scale = "FA";
</script>

<Badge size="lg" radius="sm" class="capitalize " variant="filled" title={scale[category]}>
  {scale[category]}
</Badge>
