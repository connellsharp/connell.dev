<script lang="ts">
    import Entry from "./Entry.svelte";
    import EntryMeta from "./EntryMeta.svelte";
    import ReadMoreLink from "./ReadMoreLink.svelte";

    export let title: string;
    export let meta: { date: Date | undefined; tags: string[] };
    export let link: { text: string; url: string } | undefined;
    export let thumbnail: string | undefined;
    export let invertDarkImages: boolean = false;
</script>

<style lang="scss">
    h2 {
        font-size: 1.75em;
        font-weight: bold;
        line-height: 1.7;
        margin: 1em 0 15px;
        
        a {
            color: inherit;

            &:hover {
                color: var(--blue);
            }
        }
    }

    .thumbnail {
        float: right; 
        width: 240px;
        max-width: min(40%, 200px);
        margin: 0 0 1.5em 2em;
    }

    .clear {
        clear: both;
    }
</style>

<Entry {invertDarkImages}>
    <h2><a href={link.url}>{title}</a></h2>
  
    <EntryMeta meta={meta} />

    {#if thumbnail}
        <a href="{link.url}">
            <img class="thumbnail" src="{thumbnail}" />
        </a>
    {/if}
  
    <div class="content excerpt">
        <slot />
    </div>

    <ReadMoreLink link={link} />

    <div class="clear"></div>
</Entry>