export type MarkdownModule = {
    attributes: {
        tags: string,
        title: string,
        url: string,
        link: {
            url: string,
            text: string
        },
        thumbnail: string,
        youtube: string,
        location: string,
        invert_dark_images: boolean,
        social: string
    },
    html: string
};

export type MarkdownFile = {
    title: string,
    type: string,
    slug: string,
    meta: {
        date: Date | undefined,
        location: string,
        tags: string[]
    },
    link: {
        url: string,
        text: string,
        externalUrl: string
    },
    thumbnail: string | undefined,
    youtubeId: string | undefined,
    invertDarkImages: boolean,
    socialIcon: string | undefined,
    excerpt: string,
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

export function fileInfo(filePath: string) {
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

export function findFilePath(filePaths: string[], type: string, slug: string) {
    const filePath = filePaths.find(key => {
        const keyInfo = fileInfo(key);
        return keyInfo.type === type && keyInfo.slug === slug;
    });

    return filePath;
}

function getYouTubeThumbnail(youTubeId: string) {
    if(!youTubeId) return undefined;
    return `https://i.ytimg.com/vi/${youTubeId}/mqdefault.jpg`
}

export function markdownFile(filePath: string, module: MarkdownModule) : MarkdownFile
{
    const info = fileInfo(filePath);

    return {
        title: module.attributes.title,
        type: info.type,
        slug: info.slug,
        meta: {
            date: info.date,
            location: module.attributes.location,
            tags: module.attributes.tags?.split(" ") ?? []
        },
        link: {
            url: info.url,
            text: module.attributes.link?.text ?? getDefaultLinkText(info.type, module.attributes.youtube),
            externalUrl: module.attributes?.url ?? module.attributes.link?.url
        },
        thumbnail: module.attributes?.thumbnail ?? getYouTubeThumbnail(module.attributes.youtube),
        youtubeId: module.attributes.youtube,
        invertDarkImages: module.attributes.invert_dark_images ?? false,
        socialIcon: module.attributes.social,
        excerpt: clipExcerpt(module.html),
        html: module.html,
    };
}

function clipExcerpt(fullHtml: string) {
    const separator = "<!--more-->";
    const separatorIndex = fullHtml.indexOf(separator);
    const newLineIndex = fullHtml.indexOf("\n");
    if(separatorIndex > 0) {
        return fullHtml.substring(0, separatorIndex);
    } else if(newLineIndex > 0) {
        return fullHtml.substring(0, newLineIndex);
    } else {
        return fullHtml;
    }
}

function getDefaultLinkText(type: string, youtubeId: string): string {
    if(youtubeId) {
        return "Watch Online";
    }
    
    if(type === "projects") {
        return "Go To Project";
    }

    return "Read More";
}
