<script lang="ts">
    import SocialIcon from "./SocialIcon.svelte";
    import { socials } from "./socials"
</script>

<style>
    .socials {
        text-align: center;
        margin: 5px auto -5px;
    }

    @media (max-width: 680px) {
        .socials {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            align-items: center;
            justify-items: center;
            width: 300px;
            margin-bottom: 30px;
        }
    }
</style>

<div class="socials">
    {#each Object.keys(socials) as socialName}
        <SocialIcon size="50px" type={socialName} href={socials[socialName]} />
    {/each}
</div>