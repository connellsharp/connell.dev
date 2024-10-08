<script>
    import EntryFull from "$lib/EntryFull.svelte";

    export let data;
    const file = data.file;
</script>

<svelte:head>
    <title>{data.file.title} - Connell</title> 
</svelte:head>

<EntryFull
    title={file.title}
    meta={file.meta}
>
    {@html file.html}
</EntryFull>
