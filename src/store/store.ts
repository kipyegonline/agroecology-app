import { writable, type Writable } from "svelte/store";
import { poe } from "../components/payload";
export const user: Writable<null | {
  name: string;
  age: number;
  married: boolean;
}> = writable(null);

export interface POE {
  name: string;
  description: string;
  categories: string[];
  fao: Array<string>;
}

export const principlesofAgroEcology: Writable<POE[]> = writable(poe);
