<script lang='ts'>
  import { joinLinks } from "$lib/data/join";
</script>

<h1>Find your client</h1>

{#each joinLinks as linkList}
  <h2>{linkList.title}</h2>
  <ul>
      {#each linkList.links as link}
      <li>
          <a href={link.url} target="_blank">{link.title}</a> &ndash; {link.description}
      </li>
      {/each}
  </ul>
{/each}