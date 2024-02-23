<script>
    import Arrow from "$lib/Arrow.svelte";
    import Box from "$lib/Box.svelte";
</script>

<style lang="scss">
    h1 { font-size: 2.5em; }

    .main {
        margin:20px;

        .left {
            
        }

        .middle {
            margin-left:140px;
        }

        .right {
            margin-left:190px;
        }
    }
</style>

<header> 
    <h1>Connell</h1>
</header>

<div class="main">
    <div class="left">
        <Box color="blue" href="/blog">Blog</Box>
    </div>
    <div class="middle">
        <Arrow size={70} rotate={45}></Arrow>
    </div>
    <div class="right">
        <Box color="green" href="/talks">Talks</Box>
    </div>
    <div class="middle">
        <Arrow size={70} rotate={135}></Arrow>
    </div>
    <div class="left">
        <Box color="purple" href="/youtube">YouTube</Box>
    </div>
</div>