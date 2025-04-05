<script>
    import { Blockquote } from 'flowbite-svelte';
    import { QuoteSolid } from 'flowbite-svelte-icons';
  </script>
  
  <figure class="mx-auto max-w-screen-md text-center">
    <QuoteSolid class="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600" />
    <Blockquote alignment="center" size="2xl">"Nostr is a revolutionary protocol for social media because 
        it provides a decentralized, monetizable, incentive-aligned, market-driven, and open-source platform
         for social interaction. Nostr has the potential to create a new era of social media that prioritizes user 
         sovereignty and free market competition."</Blockquote>
    <figcaption class="flex justify-center items-center mt-6 space-x-3 rtl:space-x-reverse">
      <img class="w-6 h-6 rounded-full" src="https://image.nostr.build/b273991b2a61328e5d3e606534a04690fb11c167ec88c78ea1c2792e6f7e7d3a.png" alt="Jameson Lopp profile" />
      <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
        <cite class="pe-3 font-medium text-gray-900 dark:text-white">Jameson Lopp</cite>
        <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at Casa</cite>
      </div>
    </figcaption>
  </figure>