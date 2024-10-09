<script>
    export let invertDarkImages = false;
</script>

<style>
    .entry {
        border-top: 1px solid;
        border-color: var(--background-off);
        margin-bottom: 30px;
    }
</style>

<article class="entry {invertDarkImages ? "invert-dark-images" : ""}">
    <slot />
</article>