<script lang="ts">
    export let link: { text: string; url: string, externalUrl: string };
</script>

<style>
    .read-more {
        text-transform: uppercase;
        font-size: 0.9em;
    }
</style>

<a href={link.externalUrl ?? link.url} class="read-more" target="{link.externalUrl ? '_blank' : ''}">
    {link.text ?? "Read more"}
    {#if link.externalUrl}
      &nbsp;<img class="icon" src="/icons/newtab.svg" alt="Opens in new tab" />
    {/if}
  </a>