<script lang='ts'>
    import { cultureLinks } from "$lib/data/culture";
  </script>
  
  <h1>Meetup and participate</h1>
  
  {#each cultureLinks as linkList}
    <h2>{linkList.title}</h2>
    <ul>
        {#each linkList.links as link}
        <li>
            <a href={link.url} target="_blank">{link.title}</a> &ndash; {link.description}
        </li>
        {/each}
    </ul>
  {/each}