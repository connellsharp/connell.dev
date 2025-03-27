<script>
    export let navLinks = [];
    export let showAvatar = true;
</script>

<style lang="scss">
    header {
        margin-top: 10px;
        text-align: center;
    }

    #home {
        display: inline-block;
        margin: 0 10px;
        text-decoration: none;

        &:hover {

            img {
                filter: brightness(0) saturate(100%) invert(39%) sepia(94%) saturate(411%) hue-rotate(182deg) brightness(97%) contrast(94%);
            }

            h1, #subtitle {
                color: var(--blue);
                text-decoration: underline;
                text-decoration-thickness: 0.5px;
                text-underline-offset: 3px;
            }
        }
    }

    #avatar {
        display: inline-block;
        vertical-align: top;
        margin: 12px 12px 0 0;

        img {
            width: 60px;
        }
    }

    #title {
        display: inline-block;
        vertical-align: middle;

        h1 {
            color: var(--foreground);
            font-size: 2.5em;
            font-weight: 300;
            letter-spacing: 1px;
        }

        #subtitle {
            color: var(--foreground-off);
        }
    }

    nav {
        font-size: 1.2em;
        display: inline-block;
        vertical-align: text-top;

        a {
            color: var(--foreground);
            font-weight: 300;
            letter-spacing: 1px;
            margin: 10px 10px 0 10px;
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
    }
</style>

<header>
    <a id="home" href="/">
        {#if showAvatar}
            <div id="avatar">
                    <img src="/header/silhouette.svg" alt="Avatar" />
            </div>
        {/if}

        <div id="title">
            <h1>Connell</h1>
            <p id="subtitle">Software Engineer</p>
        </div>
    </a>

    {#if navLinks.length > 0}
    <nav>
        {#each navLinks as link}
            <a href={link.href} class={link.color}>{link.text}</a>
        {/each}
    </nav>
    {/if}
</header>