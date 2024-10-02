const posts = import.meta.glob('/blog/*.md');

export async function load({ params }) {

    const files = await Promise.all(Object.keys(posts)
        .map(async (key) => {
            var module = await posts[key]();
            var date = new Date(key.split("-").slice(0, 3).join("-"));

            return {
                date,
                ...module.attributes,
                tags: module.attributes.tags?.split(" "),
                url: `/blog/${key.replace(/\.md$/, "")}`,
                excerpt: module.html.split("\n")[0],
            };
        }));

    const sortedFiles = files.sort((a, b) => b.date - a.date);

    return { files: sortedFiles };
};