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
agricultural systems.
It seeks to optimize the interactions between plants,
animals, humans and the environment while taking into consideration the social
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
  `diversity`,
  `co-creation of knowledge`,
  `Synergies`,
  `efficiency`,
  `recycling`,
  `resilience`,
  `human and social values`,
  `Culture
and food traditions`,
  `responsible governance`,
  `Circular and
solidarity economy`,
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
    description: `Reduce or eliminate dependency on purchased inputs and increase
self-sufficiency.`,
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
    description: `Maintain and enhance diversity of species, functional diversity and genetic resources
and thereby maintain overall agroecosystem biodiversity in time and space at field,
farm and landscape scales`,
    categories: ["FI", "FA"],
    fao: ["diversity"],
    image: diversity,
    more: "Fostering a diverse array of plant and animal speces withing agrosystems promotes beneficial interactions,resilience and ecosystem services.",
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
    image: diversity,
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
