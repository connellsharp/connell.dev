<script lang="ts">
    import Entry from "./Entry.svelte";
    import EntryMeta from "./EntryMeta.svelte";
    import YouTubeEmbed from "./YouTubeEmbed.svelte";

    export let title: string;
    export let meta: { date: Date | undefined; tags: string[] };
    export let youtubeId: string | undefined;
</script>

<style lang="scss">
    h1 {
        font-size: 1.75em;
        font-weight: bold;
        line-height: 1.7;
        margin: 1em 0 15px;
    }
</style>

<Entry>
    <h1>{title}</h1>
  
    <EntryMeta meta={meta} />
  
    <div class="content">
        <slot />

        {#if youtubeId}
            <YouTubeEmbed id={youtubeId} />
        {/if}
    </div>
</Entry>