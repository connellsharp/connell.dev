<script>
    import Arrow from "$lib/Arrow.svelte";
    import Box from "$lib/Box.svelte";
    import SocialIcon from "$lib/SocialIcon.svelte";
    import StickyFooter from "$lib/StickyFooter.svelte";
</script>

<style lang="scss">
    #home {
        text-align: center;
    }

    header {
        h1 {
            padding-top: 10px;
            text-align: center;
            font-size: 2.5em;
            font-weight: 300;
        }

        p {
            margin-top: 5px;
            color: var(--foreground-off);
        }
    }

    .main {
        width: 360px;
        margin: 40px auto;

        .left {
            margin-left: 0px;
        }

        .middle {
            margin-left: 140px;
        }

        .right {
            margin-left: 190px;
        }
    }

    .socials {
        
    }
</style>

<StickyFooter>
    <div slot="main" id="home">
        <header> 
            <h1>Connell</h1>
            <p>Software Engineer</p>
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
                <Box color="purple" href="/explainers">Explainers</Box>
            </div>
        </div>
    </div>
    
    <div slot="footer" class="socials">
        <SocialIcon type="twitter" href="https://twitter.com/connellsharp" />
        <SocialIcon type="github" href="https://github.com/connellsharp" />
        <SocialIcon type="stackoverflow" href="https://stackoverflow.com/users/369247/connell" />
        <SocialIcon type="youtube" href="https://youtube.com/@drawingboxes" />
        <SocialIcon type="sessionize" href="https://sessionize.com/connell/" />
    </div>
</StickyFooter>