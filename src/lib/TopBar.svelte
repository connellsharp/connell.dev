<script>
    export let navLinks = [];
</script>

<style>
    header {
        text-align: center;
    }

    #title {
        display: inline-block;
        vertical-align: middle;
    }

    h1 {
        padding-top: 10px;
        font-size: 2.5em;
        font-weight: 300;
    }

    #subtitle {
        color: var(--foreground-off);
    }

    nav {
        font-size: 1.2em;
        display: inline-block;
        margin: 10px;
        vertical-align: text-top;
    }

    a {
        color: var(--foreground);
        font-weight: 300;
        letter-spacing: 1px;
        margin: 0 10px;
    }

    a:hover {
        color: var(--blue);
    }

    a.green:hover {
        color: var(--green);
    }

    a.purple:hover {
        color: var(--purple);
    }

    a.red:hover {
        color: var(--red);
    }
</style>

<header>
    <div id="title">
        <h1><a href="/">Connell</a></h1>
        <p id="subtitle">Software Engineer</p>
    </div>

    {#if navLinks.length > 0}
    <nav>
        {#each navLinks as link}
            <a href={link.href} class={link.color}>{link.text}</a>
        {/each}
    </nav>
    {/if}
</header>