<script>
    export let type = "twitter";
    export let href = "#";
    export let size = "40px";
</script>

<style>
    a {
        display: inline-block;
        padding: 15px;
        width: calc(var(--size));
    }

    .icon {
        text-align: center;
        display: inline-block;
        vertical-align: middle;
        width: calc(var(--size) * var(--scale));
        height: calc(var(--size) * var(--scale));
        line-height: calc(var(--size) * var(--scale));

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

        &:hover {
            filter: brightness(var(--hover-brightness));

            &.twitter { filter: contrast(0.4); }
            &.github { filter: contrast(0.4); }
        }
    }
</style>

<a href={href} style={`--size: ${size};`}>
    <img class="icon {type}" src={`/socials/${type}.svg`} alt={type} />
</a>