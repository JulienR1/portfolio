---
title: "Portfolio"
website: "https://julienrousseau.ca"
repo: "https://github.com/JulienR1/portfolio"
tags: "Astro,HTML,CSS,JavaScript,GitHub Pages"
layout: "/src/layouts/Project.astro"
---

This is a simple website to showcase some cool things I have made over the years.

I like this website, so here it is.

## Architecture

The deployment architecture is straight forward: when code is pushed to the cloud, it is built and deployed to GitHub Pages.
The latest version of the site is then always showcased.

![Portfolio deployment architecture](/projects/portfolio/portfolio-architecture.jpg)
_Portfolio deployment architecture_

## Internationalization (i18n)

Astro offers a first party i18n solution, storing the selected locale in the url.
Since they use a file-based approach to routing, this means that **every file must be created twice**.

I did not want to duplicate everything and risk messing up on styles.

However, Astro can also **generate all missing pages** at compile time _while specifying which language it is currently targeting_.
Using the available `Astro.currentLocale` field, it is easy to create a custom i18n solution that only duplicates text, and nothing else!

## Tech stack

- [Astro](https://astro.build/), for these reasons:
  - Components
  - Easy archive generation
  - 1st party i18n support
  - Markdown support
  - Scoped styles (_it was either this or Tailwind, and it had been a while since I wrote CSS directly_ &#129335;)
- [Sass](https://sass-lang.com/), because I like to [nest styles](https://sass-lang.com/guide/#nesting) together.
- [TypeScript](https://www.typescriptlang.org/), because I can't be trusted and it is supported by default by Astro.

That is it. I did not want to use extra dependencies, so I did not.

<style>
    img {
        padding: 2em;
    }
</style>
