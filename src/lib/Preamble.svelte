<script>
    import SocialIcon from "./SocialIcon.svelte";
    import { socials } from "./socials";
    export let icon;
</script>

<style>
    .preamble {
        border-top: 1px solid;
        border-color: var(--background-off);
        padding: 25px 0;
        font-size: 1.1em;
        display: flex;
        align-items: center;
    }

    .preamble-content {
        flex-grow: 1;
    }

    .social-container {
        margin: -20px 0 -20px 10px;
    }
</style>

<div class="preamble">
    <div class="preamble-content">  
        <slot />
    </div>
    {#if icon}
        <div class="social-container">
            <SocialIcon type={icon} href={socials[icon]} />
        </div>
    {/if}
</div>