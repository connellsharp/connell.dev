<script>
    export let type = "twitter";
    export let href = "#";
    export let size = "40px";
</script>

<style lang="scss">
    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        padding: 15px;
        width: calc(var(--size));
        height: calc(var(--size));

        &:hover {
            .icon {
                filter: brightness(var(--hover-brightness));

                &.twitter { filter: contrast(0.4); }
                &.github { filter: contrast(0.4); }
            }

            border-radius: 100%;
            background-color: var(--background-very-close);
        }
    }

    .icon {
        text-align: center;
        display: block;
        width: calc(var(--size) * var(--scale));
        height: calc(var(--size) * var(--scale));

        --scale: 1;
        &.twitter { content: url("/socials/twitter.svg"); --scale: 0.7; }
        &.youtube { content: url("/socials/youtube.svg"); }
        &.stackoverflow { content: url("/socials/stackoverflow.svg"); }
        &.github { content: url("/socials/github.svg"); --scale: 0.8; }
        &.sessionize { content: url("/socials/sessionize.svg"); --scale: 0.7; }
        &.bluesky { content: url("/socials/bluesky.svg"); --scale: 0.8; }
        &.linkedin { content: url("/socials/linkedin.svg"); --scale: 0.8; }

        @media (prefers-color-scheme: dark) {
            &.twitter { content: url("/socials/twitter-white.svg"); }
            &.github { content: url("/socials/github-white.svg"); }
        }
    }
</style>

<a href={href} style={`--size: ${size};`}>
    <img class="icon {type}" src={`/socials/${type}.svg`} alt={type} />
</a>