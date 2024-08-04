<script>
    import StickyFooter from "$lib/StickyFooter.svelte";
    import HomeBoxes from "$lib/HomeBoxes.svelte";
    import SocialIcons from "$lib/SocialIcons.svelte";
    import TopBar from "$lib/TopBar.svelte";
    import Copyright from "$lib/Copyright.svelte";
    import { navLinks } from "$lib/navLinks";
</script>

<StickyFooter>
    <div slot="main" id="home">
        <TopBar />

        <HomeBoxes links={navLinks} />
    </div>
    
    <div slot="footer">
        <SocialIcons />
        <Copyright />
    </div>
</StickyFooter>