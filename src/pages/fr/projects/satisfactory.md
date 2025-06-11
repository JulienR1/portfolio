---
title: "Résolveur Satisfactory"
website: "https://julienr1.github.io/satisfactory-resolver/"
repo: "https://github.com/JulienR1/satisfactory-resolver"
tags: "React,React Flow,NodeJs,TypeScript,GitHub Pages"
layout: "/src/layouts/Project.astro"
---

Je suis devenu accro à [Satisfactory](https://www.satisfactorygame.com/) durant l'[Update 3](https://satisfactory.fandom.com/wiki/Patch_0.3).

_Qui aurait pu deviner que j'aimerais un jeu où il faut optimiser des workflows et créer des systèmes parfaitement balancés?_

J'ai essayé oh combien de fois de construire une feuille Excel générique pour calculer diverses options d'usines rapidement.
Je voulais qu'elles soient les plus **efficientes** possible _et_ qu'elles soient les plus **rentables** possible.

Plusieurs outils sont disponibles en ligne pour faire exactement cela, et même plus.
[Satisfactory Calculator](https://satisfactory-calculator.com/) est un exemple populaire.

Cependant, je le percevais comme étant de la triche.
Je voulais _jouer_ au jeu, avoir l'expérience complète, et cela signifiait faire toutes les maths par moi-même.

Mais, si _je_ fais un programme qui calcule les maths, alors **_je_ fais toutes les maths par proxy**!
C'est ce projet.

## Présentation

La figure suivante conçoit une usine de "Modular Frame" générant 60 items par minute.

![Un exemple d'usine de Modular Frame](/projects/satisfactory/modular-frame.gif)
_Un exemple d'usine de Modular Frame_

L'application affiche certaines informations utiles de la manière suivante.

| Symbole                                                                                      | Signification                                     |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Bordures <mark style="padding: 0 0.2em; background: oklch(.685 .169 237.323);">bleues</mark> | Un surplus de production                          |
| Bordures <mark style="padding: 0 0.2em; background: oklch(.712 .194 13.428);">rouges</mark>  | Un déficit d'entrées                              |
| Nombres sur les **noeuds**                                                                   | Le nombre de machines requises                    |
| Nombres sur les **arêtes**                                                                   | Combien d'items intermédiaires allant de A vers B |

Elle permet de comparer plusieurs designs d'usine et d'évaluer lequel est meilleur dans une situation donnée.

![Comparaison de plusieurs variations d'usine de vis](/projects/satisfactory/screw-options.gif)
_Comparaison de plusieurs variations d'usine de vis_

L'application gère également les cycles gracieusement, utilisant les produits avant de requérir plus d'entrées (tel que vu avec l'exemple de l'eau dans la figure suivante).

![Gestion des cycles d'items](/projects/satisfactory/cycles.jpg)
_Gestion des cycles d'items_

## Motivations

- C'est un challenge intéressant.
- Je voulais me pratiquer dans l'utilisation de graphes en tant que structure de données.
- Mon tableau balnc était plein de calculs et je voulais l'utiliser pour autre chose.

## Stack technique

Les items et les recettes sont _scraped_ du [Wiki](https://satisfactory.wiki.gg/) en utilisant un script [Node](https://nodejs.org) personnalisé.

L'application est conçue en utilisant [React](https://react.dev/) et se base largement sur [React Flow](https://reactflow.dev/) pour gérer les saisies utilisateur.<br/>
Elle est disponible via [GitHub Pages](https://pages.github.com/).<br/>
Tout est codé avec [TypeScript](https://www.typescriptlang.org/).

<style>
    img {
        max-height: 600px;
    }
</style>
