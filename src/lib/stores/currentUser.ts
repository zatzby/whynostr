import { writable } from 'svelte/store';
import type { NDKUser } from '@nostr-dev-kit/ndk';

const currentUser = writable<NDKUser | undefined>(undefined);

export default currentUser;
