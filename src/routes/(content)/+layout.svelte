<script>
    import Copyright from "$lib/Copyright.svelte";
    import StickyFooter from "$lib/StickyFooter.svelte";
    import TopBar from "$lib/TopBar.svelte";
    import { navLinks } from "$lib/navLinks";
</script>

<StickyFooter>
    <div slot="main">
        <TopBar navLinks={navLinks} />
    </div>

    <slot />
    
    <div slot="footer">
        <Copyright />
    </div>
</StickyFooter>