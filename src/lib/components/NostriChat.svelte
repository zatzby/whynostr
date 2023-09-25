<script lang="ts">
  import { onMount } from "svelte";

  let groupId: string = "0e0d47a7f2dfb147d1509f9067a1bd0b3816139abb61f1ba77c932599029add8";
  let relayUrls: string[] = [
    "wss://relay.f7z.io",
    "wss://nos.lol",
    "wss://relay.nostr.band"
  ];

  onMount(() => {
    const scriptElement: HTMLScriptElement = document.createElement("script");
    scriptElement.src = "https://nostri.chat/public/bundle.js";
    scriptElement.dataset.chatType = "GROUP";
    scriptElement.dataset.chatId = groupId;
    scriptElement.dataset.relays = relayUrls.join(",");

    document.body.appendChild(scriptElement);
  });
</script>

<link rel="stylesheet" href="https://nostri.chat/public/bundle.css">
