<script>
    import TagCloud from "$lib/TagCloud.svelte";
    import EntryPreview from "$lib/EntryPreview.svelte";
    import Preamble from "$lib/Preamble.svelte";

    export let data;
</script>

<svelte:head>
    <title>#{data.tag} Tag - Connell</title> 
</svelte:head>

<TagCloud tags={data.allTags} selected={data.tag} />

<Preamble>
    {#if data.tagFile}
        {@html data.tagFile.excerpt}
    {/if}
</Preamble>

{#each data.contentFiles as file}
    <EntryPreview
        title={file.title}
        meta={file.meta}
        link={file.link}
    >
        {@html file.excerpt}
    </EntryPreview>
{/each}
