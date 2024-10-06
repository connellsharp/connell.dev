import { markdownFile, type MarkdownModule } from '$lib/markdown.js';

const posts = import.meta.glob('/content/blog/*.md');

export async function load({ params }) {

    var filename = Object.keys(posts).find(key => key.includes(params.slug));

    if (!filename) {
        throw "Not found";
    }

    const module = await posts[filename]() as MarkdownModule;

    const file = markdownFile(filename, module);
        
    return { file: file };
};