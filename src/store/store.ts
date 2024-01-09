import { writable } from "svelte/store";
export const user: Writable<null | {
  name: string;
  age: number;
  married: boolean;
}> = writable(null);
