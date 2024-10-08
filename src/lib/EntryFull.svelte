<script lang="ts">
    import Entry from "./Entry.svelte";
    import EntryMeta from "./EntryMeta.svelte";

    export let title: string;
    export let meta: { date: Date | undefined; tags: string[] };
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
    </div>
</Entry>