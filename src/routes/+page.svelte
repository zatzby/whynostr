<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import Typed from 'typed.js'

    onMount(() => {
        if(browser) {
            const typewriter = new Typed("#typewriter", {
                strings: [
                    'decentralized',
                    'different',
                    'connective',
                    'ours',
                    'fun',
                    'free',
                    'liberating',
                    'peer-to-peer',
                    'growing',
                    'global',
                    'secure',
                    'unstoppable',
                    'community',
                    'evolving',
                    'borderless',
                    'engaging',
                    'encrypted',
                ],
                typeSpeed: 75,
                backSpeed: 25,
                backDelay: 1000,
                loop: true
            });
        }
    });

</script>

<h1 class="flex flex-col md:flex-row"><span>Nostr is... </span><span><span id="typewriter" class="text-purple-700"></span></span></h1>
<div>
    <p>Nostr is an emerging network built on a decentralized protocol, where anyone can easily <a href="/join">join</a> and immediately begin interacting with a global community of individuals.</p>

    <p>With a few simple clicks, you generate a public and private key - think of it like a username and password - that allow you to <a href="/explore">explore</a> a growing ecosystem of applications.</p>

    <p>With Nostr, the power is returned to the individual. Your journey is not controlled by algorithms, riddled with unnecessary and irrelevant ads, but is up to YOU. <a href="/learn">Learn</a> more about the protocol and join the fun!</p>
</div>
