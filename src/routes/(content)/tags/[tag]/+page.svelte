<script>
    import TagCloud from "$lib/TagCloud.svelte";
    import EntryPreview from "$lib/EntryPreview.svelte";
    import Preamble from "$lib/Preamble.svelte";

    export let data;
</script>

<svelte:head>
    <title>{data.tagFile?.title ?? ('#' + data.tag)} - Connell</title> 
</svelte:head>

<TagCloud tags={data.allTags} selected={data.tag} />

{#if data.tagFile}
    <Preamble>
        {@html data.tagFile.excerpt}
    </Preamble>
{/if}

{#each data.contentFiles as file}
    <EntryPreview
        title={file.title}
        meta={file.meta}
        link={file.link}
        thumbnail={file.thumbnail}
    >
        {@html file.excerpt}
    </EntryPreview>
{/each}
