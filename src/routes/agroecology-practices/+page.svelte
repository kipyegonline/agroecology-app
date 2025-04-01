<script>
  import { Accordion, Text } from "@svelteuidev/core";
  import Examples from "../../components/Examples/index.svelte";
  let examples = [
    {name:"Compost manure",des:` Compost manure is key in enhancing soil fertility, soil health and  
improving crop yields.  Additionally, compost manure contains 
micro-organisms which help to bring life in the soil thus increasing the 
soil fertility. They include farm waste manure, vermicompost, farmyard manure and bokashi manure`},
{name:"Seed saving",des:`Seed saving is the process of selecting and storing the bestand healthy seeds for planting in the next planting season. Seed saving enhances seed security,reduces reliance on commercial seeds,promotes crop diversity and increased access to food`},
    {
      name: "Minimum tillage",
      des: `No or minimum tillage
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
      des: `, Through integrated pest management, push
and pull methods and allelopathy: decrease long-term
incidence of pests and reduce environmental and
health hazards caused by the use of chemical control`,
    },
    {
      name: "Efficient water harvesting ",
      des: ` Water harvesting methods(especially in dryland
areas) such as small-scale irrigation allows to reduce
the need for irrigation while increasing its efficiency`,
    },
    {
      name: `Manipulation of vegetation structure and plant
associations`,
      des: ` This improves efficiency of water use as well
as promoting biodiversity`,
    },
    {
      name: `Use of local resources and renewable energy
sources:`,
      des: `
This allows a reduction in the use of external inputs as well
diminishing pressure on the natural resource base`,
    },
    {
      name: "Composting and waste recycling",
      des: "Recycling organic waste to create nutrient-rich compost for soil ammendment,improve soil structure  and soil aeration",
    },
    {
      name: "Holistic landscape management",
      des: ` Around field
perimeters (windbreaks, shelterbelts, insect strips and
living fences), across multiple fields (mosaics of crop
types and land-use practices) and at the landscape-
to-regional scale (river buffers, woo`,
    },
    {
      name: "Agro-forestry",
      des: ` Agroforestry can be achieved especially through the use of multifunctional
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
  const descriptions=examples.map(example=>example.name).join(" | ")
  let title="Agroecology practices"
  const description=`Examples of Agroecology | Best 
Agroecological 
Practices: ${descriptions}`
</script>

<svelte:head>
  <title>Practices | Agroecology app | {title}</title>
  <meta
    name="description"
    content={description}
  />
</svelte:head>

  <Examples examples={examples}/>

