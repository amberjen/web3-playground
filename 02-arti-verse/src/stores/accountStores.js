import { writable } from 'svelte/store';

export let isLoggedIn = writable(false);
export let accounts = writable([]);

export default accounts;