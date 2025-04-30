<script>
    export let color = "blue";
    export let href = "#";
</script>

<style lang="scss">
.box {
    display: inline-block;
    vertical-align: middle;
    border-radius: 10px;
    text-align: center;
    letter-spacing: 0.5px;
    margin: 5px 0;

    font-size: 1.2em;
    font-weight: 500;

    a {
        display: block;
        width: var(--box-width);
        box-sizing: border-box;
        padding: 20px;
        color: var(--background);
    }

    &:hover {
        filter: brightness(var(--hover-brightness));
    }
}
</style>

<div class="box" style="background-color: var(--{color})">
    <a href={href}><slot /></a>
</div>