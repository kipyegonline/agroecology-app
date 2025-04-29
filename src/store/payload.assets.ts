import { Home, Trees, Flower2, Link, Rss, List } from "lucide-svelte";
import trossard from "$lib/agripics/20230906144424_IMG_0381.JPG";
import waterBottle from "$lib/agripics/20230906144557_IMG_0385.JPG";
import storey from "$lib/agripics/20230906145219_IMG_0394.JPG";
import hanging from "$lib/agripics/20230906145322_IMG_0395.JPG";
import coconut from "$lib/agripics/20230908111113_IMG_0731.JPG";
import cocopeat from "$lib/agripics/20230908111210_IMG_0738.JPG";
import sunflower from "$lib/agripics/20230908153132_IMG_0882.JPG";
import farmyard from "$lib/agripics/20231206100717_IMG_5328.JPG";
import spinach from "$lib/agripics/20231206110137_IMG_5368.JPG";
import beans from "$lib/agripics/20231206110855_IMG_5379.JPG";
import magician from "$lib/agripics/20231206112656_IMG_5390.JPG";
import wheat from "$lib/agripics/20231206112701_IMG_5391.JPG";
import banana from "$lib/agripics/20240105135359_IMG_6666.JPG";
import trees from "$lib/agripics/20240105140117_IMG_6691.JPG";
import cows from "$lib/agripics/20240105140809_IMG_6705.JPG";
import berries from "$lib/agripics/20240105143317_IMG_6737.JPG";
import tea from "$lib/agripics/20240110115442_IMG_6741.JPG";
import custard from "$lib/2025/custard_apple.JPG";
import ber from "$lib/2025/blossom_end_rot.JPG";
import mushrooms from "$lib/2025/IMG_6273.JPG";
export const agrimages = [
  [mushrooms, "Mushrooms: From nature to table"],
  [custard, "Custard Apple fruits; exotic fruits "],
  [ber, "Blossom-end rot disease on capsicum fruits (pili pili hoho)"],
  [trossard, "Growing vegetables using discarded clothes"],
  [waterBottle, "A simple irrigation system for a vertical garden"],
  [storey, "Multi storey kitchen garden"],
  [hanging, "Modern hanging garden"],
  [coconut, "Recycling coconut shells"],
  [cocopeat, "Cocopeat extracts from coconut shells"],
  [sunflower, "Sunflower plant"],
  [farmyard, "Ready made compost manure"],
  [spinach, "Growing spinach on kitchen garden"],
  [beans, "Pest free bean plants"],
  [magician, "A farmer described as magician"],
  [wheat, "Healthy sorghum crops"],
  [banana, "Green banana fruit"],
  [
    trees,
    "Cypress trees at the edge of an arable farm as wind breakers, trap road side dust and improve soil fertility ",
  ],
  [cows, "Green pastures promotes resilient  animal health"],
  [berries, "Growing strawberries on recycled plastic rice bags"],
  [tea, "Biodiversity at play, integrating agroforestry to a tea farm"],
];

export type Link = {
  name: String;
  link: string;
  active: boolean;
  icon: any;
};

export let links: Link[] = [
  { name: "Home", link: "/", active: !false, icon: Home },
  {
    name: "Principles of Agroecology",
    link: "/principles-of-agroecology",
    active: false,
    icon: Trees,
  },
  {
    name: "Elements of Agroecology",
    link: "/elements-of-agroecology",
    active: false,
    icon: Flower2,
  },
  {
    name: "Examples",
    link: "/agroecology-practices", //agroecology-practices
    active: false,
    icon: Flower2,
  },
  /* {
      name: "Food holidays",
      link: "/agroecology-practices",
      active: false,
      icon: Flower2,
    },*/
  { name: "Blogs", link: "/blogs", active: false, icon: Rss },
  {
    name: "Resources/Links",
    link: "/related-links",
    active: false,
    icon: Link,
  },
];

export const challenges = [
  [
    "Fragile agri-food systems",
    `declining productivity in both crop and livestock;
degradation of land, water, soils and other ecosystems supporting agricultural production; loss of
indigenous varieties and genetic resources for crop and animal production; rising impacts of climate
change; declining biodiversity for food and agriculture; poor fertilizer yield response due to rising soil
acidity; limited awareness of the potential of agroecology in supporting the much needed food system
transformation; limited availability and access to bio inputs by smallholder farmers; and Limited market
incentives and innovations to support the agroecological transition`,
  ],
  [
    `Limited access to and consumption of safe, diversified, and healthy diets leads to food
insecurity and malnutrition.`,
    `The trend is associated with shifts in consumer preferences in favor
of ultra-processed foods; the direct effects of food marketing exposure; poorly coordinated food
markets leading to high food prices and limited access and availability of traditional foods due to
cultural shifts focus on production for the market. Inefficient food supply chains and markets are
characterized by high transaction costs; increased costs in logistics; information asymmetries and long
value chains which increase the carbon footprint. The rising burden of foodborne diseases; increasing
incidences of food contamination; high levels of food loss and waste and low levels of circularity for
the management of waste are also major issues facing Kenya’s food systems.`,
  ],
  [
    `Weak policy and institutional environment / and incentives for supporting agroecology
transitioning and scaling up`,
    `limited mainstreaming of agroecology and other
innovative-sustainable practices into existing national and county policies and strategies; lack of long-
term financing that is compatible with longer-term investments in agroecology; inability of smallholder
farmers, communities and counties to tap existing funding opportunities for agroecology and
disproportionate financing of small-scale agriculture relative to the importance of agriculture for
developing countries’ GDP. Equally, a lion's share of public budgets for climate, agriculture and
development still goes to conventional agro-industrial projects that contribute to the current climate,
food and biodiversity crises.`,
  ],
];
