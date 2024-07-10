<script lang='ts'>
    import { loginLinks } from "$lib/data/login";
</script>

<h1>Learn about the protocol</h1>

{#each loginLinks as linkList}
    <h2>{linkList.title}</h2>
    <ul>
        {#each linkList.links as link}
        <li>
            <a href={link.url} target="_blank">{link.title}</a> &ndash; {link.description}
        </li>
        {/each}
    </ul>
{/each}