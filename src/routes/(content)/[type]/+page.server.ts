import { markdownFile, type MarkdownModule } from '$lib/markdown';
const allFiles = import.meta.glob('/content/*/*.md');

export async function load({ params }) {

    const files = await Promise.all(Object.keys(allFiles)
        .map(async (key) => {
            var module = await allFiles[key]() as MarkdownModule;
            return markdownFile(key, module);
        }));

    const sortedFiles = files.filter(file => file.slug != '_preamble' && file.type === params.type)
                             .sort((a, b) => b.date - a.date);

    return {
        files: sortedFiles,
        preamble: files.find(file => file.slug === '_preamble' && file.type === params.type)?.html
    };
};