<script lang='ts'>
  import { exploreLinks } from "$lib/data/explore";
</script>

<h1>Find your client</h1>

{#each exploreLinks as linkList}
  <h2>{linkList.title}</h2>
  <ul>
      {#each linkList.links as link}
      <li>
          <a href={link.url} target="_blank">{link.title}</a> &ndash; {link.description}
      </li>
      {/each}
  </ul>
{/each}