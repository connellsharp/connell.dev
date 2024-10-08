<script>
    import TagCloud from "$lib/TagCloud.svelte";
    import EntryPreview from "$lib/EntryPreview.svelte";
    import Preamble from "$lib/Preamble.svelte";

    export let data;
</script>

<TagCloud tags={data.allTags} selected={data.tag} />

<Preamble>
    {#if data.tagFile}
        {@html data.tagFile.excerpt}
    {/if}
</Preamble>

{#each data.contentFiles as file}
    <EntryPreview
        title={file.title}
        meta={{
            date: new Date(file.date),
            tags: file.tags,
        }}
        linkText={file.link?.text}
        url={file.link?.url ?? file.url}
    >
        {@html file.excerpt}
    </EntryPreview>
{/each}
