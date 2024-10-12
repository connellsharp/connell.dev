<script lang="ts">
    export let meta: { date: Date | undefined; tags: string[] } = { date: undefined, tags: [] };

    const getDateString = (date: Date | undefined) => {
        if(!date) {
            return "";
        }

        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "long" });
        const year = date.getFullYear();

        if(day === 1 && date.getMonth() === 0) {
            // Let's assume I don't publish things on new year's day
            return year + '';
        }

        const getOrdinal = (number: number) => {
            if (number > 3 && number < 21) {
                return "th";
            }
            switch (number % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        };

        return `${day}${getOrdinal(day)} ${month} ${year}`;
    };
</script>

<div class="entry-meta">
    {#if meta.date}
        <span class="date">
            {getDateString(meta.date)}
        </span>
        
    {/if}
    {#if meta.location}
        <span class="location">
            {meta.location}
        </span>
    {/if}

    {#if meta.tags && meta.tags.length > 0}
        <span class="tags">
            {#each meta.tags as tag}
                <a href="/tags/{tag}">#{tag}</a>
            {/each}
        </span>
    {/if}
</div>

<style lang="scss">
    .entry-meta {
        margin: -10px 0 25px;
        font-size: 0.8em;
        color: var(--foreground-faded);

        span {
            padding-right: 20px;
    
            &:before {
                margin-right: 3px;
                vertical-align: middle;
            }

            &.date:before {
                content: url('/icons/clock.svg');
            }

            &.location:before {
                content: url('/icons/house.svg');
            }
        }

        a {
            color: inherit;

            &:hover {
                color: var(--blue);
            }
        }

        .tags {
            a {
                margin-right: 6px;
            }
        }
    }
</style>
