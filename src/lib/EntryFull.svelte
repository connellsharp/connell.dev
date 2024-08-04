<script>
    import Entry from "./Entry.svelte";
    import EntryMeta from "./EntryMeta.svelte";
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
    <h1>The Only Agile Meetings You Need</h1>
  
    <EntryMeta date="1st August 2023" tags={["teams", "agile", "meetings"]} />
  
    <div class="content">
      <p>Some places “do agile” because it’s the cool trendy thing that tech companies do nowadays. Their teams are usually mandated to do Scrum, which they take to mean two-week cycles with 2-3 hours of stand-up meetings, maybe 4 hours of refinement, 1-2 hours retro, another hour of sprint planning, another to demo, another higher-level roadmap meeting. That’s 10 hours of meetings even before you include all the ones you “took offline”.</p>
    </div>
</Entry>