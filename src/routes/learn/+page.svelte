<script lang='ts'>
    import { learnLinks } from "$lib/data/learn";
</script>

<h1>Learn about the protocol</h1>

{#each learnLinks as linkList}
    <h2>{linkList.title}</h2>
    <ul>
        {#each linkList.links as link}
        <li>
            <a href={link.url} target="_blank">{link.title}</a> &ndash; {link.description}
        </li>
        {/each}
    </ul>
{/each}