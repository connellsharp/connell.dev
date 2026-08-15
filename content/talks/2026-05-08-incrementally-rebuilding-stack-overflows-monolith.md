---
title: "Incrementally Rebuilding Stack Overflow's Monolith"
location: NDC Toronto
tags: agile experimentation
youtube: Ng-zfuUrHoQ
thumbnail: /thumbnails/ndc-copenhagen-2025.png
---

Our small team at Stack Overflow took on a huge project to rebuild our Comments system. This talk takes you through our journey trying to balance rapid experimentation and being agile while architecting a Modular Monolith and rebuilding the frontend in Svelte.

At one stage we had the same UI written in two different languages and had to implement every change twice! We had several A/B tests running at the same time. And it got messy.

This talk takes you through some of the technical problems we faced such as getting Server-Side Rendered JavaScript running in .NET, but also the softer problems like trying to release early versions of existing functionality and trying to A/B test everything.

Hopefully there’s something to learn, but at the very least, there’ll be something to laugh at.