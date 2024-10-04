<script>
    import Copyright from "$lib/Copyright.svelte";
    import StickyFooter from "$lib/StickyFooter.svelte";
    import TopBar from "$lib/TopBar.svelte";
    import { navLinks } from "$lib/navLinks";
</script>

<style>
    
    #main {
        width: 100%;
        max-width: 740px;
        margin: 20px auto;
        padding: 20px 10px;
        box-sizing: border-box;
        border-top: 1px solid;
        border-color: #eee;
    }
</style>

<StickyFooter>
    <div slot="not-footer">
        <TopBar navLinks={navLinks} />
        
        <div id="main">
            <slot />
        </div>
    </div>
    
    <div slot="footer">
        <Copyright />
    </div>
</StickyFooter>