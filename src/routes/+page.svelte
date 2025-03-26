<script>
    import StickyFooter from "$lib/StickyFooter.svelte";
    import HomeBoxes from "$lib/HomeBoxes.svelte";
    import AboutMe from "$lib/AboutMe.svelte";
    import SocialIcons from "$lib/SocialIcons.svelte";
    import TopBar from "$lib/TopBar.svelte";
    import Copyright from "$lib/Copyright.svelte";
    import { navLinks } from "$lib/navLinks";
</script>

<svelte:head>
    <title>Connell - Software Engineer</title>
</svelte:head>

<StickyFooter>
    <div slot="not-footer">
        <TopBar />
        <AboutMe />
        <HomeBoxes links={navLinks} />
    </div>
    
    <div slot="footer">
        <SocialIcons />
        <Copyright />
    </div>
</StickyFooter>