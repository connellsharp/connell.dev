<script>
    import EntryPreview from "$lib/EntryPreview.svelte";
    import Preamble from "$lib/Preamble.svelte";
    import SocialIcon from "$lib/SocialIcon.svelte";
    import { socials } from "$lib/socials";

    export let data;
</script>

<svelte:head>
    <title>{data.title} - Connell</title> 
</svelte:head>

{#if data.preamble}
    <Preamble icon={data.preamble.socialIcon}>
        {@html data.preamble.html}
    </Preamble>
{/if}

{#each data.files as file}
    <EntryPreview
        title={file.title}
        meta={file.meta}
        link={file.link}
        thumbnail={file.thumbnail}
        invertDarkImages={file.invertDarkImages}
    >
        {@html file.excerpt}
    </EntryPreview>
{/each}
