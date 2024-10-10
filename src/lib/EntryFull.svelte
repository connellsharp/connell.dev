<script lang="ts">
    import Entry from "./Entry.svelte";
    import EntryMeta from "./EntryMeta.svelte";
    import ReadMoreLink from "./ReadMoreLink.svelte";
    import YouTubeEmbed from "./YouTubeEmbed.svelte";

    export let title: string;
    export let meta: { date: Date | undefined; tags: string[] };
    export let youtubeId: string | undefined;
    export let link: { text: string; externalUrl: string } | undefined;
    export let invertDarkImages: boolean = false;

    import hljs from 'highlight.js';
    import '../styles/highlight.css';
    import { onMount } from 'svelte';

    onMount(() => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    });
</script>

<style lang="scss">
    h1 {
        font-size: 1.75em;
        font-weight: bold;
        line-height: 1.7;
        margin: 1em 0 15px;
    }

    .read-more-container {
        margin-top: 10px;
    }
</style>

<Entry {invertDarkImages}>
    <h1>{title}</h1>
  
    <EntryMeta meta={meta} />
  
    <div class="content">
        <slot />

        {#if youtubeId}
            <YouTubeEmbed id={youtubeId} />
        {/if}
    </div>
    
    {#if link.externalUrl}
        <p class="read-more-container">
            <ReadMoreLink link={link} />
        </p>
    {/if}
</Entry>