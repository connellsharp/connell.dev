import { markdownFile, type MarkdownModule } from '$lib/markdown';
const posts = import.meta.glob('/content/blog/*.md');

export async function load({ params }) {

    const files = await Promise.all(Object.keys(posts)
        .map(async (key) => {
            var module = await posts[key]() as MarkdownModule;
            return markdownFile(key, module);
        }));

    const sortedFiles = files.sort((a, b) => b.date - a.date);

    return { files: sortedFiles };
};