<script lang="ts">
    export let tags: Record<string, number> = {};
    export let selected: string | undefined = undefined;

    function getTagFontSize(tag: string) {
        var count = tags[tag];
        return (count * 12 + 70) + "%";
    }

    const sortedTags = Object.keys(tags).sort((a, b) => a.localeCompare(b));
</script>

<style lang="scss">
    .tag-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        margin: -15px 0 20px;

        a {
            color: var(--blue);
        }

        a:hover {
            color: var(--green);
        }

        .selected {
            font-weight: bold;
            color: var(--green);
        }
    }
</style>

<div class="tag-cloud">
    {#each sortedTags as tag}
        {#if tag === selected}
            <span
                class="tag selected"
                style="font-size: {getTagFontSize(tag)}"
            >#{tag}</span>
        {:else}
            <a
                class="tag"
                href={`/tags/${tag}`}
                style="font-size: {getTagFontSize(tag)}"
            >#{tag}</a>
        {/if}
    {/each}
</div>