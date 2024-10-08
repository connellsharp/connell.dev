<script>
    import TagCloud from "$lib/TagCloud.svelte";
    import EntryPreview from "$lib/EntryPreview.svelte";

    export let data;
    const tag = data.tagFile;
</script>

<TagCloud tags={data.allTags} selected={tag.slug} />

{@html data.tagFile.excerpt}

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
