<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import Typed from 'typed.js'

    onMount(() => {
        if(browser) {
            const typewriter = new Typed("#typewriter", {
                strings: [
                    'upload',
                    'categorize',
                    'extrapolate',
                ],
                typeSpeed: 75,
                backSpeed: 25,
                backDelay: 1000,
                loop: true
            });
        }
    });

</script>

<h1 class="mt-20 mb-20 text-center flex flex-col md:flex-row"><span></span><span><span id="typewriter" class="text-purple-700"></span></span></h1>
<div>
        
</div>
