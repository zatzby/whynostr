<script>
    const groupID = "<GROUP_ID_IN_HEX_FORMAT>";
    const relays = ["wss://relay.f7z.io", "wss://nos.lol", "wss://relay.nostr.band"];

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
  