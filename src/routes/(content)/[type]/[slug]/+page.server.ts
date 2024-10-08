import { markdownFile, findFilePath, type MarkdownModule } from '$lib/markdown.js';

const files = import.meta.glob('/content/*/*.md');

export async function load({ params }) {
    const filePath = findFilePath(Object.keys(files), params.type, params.slug);
    const module = await files[filePath]() as MarkdownModule;
    const file = markdownFile(filePath, module);
        
    return { file: file };
};