declare global {
  interface Window {
    // NOTE: This is definitely hacky but it allows for all of the JS to be inlined in every page
    // while still having a SPA navigation style when changing language.
    loaders?: Array<Function>;
  }
}

export {};
