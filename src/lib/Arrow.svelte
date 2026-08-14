<script lang="ts">
    const DEFAULT_SHAFT_END = 167.747;
    const HEAD_LENGTH = 44.143;
    const MID_Y = 35.316;
    export let shaftEnd = DEFAULT_SHAFT_END;

    $: headX = shaftEnd + HEAD_LENGTH;
</script>

<style lang="scss">
    polygon {
        fill: var(--foreground);
        transform: rotate(var(--arrow-rotation));
        transform-origin: 106px 35.5px;
    }

    svg {
        width: var(--arrow-size);
        height: var(--arrow-size);
    }
</style>

<svg viewBox="0 -71 213 213">
    <polygon points={`0,26.488 0,44.144 ${shaftEnd},44.144 ${shaftEnd},70.631 ${headX},${MID_Y} ${shaftEnd},0 ${shaftEnd},26.488`} />
</svg>