<script>
    import TagCloud from "$lib/TagCloud.svelte";

    export let data;
</script>

<TagCloud tags={data.allTags} />