<script lang="ts">
    export let links = [];

    import Arrow from "$lib/Arrow.svelte";
    import Box from "$lib/Box.svelte";
</script>

<style>
    .main {
        --box-width: 170px;
        --width: min(90%, 440px);
        width: var(--width);
        margin: 40px auto;
        text-align: center;
        align-items: center;
    }

    .left {
        margin-right: calc(var(--width) - var(--box-width));
    }

    .right {
        margin-left: calc(var(--width) - var(--box-width));
    }
</style>

<div class="main">
    {#each links as link, i}
        <div class="{i % 2 ? "right" : "left"}">
            <Box color={link.color} href={link.href}>{link.text}</Box>
        </div>
        {#if i < links.length - 1}
            <div>
                <Arrow size={70} rotate={i % 2 ? 135 : 45} />
            </div>
        {/if}
    {/each}
</div>