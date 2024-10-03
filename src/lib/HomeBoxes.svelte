<script lang="ts">
    export let links = [];

    import Arrow from "$lib/Arrow.svelte";
    import Box from "$lib/Box.svelte";
</script>

<style lang="scss">
    .main {
        --box-width: 170px;
        --width: min(90%, 450px);
        width: var(--width);
        margin: 40px auto;
        text-align: center;
        align-items: center;
    }

    /* big screens */
    @media (min-width: 500px) {
        .box-container {
            display: inline-block;
            width: var(--box-width);
        }

        .arrow-container {
            display: inline-block;
            margin: 5px 10px;

            &.first {
                vertical-align: middle;
            }

            &.second {
                --arrow-rotation: 90deg;
                margin-right: 100px;
            }

            &.other-arrow {
                --arrow-rotation: 90deg;
                margin-left: 100px;
            }
        }
    }

    /* small screens */
    @media (max-width: 499.9px) {
        .left {
            margin-right: calc(var(--width) - var(--box-width));
        }

        .right {
            margin-left: calc(var(--width) - var(--box-width));
        }

        .arrow-container {
            &.first {
                --arrow-rotation: 45deg;
            }

            &.second {
                --arrow-rotation: 135deg;
            }

            &.other-arrow {
                display: none;
            }
        }
    }
</style>

<div class="main">
    {#each links as link, i}
        <div class="box-container {i % 2 ? "right" : "left"}">
            <Box color={link.color} href={link.href}>{link.text}</Box>
        </div>
        {#if i < links.length - 1}
            <div class="arrow-container {i % 2 ? "second" : "first"}">
                <Arrow size={70} />
            </div>
            {#if i % 2}
            <div class="arrow-container other-arrow">
                <Arrow size={70} />
            </div>
            {/if}
        {/if}
    {/each}
</div>