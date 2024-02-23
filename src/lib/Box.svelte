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

    a {
        display:block;
        width: 130px;
        padding: 20px;
        color: var(--background);
    }
}
</style>

<div class="box" style="background-color: var(--{color})">
    <a href={href}><slot /></a>
</div>