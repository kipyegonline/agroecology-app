// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
  interface Window {
    gtag?: (...args: any[]) => void;
    ga?: (...args: any[]) => void; // For Universal Analytics (if needed)
  }
}

export {};
