<script>
    export let type = "twitter";
    export let href = "#";
</script>

<style>
    a {
        display: inline-block;
        margin: 10px;
    }

    .icon {
        display: inline-block;
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        line-height: 50px;
        padding: 5px;
    }
</style>

<a href={href}>
    <img class="icon" src={`/icons/${type}.svg`} alt={type} />
</a>