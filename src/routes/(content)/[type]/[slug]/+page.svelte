<script>
    import EntryFull from "$lib/EntryFull.svelte";

    export let data;
    const file = data.file;
</script>

<EntryFull
    title={file.title}
    meta={{
        date: new Date(file.date),
        tags: file.tags,
    }}
    linkText={file.link?.text}
    url={file.link?.url ?? file.url}
>
    {@html file.html}
</EntryFull>
