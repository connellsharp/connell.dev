<script>
    import EntryFull from "$lib/EntryFull.svelte";

    export let data;
    $: file = data.file;
</script>

<svelte:head>
    <title>{data.file.title} - Connell</title> 
</svelte:head>

<EntryFull
    title={file.title}
    meta={file.meta}
    youtubeId={file.youtubeId}
    link={file.link}
    invertDarkImages={file.invertDarkImages}
>
    {@html file.html}
</EntryFull>
