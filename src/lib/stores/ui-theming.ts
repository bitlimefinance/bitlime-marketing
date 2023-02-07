import { writable, type Writable } from "svelte/store";

export const showLoading = writable(false);
export const mainHeight_ = writable(0);
export const dark: Writable<boolean> = writable(false); 