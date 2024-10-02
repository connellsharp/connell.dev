<script>
    import EntryPreview from "$lib/EntryPreview.svelte";

    export let data;
</script>

{#each data.files as file}
    <EntryPreview
        title={file.title}
        meta={{
            date: new Date(file.date),
            tags: file.tags,
        }}
        url={file.url}
    >
        <p>
            {@html file.excerpt}
        </p>
    </EntryPreview>
{/each}
