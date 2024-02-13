import recycling from "../lib/pics/compost-box-with-bio-recycling-garbage-vector-32148984.jpg";
import soil from "../lib/pics/ca3ace0fa437b80988afa2bf4b1bebcb.jpg";
import soil2 from "../lib/pics/sprout-spring-icon-agriculture-and-nature-symbol-vector-26483094.jpg";
import animal from "../lib/pics/cow-vector-1920274.jpg";
import input from "../lib/pics/farmers-life-design-concept-vector-21055768.jpg";
import diversity from "../lib/pics/ecology-concept-vector-1074158.jpg";
import synergy from "../lib/pics/permaculture-solid-icon-set-vector-49781063.jpg";
import diversification from "../lib/pics/financial-diversification-set-vector-46030597.jpg";
import knowledge from "../lib/pics/knowledge-branching-concept-business-education-vector-29626876.jpg";
import values from "../lib/pics/share-your-social-values-green-gradient-concept-vector-41092732.jpg";
import fairness from "../lib/pics/fairness-blue-gradient-concept-icon-vector-46567689.jpg";
import connectivity from "../lib/pics/business-connectivity-infographic-vector-22962846.jpg";
import governance from "../lib/pics/governance-turquoise-concept-icon-vector-47225822.jpg";
import participation from "../lib/pics/participation-blue-gradient-concept-icon-vector-42871374.jpg";

export const agroecology = `Agroecology is an integrated approach that simultaneously applies ecological
and social concepts and principles to the design and management of food and
agricultural systems. It is the application of the science of ecology to agricultural systems.
It seeks to optimize the interactions between plants,
animals, humans and the environment without external input  while taking into consideration the social
aspects that need to be addressed for a sustainable and fair food system.`;

export const principles = [
  ` recycling`,
  `input reduction`,
  `soil health`,
  `animal
health`,
  `biodiversity`,
  `synergy`,
  `economic diversification`,
  `co-creation of knowledge`,
  `social values and diets`,
  `fairness`,
  `connectivity`,
  `land and natural resource governance`,
  `participation`,
];
export let agro = `agroecology seeks ways
to improve agricultural systems by harnessing natural process-
es, creating beneficial biological interactions and synergies
amongst the components of agroecosystems (Gliessman
1990), minimizing synthetic and toxic external inputs and
using ecological processes and ecosystem services for the de-
velopment and implementation of agricultural practices`;

