<script lang="ts">
    import currentUser from '$lib/stores/currentUser';
    import ndk from '$lib/stores/ndk';
    import { Avatar, RelayList } from '@nostr-dev-kit/ndk-svelte-components';
    import { Button, Dropdown, DropdownDivider, DropdownItem } from 'flowbite-svelte'
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

</script>

{#if $currentUser}
    <Button color="none" class="p-0"><Avatar ndk={$ndk} npub={$currentUser.npub} class="rounded-full w-12 h-12" /></Button>
    <Dropdown class="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md z-50">
        <DropdownItem class="rounded-md text-base" on:click={() => dispatch("logout")}>Sign out</DropdownItem>
        <DropdownDivider class="my-2 bg-black/20" />
        <div class="px-2">
            <RelayList ndk={$ndk} />
        </div>
    </Dropdown>
{:else}
    <button
        id="loginButton"
        on:click={() => dispatch('login')}
        class="border py-2 px-4 font-bold hover:text-white hover:bg-purple-700 dark:hover:bg-purple-800/60 rounded-md"
        >Log in</button
    >
{/if}
