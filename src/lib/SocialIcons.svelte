<script lang="ts">
    import SocialIcon from "./SocialIcon.svelte";
    import { socials } from "./socials"
</script>

<style>
    .socials {
        text-align: center;
        margin: 5px auto -5px;
    }

    @media (max-width: 460px) {
        .socials {
            display: grid;
            grid-template-columns: repeat(3, 70px);
            align-items: center;
            width: 210px;
        }
    }
</style>

<div class="socials">
    {#each Object.keys(socials) as socialName}
        <SocialIcon type={socialName} href={socials[socialName]} />
    {/each}
</div>