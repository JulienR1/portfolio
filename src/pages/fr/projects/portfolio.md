---
title: "Portfolio"
website: "https://julienrousseau.ca"
repo: "https://github.com/JulienR1/portfolio"
tags: "Astro,HTML,CSS,JavaScript,GitHub Pages"
layout: "/src/layouts/Project.astro"
---

C'est une site web simple pour présenter certains trucs cools sur lesquels j'ai travaillé au fil des années.

Je l'aime bien, alors le voici.

## Architecture

L'architecture de déploiement est simple: lorsque du code est poussé vers le nuage, il est compilé et publié sur GitHub Pages.
La dernière version du site est donc toujours mise de l'avant.

![Architecture de déploiement du portfolio](/projects/portfolio/portfolio-architecture-fr.jpg)
_Architecture de déploiement du portfolio_

## Internationalisation (i18n)

Astro offre une solution i18n native, sauvegardant la langue choisie dans l'url.
Comme ils utilisent une approche basée sur les fichiers pour le routage, cela signifie que **chaque fichier doit être dédoublé**.

Je ne voulais pas dupliquer tout et risquer de briser les styles.

Cependant, Astro permet aussi de **générer les pages manquantes** en compilant le projet _tout en spécifiant la langue qui est présentement visée_.
Ainsi, en utilisant le champ `Astro.currentLocale`, il est facile de créer une solution i18n personnalisée qui ne fait que dupliquer le texte, et rien d'autre!

## Stack technique

- [Astro](https://astro.build/), pour ces raisons:
  - Components
  - Génération d'archive facile
  - Support natif d'i18n
  - Support de markdown
  - Styles ciblés (_c'était ça ou Tailwind, et ça faisait un bout que je n'avais pas écrit de CSS directement_ &#129335;)
- [Sass](https://sass-lang.com/), parce que j'aime [imbriquer les styles](https://sass-lang.com/guide/#nesting) ensembles.
- [TypeScript](https://www.typescriptlang.org/), parce que cela vient avec Astro par défaut.

C'est ça. Je ne voulais pas utiliser d'autres dépendances, alors je ne l'ai pas fait.

<style>
    img {
        padding: 2em;
    }
</style>
