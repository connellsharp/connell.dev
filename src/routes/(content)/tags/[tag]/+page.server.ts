import { markdownFile, findFilePath, type MarkdownModule, fileInfo } from '$lib/markdown.js';

const tagFiles = import.meta.glob('/content/tags/*.md');
const allFiles = import.meta.glob('/content/*/*.md');

export async function load({ params }) {
    const filePath = findFilePath(Object.keys(tagFiles), 'tags', params.tag);
    const module = await tagFiles[filePath]() as MarkdownModule;
    const file = markdownFile(filePath, module);

    const allTags = Object.keys(tagFiles).map(f => fileInfo(f).slug);

    const files = await Promise.all(Object.keys(allFiles)
        .map(async (key) => {
            var module = await allFiles[key]() as MarkdownModule;
            return markdownFile(key, module);
        }));
    const filesTagged = files.filter(f => f.tags && f.tags.includes(params.tag));
        
    return {
        allTags: allTags,
        tagFile: file,
        contentFiles: filesTagged
    };
};