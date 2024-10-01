<script lang="ts">
    import ProfileMenu from "./ProfileMenu.svelte";
    import { page } from '$app/stores';
    import { DarkMode } from "flowbite-svelte";
    
</script>

<div class="container border-b border-black/20 dark:border-white/20 mx-auto py-6 flex flex-col gap-6 md:flex-row md:gap-0 items-center justify-between">
    <a href="/" class="no-underline"><h1 class="whitespace-nowrap text-3xl font-black">Why Nostr?</h1></a>
    <DarkMode />
    <div class="flex flex-row gap-6 items-center">
        <div class="flex flex-row gap-4 items-center">
            <a class="navLink no-underline md:text-xl font-semibold {$page.url.pathname.includes('learn') ? 'active' : ''}" href="/learn">Learn</a>
            <a class="navLink no-underline md:text-xl font-semibold {$page.url.pathname.includes('join') ? 'active' : ''}" href="/join">Join</a>            
            <a class="navLink no-underline md:text-xl font-semibold {$page.url.pathname.includes('explore') ? 'active' : ''}" href="/explore">Explore</a>
            <a class="navLink no-underline md:text-xl font-semibold {$page.url.pathname.includes('culture') ? 'active' : ''}" href="/culture">Culture</a>
        </div>
        <!-- login button left out until post-login features are added-->
        <!-- <ProfileMenu on:logout on:login /> -->
    </div>
</div>