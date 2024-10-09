<script>
    export let id;
</script>

<style lang="scss">
    .video-outer-wrapper {
        display: block;
        margin: 0 auto;
        width: 640px;
        max-width: 100%;
        height: auto;

        .video-inner-wrapper {
            position: relative; 
            padding-top: 56.25%; // 16:9

            iframe {
                position: absolute;
                top: 0; 
                left: 0; 
                width: 100%; 
                height: 100%; 
            }
        }
    }
</style>

<div class="video-outer-wrapper">
    <div class="video-inner-wrapper">
        <iframe width="640" height="360"
            src="https://www.youtube.com/embed/{id}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>
</div>