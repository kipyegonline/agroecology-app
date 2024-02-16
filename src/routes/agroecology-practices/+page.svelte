<script>
  import { Accordion } from "@svelteuidev/core";
  let examples = [
    {
      name: "Minimum tillage",
      des: `no or minimum tillage
improves soil structure, including aeration and water
infiltration and retention capacity  and organic matter`,
    },
    {
      name: "Mixing crops in a single plot",
      des: `Via
intercropping and poly-cultures: biological
complementarities improve nutrient and input
efficiency, use of space and pest regulation, thus
enhancing crop yield stability`,
    },
    {
      name: "Crop rotation",
      des: `Nutrients are
conserved from one season to the next, and the
life cycles of insect pests, diseases, and weeds
are interrupted`,
    },
    {
      name: "Intercropping",
      des: `Growing different crops together to maximize land use and create beneficial interactions`,
    },
    {
      name: "Cover crops and mulching",
      des: `Cover crops reduces soil erosion, provide
nutrients to the soil and enhance biological control
of pests. Mulching prevents moisture loss and formation of weed`,
    },
    {
      name: "Crop-livestock integration",
      des: `This  includes aquaculture:
allows high biomass output and optimal nut`,
    },
    {
      name: "Integrated nutrient management",
      des: ` This entails the use of
compost, organic manure and nitrogen-fixing crops:
allows the reduction or elimination of the use of
chemical fertilisers`,
    },
    {
      name: `Biological management of pests, diseases and
weeds`,
      des: `, such as integrated pest management, push
and pull methods and allelopathy: decrease long-term
incidence of pests and reduce environmental and
health hazards caused by the use of chemical control`,
    },
    {
      name: "Efficient water harvesting ",
      des: `(especially in dryland
areas) such as small-scale irrigation allows to reduce
the need for irrigation while increasing its efficiency`,
    },
    {
      name: `Manipulation of vegetation structure and plant
associations`,
      des: `: improves efficiency of water use as well
as promoting biodiversity`,
    },
    {
      name: `Use of local resources and renewable energy
sources:`,
      des: `
allows a reduction in the use of external inputs as well
diminishing pressure on the natural resource base`,
    },
    {
      name: "composting and waste recycling",
      des: "Recycling organic waste to create nutrient-rich compost for soil ammendment",
    },
    {
      name: "Holistic landscape management",
      des: ` around field
perimeters (windbreaks, shelterbelts, insect strips and
living fences), across multiple fields (mosaics of crop
types and land-use practices) and at the landscape-
to-regional scale (river buffers, woo`,
    },
    {
      name: "Agro-forestry",
      des: `, especially the use of multifunctional
trees: provides shade,wind breakers,habitat for beneficial insects, maintains and improves soil fertility through
nitrogen fixation, enhances soil structure and modifies
the microclimate`,
    },
    {
      name: "Green manures ",
      des: `They are fast-growing plants sown to cover bare soil. Their foliage smothers weeds
and their roots prevent soil erosion. When dug into the ground while still green, they return
valuable nutrients to the soil and improve soil structure.`,
    },
  ];
  let current = examples[0]?.name || "";
</script>

<section class="pt-4 md:pt-20 m-2 md:m-4">
  <h3 class="text-center !text-2xl">Agroecological practices</h3>
  <Accordion
    value={current}
    on:change={(e) => (current = e.detail)}
    transitionDuration={1000}
  >
    {#each examples as example, i}
      <Accordion.Item value={example.name}>
        <div slot="control">
          <h3 class="text-lg">{i + 1}. {"  "}{example.name}</h3>
        </div>
        <div class="bg-white py-4 px-2 rounded-lg">
          <p class="p-2 leading-5">
            {example.des}
          </p>
        </div>
      </Accordion.Item>
    {/each}
  </Accordion>
  {#if examples.length > 0}
    <ul>
      {#each examples as example, i}
        <li>
          <h3 class="text-xl">{i + 1}.{"  "}{example.name}</h3>
          <p class="p-2 leading-5">
            {example.des}
          </p>
        </li>
      {/each}
    </ul>
  {:else}
    <p>Loading..</p>
  {/if}
</section>
