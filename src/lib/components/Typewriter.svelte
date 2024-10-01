<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import Typed from 'typed.js'


onMount(() => {
    if(browser) {
        const typewriter = new Typed("#typewriter", {
            strings: [
                ' decentralized',
                ' different',
                ' connective',
                ' ours',
                ' fun',
                ' free',
                ' liberating',
                ' peer-to-peer',
                ' growing',
                ' global',
                ' secure',
                ' unstoppable',
                ' community',
                ' evolving',
                ' borderless',
                ' engaging',
                ' encrypted',
            ],
            typeSpeed: 75,
            backSpeed: 25,
            backDelay: 1000,
            loop: true
        });
    }
});

</script>

<h1 class="flex flex-col md:flex-row"><span>Because it is</span>&nbsp;<span><span id="typewriter" class="text-purple-700"></span></span></h1>
