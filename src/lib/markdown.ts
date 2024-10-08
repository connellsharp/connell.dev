export type MarkdownModule = {
    attributes: {
        tags: string,
        title: string
    },
    html: string
};

function getDate(numbers: string) {
    var dateStrMatch = numbers.match(/(\d{4})-(\d{2})-(\d{2})/);
    if(dateStrMatch) {
        return new Date(dateStrMatch[0]);
    }

    var yearOnlyMatch = numbers.match(/(\d{4})/);
    if(yearOnlyMatch) {
        return new Date(parseInt(yearOnlyMatch[0]), 0, 1);
    }
}

function getInfoFromFilename(filePath: string) {
    const filePathEnd = filePath.replace(/^\/?(content)?\/?/, "");
    const pathSplit = filePathEnd.split("/");
    const type = pathSplit[0];
    const fileName = pathSplit[1];

    const numbers = fileName.match(/[\d\-]+/)?.[0] ?? "";
    const slug = fileName.substring(numbers.length).replace(/\.md$/, "");

    return { 
        type, 
        date: getDate(numbers), 
        slug,
        url: `/${type}/${slug}`
    };
}

export function markdownFile(filePath: string, module: MarkdownModule) 
{
    return {
        ...getInfoFromFilename(filePath),
        ...module.attributes,
        tags: module.attributes.tags?.split(" "),
        excerpt: module.html.split("\n")[0],
        html: module.html,
    };
}