<script lang="ts">
    import SocialIcon from "./SocialIcon.svelte";

    export let links: {type:string, href:string}[] = [];
</script>

<style>
    .socials {
        text-align: center;
        margin: 0 auto -10px;
    }

    @media (max-width: 460px) {
        .socials {
            width: 250px;
        }
    }
</style>

<div class="socials">
    <SocialIcon type="stackoverflow" href="https://stackoverflow.com/users/369247/connell" />
    <SocialIcon type="github" href="https://github.com/connellsharp" />
    <SocialIcon type="youtube" href="https://youtube.com/@drawingboxes" />
    <SocialIcon type="twitter" href="https://twitter.com/connellsharp" />
    <SocialIcon type="sessionize" href="https://sessionize.com/connell/" />
</div>