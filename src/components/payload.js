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
  },
  {
    name: "Input reduction",
    description: `Reduce or eliminate dependency on purchased inputs and increase
self-sufficiency.`,
    categories: ["FA", "FS"],
    fao: ["Efficiency"],
  },
  {
    name: "Soil Health",
    description: `Secure and enhance soil health and functioning for improved plant growth,
particularly by managing organic matter and enhancing soil biological activity`,
    categories: ["FI"],
    fao: ["diversity", "synergies", "Resilience"],
  },
  {
    name: "Animal health",
    description: `Ensure animal health and welfare`,
    categories: ["FI", "FA"],
    fao: ["resilience"],
  },
  {
    name: "Biodiversity",
    description: `Maintain and enhance diversity of species, functional diversity and genetic resources
and thereby maintain overall agroecosystem biodiversity in time and space at field,
farm and landscape scales`,
    categories: ["FI", "FA"],
    fao: ["diversity"],
  },
  {
    name: "Synergy",
    description: `Enhance positive ecological interaction, synergy, integration and complementarity
amongst the elements of agroecosystems (animals, crops, trees, soil and water).`,
    categories: ["FI", "FA"],
    fao: ["synergy"],
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
  },
  {
    name: "Co-creation of knowledge",
    description: `Enhance co-creation and horizontal sharing of knowledge including
local and scientific innovation, especially through farmer-to-farmer exchange`,
    categories: ["FA", "FS"],
    fao: ["Co-creation", " sharing of knowledge"],
  },
  {
    name: "Social values and diets.",
    description: `Build food systems based on the culture, identity, tradition,
social and gender equity of local communities that provide healthy, diversified,
seasonally and culturally appropriate diets`,
    categories: ["FA", "FS"],
    fao: ["Human and social values", "Culture and food traditions"],
  },
  {
    name: "Fairness.",
    description: `Support dignified and robust livelihoods for all actors engaged in food systems,
especially small-scale food producers, based on fair trade, fair employment and fair treatment of
intellectual property rights`,
    categories: ["FA,FS"],
    fao: ["human and social values"],
  },
  {
    name: "Connectivity",
    description: `Ensure proximity and confidence between producers and consumers through
promotion of fair and short distribution networks and by re-embedding food systems into local
economies.`,
    categories: ["FA"],
    fao: ["circular and solidarity economy"],
  },
  {
    name: "Land and natural resource governance",
    description: `Strengthen institutional arrangements to improve,
including the recognition and support of family farmers, smallholders and peasant food producers
as sustainable managers of natural and genetic resources`,
    categories: ["FA", "FS"],
    fao: ["Responsible governance"],
  },
  {
    name: "Participation.",
    description: `Encourage social organisation and greater participation in decision-making by
food producers and consumers to support decentralised governance and local adaptive
management of agricultural and food systems.`,
    categories: ["FS"],
    fao: ["human and social values"],
  },
];

const scale = { FA: "farm", FS: "food system", FI: "field" };
