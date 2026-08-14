<script>
    import HomeBoxes from "$lib/HomeBoxes.svelte";
    import AboutMe from "$lib/AboutMe.svelte";
    import TopBar from "$lib/TopBar.svelte";
    import { navLinks } from "$lib/navLinks";
    import SocialIcons from "$lib/SocialIcons.svelte";
</script>

<svelte:head>
    <title>Connell - Software Engineer</title>
</svelte:head>

<TopBar />
<AboutMe />
<HomeBoxes links={navLinks} />
<SocialIcons />
