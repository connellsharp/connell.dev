<script lang="ts">
    import SocialIcon from "./SocialIcon.svelte";
    import { socials } from "./socials"
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
    {#each Object.keys(socials) as socialName}
        <SocialIcon type={socialName} href={socials[socialName]} />
    {/each}
</div>