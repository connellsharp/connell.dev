<script>
    import '../styles/reset.css';
    import '../styles/themes.css';
    import '../styles/global.scss';
    import '../styles/posts.scss';

    import StickyFooter from "$lib/StickyFooter.svelte";
    import Copyright from "$lib/Copyright.svelte";
</script>

<StickyFooter>
    <div slot="not-footer">
        <slot />
    </div>
    
    <div slot="footer">
        <Copyright />
    </div>
</StickyFooter>