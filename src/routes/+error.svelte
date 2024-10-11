<script>
    import { page } from '$app/stores';
    import Copyright from '$lib/Copyright.svelte';
    import { fileInfo } from '$lib/markdown';
    import StickyFooter from '$lib/StickyFooter.svelte';
    const allFiles = import.meta.glob('/content/*/*.md');
    const allFileInfos = Object.keys(allFiles).map(fileInfo);

    let attemptedSlug = '';
    let suggestedSlug = null;

    function findClosestMatch(slug) {
        return allFileInfos.find(s => s.slug == slug)?.url || null;
    }

    $: {
        const path = $page.url.pathname;
        attemptedSlug = path.substring(1);
        suggestedSlug = findClosestMatch(attemptedSlug);
    }

</script>

<svelte:head>
    {#if suggestedSlug}
        <meta http-equiv="refresh" content="0; url={suggestedSlug}" />
    {/if}
</svelte:head>

<style>
    #error {
        text-align: center;
        margin: 20px auto;
    }

    #error h1 {
        font-size: 2em;
        margin: 0;
    }

    #error p {
        margin: 15px 0 0 0;
    }
</style>

<StickyFooter>
    <div slot="not-footer">
        <div id="error">
            {#if suggestedSlug}
                <h1>Oh dear</h1>
                <p>That looks like an old link.</p>
                <p>I think you mean <a href={suggestedSlug}>{suggestedSlug}</a>.</p>
                <p>Redirecting...</p>
            {:else}
                <h1>Oh dear</h1>
                <p>That link didn't work.</p>
                <p><a href="/">Click here to go home.</a></p>
            {/if}
        </div>
    </div>
    
    <div slot="footer">
        <Copyright />
    </div>
</StickyFooter>