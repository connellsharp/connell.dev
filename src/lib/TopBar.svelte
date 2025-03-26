<script>
    export let navLinks = [];
    export let showAvatar = true;
</script>

<style lang="scss">
    header {
        margin-top: 10px;
        text-align: center;
    }

    #avatar {
        display: inline-block;
        margin-top: 12px;
        vertical-align: top;

        a {
            margin: 0 2px;
        }

        img {
            width: 60px;
        }
    }

    #title {
        display: inline-block;
        vertical-align: middle;
    }

    h1 {
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
        display: inline-block;

        &:hover {
            color: var(--blue);
        }

        &.green:hover {
            color: var(--green);
        }

        &.purple:hover {
            color: var(--purple);
        }

        &.red:hover {
            color: var(--red);
        }
    }
</style>

<header>
    {#if showAvatar}
        <div id="avatar">
            <a href="/">
                <img src="/header/silhouette.svg" alt="Avatar" />
            </a>
        </div>
    {/if}

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