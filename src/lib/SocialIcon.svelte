<script>
    export let type = "twitter";
    export let href = "#";
</script>

<style>
    a {
        display: inline-block;
        margin: 10px;
    }

    .icon {
        display: inline-block;
        vertical-align: middle;
        --size: 40px;
        --scale: 1;
        width: calc(var(--size) * var(--scale));
        height: calc(var(--size) * var(--scale));
        line-height: calc(var(--size) * var(--scale));
        padding: 5px;

        &.twitter { content: url("/socials/twitter.svg"); --scale: 0.7; }
        &.youtube { content: url("/socials/youtube.svg"); }
        &.stackoverflow { content: url("/socials/stackoverflow.svg"); }
        &.github { content: url("/socials/github.svg"); --scale: 0.8; }
        &.sessionize { content: url("/socials/sessionize.svg"); --scale: 0.7; }

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

<a href={href}>
    <img class="icon {type}" src={`/socials/${type}.svg`} alt={type} />
</a>