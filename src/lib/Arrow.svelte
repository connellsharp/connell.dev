<script lang="ts">
    export let size = 50;
</script>

<style lang="scss">
    polygon {
        fill: var(--foreground);
        transform: rotate(var(--arrow-rotation));
        transform-origin: 106px 35.5px;
    }
</style>

<svg viewBox="0 -71 213 213" height={size} width={size}>
    <polygon points="0,26.488 0,44.144 167.747,44.144 167.747,70.631 211.89,35.316 167.747,0 167.747,26.488" />
</svg>