export const elements = [
  {
    name: `diversity`,
    des: `Integrating various plant and animal species in agricultural landscapes to promote beneficial interactions and resilience.This entails species and genetic
diversity, with surrounding forest resource biodiversity, insect biodiversity, soil organism
biodiversity, plant and animal genetic diversity, habitat diversity, and the related diversities
of culture and knowledge`,
  },
  { name: `co-creation of knowledge`, des: "" },
  { name: `Synergies`, des: "" },
  { name: `efficiency`, des: "" },
  { name: `recycling`, des: "" },
  { name: `resilience`, des: "" },
  { name: `human and social values`, des: "" },
  {
    name: `Culture
and food traditions`,
    des: "",
  },
  { name: `responsible governance`, des: "" },
  {
    name: `Circular and
solidarity economy`,
    des: "",
  },
];
export const poe = [
  {
    name: "Recycling",
    description: `Preferentially use local renewable resources and close as far as possible resource cycles
of nutrients and biomass`,
    categories: ["FI", "FA"],
    fao: ["Recycling"],
    image: recycling,
    more: "CLosing nutrient and energy loops within agroecosystems through practices such as compositing,organic waste recycling and biogas production.",
  },
  {
    name: "Input reduction",
    description: `It refers to using agroecological practices to reduce or eliminate dependency on purchased inputs by carefully planning and managing rich and diverse ecosystems and synergies between different components of the agricultural system.`,
    categories: ["FA", "FS"],
    fao: ["Efficiency"],
    image: input,
    more: "Optimizing resourc use by minimizing external inputs and maximizing internal resource cycles.",
  },
  {
    name: "Soil Health",
    description: `Secure and enhance soil health and functioning for improved plant growth,
particularly by managing organic matter and enhancing soil biological activity`,
    categories: ["FI"],
    fao: ["diversity", "synergies", "Resilience"],
    image: soil,
    more: `We want to have soilthat has good structure and a lot of organic matter, and soil biological activity. Organic
matter produces substances that allow soil particles to aggregate, with lots of micropores
where water and air can permeate.`,
  },
  {
    name: "Animal health",
    description: `Ensure animal health and welfare`,
    categories: ["FI", "FA"],
    fao: ["resilience"],
    image: animal,
    more: "",
  },
  {
    name: "Biodiversity",
    description: `Biodiversity refers to the variety of life on earth  plants, animals, microbes, the genes they
contain, the ecosystems they form, and the interactions between life forms and the environ-
ment.`,
    categories: ["FI", "FA"],
    fao: ["diversity"],
    image: diversity,
    more: `When ecosystems are diverse, there are many pathways for ecological processes, so
if one is damaged or destroyed, an alternative pathway can be usedFostering a diverse array of plant and animal speces withing agrosystems promotes beneficial interactions,resilience and ecosystem services.`,
  },
  {
    name: "Synergy",
    description: `Enhance positive ecological interaction, synergy, integration and complementarity
amongst the elements of agroecosystems (animals, crops, trees, soil and water).`,
    categories: ["FI", "FA"],
    fao: ["synergy"],
    image: synergy,
    more: "It entails identifying and enhancing beneficial interactions between components of the agrosystems such as crop rotation, plant pollinator relatonships and nutrient cycling",
  },
  {
    name: "Economic diversification.",
    description: `Diversify on-farm incomes by ensuring that small-scale farmers have
greater financial independence and value addition opportunities while enabling them to respond to
demand from consumers.`,
    categories: ["FA", "FS"],
    fao: [
      "diversity",
      `circular
and solidarity economy`,
    ],
    image: diversification,
    more: "Building a circular economy within the food system that promotoes local production and consumption, fair trade practices and economic opportunities for rural communities.",
  },
  {
    name: "Co-creation of knowledge",
    description: `Enhance co-creation and horizontal sharing of knowledge including
local and scientific innovation, especially through farmer-to-farmer exchange`,
    categories: ["FA", "FS"],
    fao: ["Co-creation", " sharing of knowledge"],
    image: knowledge,
    more: "Promoting collaboration and knowledge exchange between farmers, researchers and otherstakeholders to develop and share context specific agroecological practices",
  },
  {
    name: "Social values and diets.",
    description: `Build food systems based on the culture, identity, tradition,
social and gender equity of local communities that provide healthy, diversified,
seasonally and culturally appropriate diets`,
    categories: ["FA", "FS"],
    fao: ["Human and social values", "Culture and food traditions"],
    image: values,
    more: "Integrating cultutal, ethical and social values into agroecological practices, ensuring equity,fairness and justice for all involved.Recognizing and valuing  traditional agricultural knowledge,practices and food cultures as valuable sources of inspiration and innovation for agroecologicel development",
  },
  {
    name: "Fairness.",
    description: `Support dignified and robust livelihoods for all actors engaged in food systems,
especially small-scale food producers, based on fair trade, fair employment and fair treatment of
intellectual property rights`,
    categories: ["FA", "FS"],
    fao: ["human and social values"],
    image: fairness,
    more: "Ensuring equitable access to land, resources and markets for all stakeholders.",
  },
  {
    name: "Connectivity",
    description: `Ensure proximity and confidence between producers and consumers through
promotion of fair and short distribution networks and by re-embedding food systems into local
economies.`,
    categories: ["FA"],
    fao: ["circular and solidarity economy"],
    image: connectivity,
  },
  {
    name: "Land and natural resource governance",
    description: `Strengthen institutional arrangements to improve,
including the recognition and support of family farmers, smallholders and peasant food producers
as sustainable managers of natural and genetic resources`,
    categories: ["FA", "FS"],
    fao: ["Responsible governance"],
    image: governance,
  },
  {
    name: "Participation.",
    description: `Encourage social organisation and greater participation in decision-making by
food producers and consumers to support decentralised governance and local adaptive
management of agricultural and food systems.`,
    categories: ["FS"],
    fao: ["human and social values"],
    image: participation,
  },
];

/**
 * However, high-external input, resource-intensive
agricultural systems have caused massive deforestation, water scarcities,
biodiversity loss, soil depletion and high levels of greenhouse gas emissions.
 */
const eoe = [{ name: "", des: "" }];

