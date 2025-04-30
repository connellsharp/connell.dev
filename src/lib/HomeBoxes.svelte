<script lang="ts">
    export let links = [];

    import Arrow from "$lib/Arrow.svelte";
    import Box from "$lib/Box.svelte";
</script>

<style lang="scss">
    .main {
        --width: min(90%, 450px);
        --box-width: max(130px, min(170px, calc(50vw - 100px)));
        --arrow-size: max(50px, min(70px, calc(20vw - 50px)));
        width: var(--width);
        margin: 40px auto;
        text-align: center;
    }

    /* normal screens */
    @media (min-width: 390px) {
        .box-container {
            flex-grow: 1;
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
                width: var(--box-width);
                margin-right: calc(var(--arrow-size) + 5px);
            }

            &.other-arrow {
                --arrow-rotation: 90deg;
                width: var(--box-width);
            }
        }
    }


    @media (max-width: 500px) {
        .main {
            font-size: 0.9em;
        }
    }

    /* tiny screens */
    @media (max-width: 389.9px) {
        .main {
            --box-width: 170px;
        }

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
                <Arrow />
            </div>
            {#if i % 2}
            <div class="arrow-container other-arrow">
                <Arrow />
            </div>
            {/if}
        {/if}
    {/each}
</div>