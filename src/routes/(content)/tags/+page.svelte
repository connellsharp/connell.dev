<script>
    import TagCloud from "$lib/TagCloud.svelte";

    export let data;
</script>

<svelte:head>
    <title>Tags - Connell</title> 
</svelte:head>

<TagCloud tags={data.allTags} />