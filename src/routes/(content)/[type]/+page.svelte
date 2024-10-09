<script>
    import EntryPreview from "$lib/EntryPreview.svelte";
    import Preamble from "$lib/Preamble.svelte";

    export let data;
</script>

<svelte:head>
    <title>{data.title} - Connell</title> 
</svelte:head>

{#if data.preamble}
<Preamble>
    {@html data.preamble}
</Preamble>
{/if}

{#each data.files as file}
    <EntryPreview
        title={file.title}
        meta={file.meta}
        link={file.link}
        thumbnail={file.thumbnail}
    >
        {@html file.excerpt}
    </EntryPreview>
{/each}