const soilHealth = `The most important goal of conversion is to enhance soil health.
 We want to have soilthat has good structure and a lot of organic matter, and soil biological activity. Organic
matter produces substances that allow soil particles to aggregate, with lots of micropores
where water and air can permeate. Soil organic matter provides the fuel for microbes and
meso- and macro-fauna. Through decomposition, the soil microbes mineralize minerals
that become used by plants. Just 10 grams of soil contain millions of organisms that interact
in very complex food webs.
As the microbial biomass is concentrated in the top layer of the soil, we have to protect
topsoil. Large quantities of organic matter  different kinds like fresh and dry leaves (cellu-
losic material), branches (lignin), compost, etc.  should be applied to soils on a regular
basis. Soil cover should be maintained with cover crops and mulches. Erosion can cause the
30loss of not only nutrients but micro-organisms too, and should be minimized with proper
soil conservation measures. The loss of 1 mm of soil is equivalent to 14 tonnes per ha. To
rebuild that will take 50-100 years with good practices.
The basic ecological principles behind soil biological management are:








The supply of organic material for food. There are two types of organic material, labile
and non-labile. Labile organic matter decomposes quickly and usually comes from leaves
and straw. Non-labile material decomposes more slowly, such as lignins and branches
from trees. A mixture of both labile and non-labile material is needed to produce good
organic matter. Material that decomposes quickly provides nutrients while those that
decompose slowly give structure to the soil. Farmers also need to stimulate soil organ-
isms with good temperature, nutrients and air.
Increased plant diversity. Many plants release substances from roots (root exudates).
Each exudate stimulates a different population of bacteria. The more the exudates, the
more complex the soil microbiology near the roots.
Maintain good soil structure to stimulate microbes and improve water, air, temperature
and nutrient conditions.
Use different types of organic materials because they have different effects on soil
biological, chemical and physical properties.
Keep soil covered with living vegetation and/or crop residues by using cover crops, sod
crops in rotations, and/or reduced tillage practices. This encourages water to infiltrate
into the soil instead of running off the field, taking sediments (and organic matter)
along.
Reduce soil compaction to a minimum by keeping off fields when they are too wet,
redistributing loads, using traffic lanes, etc.
Use a variety of practices to reduce erosion. These include some mentioned above,
such as keeping soil covered with living vegetation or crop residues (using cover crops,
rotation sod crops, and reducing tillage), as well as other practices such as terracing,
grassed waterways, strip cropping along the contour by alternating a row crop with a
sod crop, using natural or planted buffers between fields and streams, etc.
Use practices to supply supplemental fertility sources, when needed, that better match
nutrient availability to crop uptake needs (which vary during the season). This helps to
reduce both weed and insect damage.
When we add organic matter, we increase the carbon in the soil and create conditions
for balanced biota. The food web in the soil becomes very complex, with bacteria, fungi,
nematodes and protozoa all playing a role. Some soil organisms feed on other organisms
and control their populations; for example, there are nematodes that eat fungi and vice
31versa. Other micro-organisms mineralize nutrients, others protect crops against pathogens
and others produce plant-growth-promoting hormones (Figure 8). In the rhizosphere, there
are not just plant roots, but also thousands of beneficial bacteria and fungi that surround the
roots. Mycorrhizae help plants to acquire certain nutrients such as phosphorus and improve
water use efficiency. If there is drought, crops with mycorrhizae survive better than crops
without. Mycorrhizae also cover roots and protect them against pathogens. It is difficult to
introduce mycorrhizae into a planted field. It is best to harvest litter from a nearby natural
forest, which has a lot of mycorrhizae, and then incorporate this material in the compost so
as to inoculate it.`;
let pesticides = `Resistance to pesticides by pests has given rise to an
addiction to pesticides. Chemical pesticides do not work eventually because insects and
weeds develop resistance, so we have to develop new pesticides and apply more; this is
called the pesticide treadmill.`;
let poeXplained = `We are thus looking for systems that have high productivity, efficiency, and biodiversi-
ty with high recycling rates, use low external inputs, are resilient and efficient in use of
local resources, and have a high level of synergy and integration.`;

const examples = {
  cropRotation: [
    "Crop rotations",
    `Temporal diversity in the form of cereal-legume sequences. Nutrients are con-
served and provided from one season to the next, and the life cycles of insect pests, diseases, and
weeds are interrupted`,
  ],
  Polycultures: [
    "Polycultures",
    `Cropping systems in which two or more crop species are planted within certain
spatial proximity, resulting in biological complementarities that improve nutrient use efficiency
and pest regulation, thus enhancing crop yield stability`,
  ],
  coverCrops: [
    "Cover crops and mulching",
    `The use of pure or mixed stands of grass-legumes, e.g., under fruit
trees, can reduce erosion and provide nutrients to the soil and enhance biological control of pests.
Flattening cover crop mixtures on the soil surface in conservation farming is a strategy to reduce
soil erosion and lower fluctuations in soil moisture and temperature, improve soil quality and
enhance weed suppression, resulting in better crop performance.`,
  ],
  agroforestry: [
    "Agroforestry systems",
    `Trees grown together with annual crops, in addition to modifying the
microclimate, maintain and improve soil fertility as some trees contribute to nitrogen fixation
and nutrient uptake from deep soil horizons while their litter helps replenish soil nutrients, main-
tain organic matter, and support complex soil food webs.`,
  ],
  greenManuares: [
    "Green manures",
    `Green manures are fast-growing plants sown to cover bare soil. Their foliage smothers weeds
and their roots prevent soil erosion. When dug into the ground while still green, they return
valuable nutrients to the soil and improve soil structure.`,
  ],
  cropLivestock: [
    "Crop-livestock mixtures",
    `High biomass output and optimal nutrient recycling can be achieved
through crop-animal integration. Animal production that integrates fodder shrubs planted at high
densities, intercropped with improved, highly-productive pastures and timber trees all combined
in a system that can be directly grazed by livestock, enhances total productivity without need of
external inputs.`,
  ],
};
