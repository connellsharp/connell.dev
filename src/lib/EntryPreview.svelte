<script lang="ts">
    import Entry from "./Entry.svelte";
    import EntryMeta from "./EntryMeta.svelte";

    export let title: string;
    export let meta: { date: Date | undefined; tags: string[] };
    export let link: { text: string; url: string } | undefined;
    export let thumbnail: string | undefined;
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

    .read-more {
        text-transform: uppercase;
        font-size: 0.9em;
    }

    .thumbnail {
        float: right; 
        width: 240px;
        max-width: 40%;
        margin: 0 0 1.5em 2em;
    }
</style>

<Entry>
    <h2><a href={link.url}>{title}</a></h2>

    {#if thumbnail}
        <a href="{link.url}">
            <img class="thumbnail" src="{thumbnail}" />
        </a>
    {/if}
  
    <EntryMeta meta={meta} />
  
    <div class="content excerpt">
        <slot />
    </div>
    
    <a href={link.externalUrl ?? link.url} class="read-more">
      {link.text ?? "Read more"}
    </a>
</Entry>