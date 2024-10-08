import { markdownFile, type MarkdownModule } from '$lib/markdown';
const allFiles = import.meta.glob('/content/*/*.md');

export async function load({ params }) {
    const files = await Promise.all(Object.keys(allFiles)
        .map(async (key) => {
            var module = await allFiles[key]() as MarkdownModule;
            return markdownFile(key, module);
        }));
        
    const allTagsWithCount = files
        .filter(f => f.tags)
        .flatMap(f => f.tags)
        .reduce((acc, tag) => {
            acc[tag] = (acc[tag] || 0) + 1;
            return acc;
        }, {});

    return {
        allTags: allTagsWithCount
    };
};