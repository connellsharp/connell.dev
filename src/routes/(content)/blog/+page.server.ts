const posts = import.meta.glob('/blog/*.md');

export async function load({ params }) {

    const files = await Promise.all(Object.keys(posts)
        .map(async (key) => {
            var module = await posts[key]();

            return {
                ...module.attributes,
                url: `/blog/${key.replace(/\.md$/, "")}`,
                excerpt: module.html.split("\n")[0],
            };
        }));

    return { files };
};