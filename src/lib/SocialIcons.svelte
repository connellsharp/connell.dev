<script lang="ts">
    import SocialIcon from "./SocialIcon.svelte";
    import { socials } from "./socials"
    export let size = "40px";
</script>

<style>
    .socials {
        text-align: center;
        margin: 5px auto -5px;
    }

    @media (max-width: 680px) {
        .socials {
            display: grid;
            grid-template-columns: repeat(3, 70px);
            align-items: center;
            width: 210px;
            margin-bottom: 30px;
        }
    }
</style>

<div class="socials">
    {#each Object.keys(socials) as socialName}
        <SocialIcon {size} type={socialName} href={socials[socialName]} />
    {/each}
</div>