import { markdownFile, findFilePath, type MarkdownModule } from '$lib/markdown.js';

const tagFiles = import.meta.glob('/content/tags/*.md');
const allFiles = import.meta.glob('/content/*/*.md');

async function getFile(filePath: string | undefined) {
    if (!filePath) {
        return undefined;
    }
    const module = await allFiles[filePath]() as MarkdownModule;
    return markdownFile(filePath, module);
}

export async function load({ params }) {
    const filePath = findFilePath(Object.keys(tagFiles), 'tags', params.tag);
    const file = await getFile(filePath)

    const files = await Promise.all(Object.keys(allFiles).map(getFile));
    const filesTagged = files.filter(f => f && f.meta.tags && f.meta.tags.includes(params.tag))
                             .sort((a, b) => b.meta.date - a.meta.date);

    const allTagsWithCount = files
        .filter(f => f.meta.tags)
        .flatMap(f => f.meta.tags)
        .reduce((acc, tag) => {
            acc[tag] = (acc[tag] || 0) + 1;
            return acc;
        }, {});
        
    return {
        allTags: allTagsWithCount,
        tag: params.tag,
        tagFile: file,
        contentFiles: filesTagged
    };
};