import { markdownFile, type MarkdownModule } from '$lib/markdown';
const allFiles = import.meta.glob('/content/*/*.md');

function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

export async function load({ params }) {

    const files = await Promise.all(Object.keys(allFiles)
        .map(async (key) => {
            var module = await allFiles[key]() as MarkdownModule;
            return markdownFile(key, module);
        }));

    const sortedFiles = files.filter(file => file.slug != '_preamble' && file.type === params.type)
                             .sort((a, b) => b.meta.date - a.meta.date);

    const preambleFile = files.find(file => file.slug === '_preamble' && file.type === params.type);

    return {
        title: toTitleCase(params.type),
        files: sortedFiles,
        preamble: !!preambleFile ? {
            html: preambleFile.html,
            socialIcon: preambleFile.socialIcon
        } : undefined,
    };
};