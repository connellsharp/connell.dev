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
        max-width: min(40%, 200px);
        margin: 0 0 1.5em 2em;
    }

    .clear { clear: both;}
</style>

<Entry>
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
    
    <a href={link.externalUrl ?? link.url} class="read-more" target="{link.externalUrl ? '_blank' : ''}">
      {link.text ?? "Read more"}
      {#if link.externalUrl}
        &nbsp;<img class="icon" src="/icons/newtab.svg" alt="Opens in new tab" />
      {/if}
    </a>

    <div class="clear"></div>
</Entry>