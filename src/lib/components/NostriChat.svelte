<script>
    const groupID = "<0e0d47a7f2dfb147d1509f9067a1bd0b3816139abb61f1ba77c932599029add8>";
    const relays = ["wss://purplepag.es", "wss://relay.nostr.band", "wss://nos.lol", "wss://relay.snort.social", "wss://relay.damus.io"];

    import { onMount } from 'svelte';
  
    onMount(() => {
      // Load the bundle.js script dynamically
      const script = document.createElement('script');
      script.src = "https://nostri.chat/public/bundle.js";
      script.dataset.chatType = "GROUP";
      script.dataset.chatId = groupID;
      script.dataset.relays = relays.join(',');
  
      script.onload = () => {
        // Script loaded successfully
      };
  
      script.onerror = () => {
        // Error handling if script fails to load
      };
  
      document.body.appendChild(script);
  
      // Load the bundle.css stylesheet
      const link = document.createElement('link');
      link.rel = "stylesheet";
      link.href = "https://nostri.chat/public/bundle.css";
  
      document.head.appendChild(link);
    });
  </script>
  