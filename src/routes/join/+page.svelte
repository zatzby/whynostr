<script lang="ts">
    import { Button, Dropdown, DropdownItem, DropdownDivider, Chevron } from 'flowbite-svelte';
  </script>

<h1>Join</h1>
<Button><Chevron>Select your platform</Chevron></Button>
<Dropdown>
    <DropdownItem class="flex items-center justify-between"><Chevron placement="right">Android</Chevron></DropdownItem>
  <Dropdown placement="right-start">
    <DropdownItem><a rel='external' href="https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst">Amethyst</a></DropdownItem>
    <DropdownItem><a rel='external' href="https://play.google.com/store/apps/details?id=to.iris.twa&hl=en_US&gl=US">Iris</a></DropdownItem>
    <DropdownItem><a rel='external' href="https://play.google.com/store/apps/details?id=com.plebstr.client">Plebstr</a></DropdownItem>
  </Dropdown>
  <DropdownItem class="flex items-center justify-between"><Chevron placement="right">iOS</Chevron></DropdownItem>
  <Dropdown placement="right-start">
    <DropdownItem><a rel='external' href="https://damus.io/">Damus</a></DropdownItem>
    <DropdownItem><a rel='external' href="https://apps.apple.com/us/app/iris-the-nostr-client/id1665849007">Iris</a></DropdownItem>
    <DropdownItem><a rel='external' href="https://www.nos.social/">Nos</a></DropdownItem>
    <DropdownItem><a rel='external' href="https://nostur.com/">Nostur</a></DropdownItem>
    <DropdownItem><a rel='external' href="https://apps.apple.com/app/plebstr-nostr-client/id1666230916">Plebstr</a></DropdownItem>
</Dropdown>
  <DropdownItem class="flex items-center justify-between"><Chevron placement="right">Web</Chevron></DropdownItem>
  <Dropdown placement="right-start">
    <DropdownItem><a rel='external' href="https://coracle.social/">Coracle</a></DropdownItem>
    <DropdownItem><a rel='external' href="https://iris.to/">Iris</a></DropdownItem>
    <DropdownItem><a rel='external' href="https://primal.net/">Primal</a></DropdownItem>
    <DropdownItem><a rel='external' href="https://satellite.earth/">Satellite</a></DropdownItem>
    <DropdownItem><a rel='external' href="https://snort.social/">Snort</a></DropdownItem>
  </Dropdown>
</Dropdown>
