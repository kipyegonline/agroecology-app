import { writable, type Writable } from "svelte/store";
import { poe } from "../components/payload";
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
}

export const principlesofAgroEcology: Writable<POE[]> = writable(poe);
