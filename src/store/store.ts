import { writable, type Writable } from "svelte/store";
import { poe } from "../components/payload";
import { agrimages, links, type Link } from "./payload.assets";
export const user: Writable<null | {
  name: string;
  age: number;
  married: boolean;
}> = writable(null);

type Categories = "FA" | "FS" | "FI";
export interface POE {
  name: string;
  description: string;
  categories: Array<Categories>;
  fao: Array<string>;
  image: string;
  more: string;
  gImage: string;
  icon: any;
}
let _organic = `Organic farming is a system of agriculture that prioritizes natural
        processes and ecological balance over the use of synthetic chemicals. It
        aims to produce food and other agricultural products in a way that is
        `;
let _organic2 =
  "sustainable and minimizes harm to the environment and human health.";

export const principlesofAgroEcology: Writable<POE[]> = writable(poe);
export const agripics: Writable<Array<string>> = writable(agrimages);
export const appLinks: Writable<Link[]> = writable(links);
