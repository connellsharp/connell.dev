export type MarkdownModule = {
    attributes: {
        tags: string,
        title: string
    },
    html: string
};

export function markdownFile(filename: string, module: MarkdownModule) 
{
    const split = filename.split("-");
    const slug = split.slice(3).join("-").replace(/\.md$/, "");

    return {
        date: new Date(split.slice(0, 3).join("-")),
        slug,
        url: '/blog/' + slug,
        ...module.attributes,
        tags: module.attributes.tags?.split(" "),
        excerpt: module.html.split("\n")[0],
        html: module.html,
    };
}