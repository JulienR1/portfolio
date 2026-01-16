---
title: "ewfmt"
repo: "https://github.com/JulienR1/ewfmt"
tags: "Go,Chora,Embedded Wizard"
layout: "/src/layouts/Project.astro"
---

J'ai pu travailler sur quelques projets GUI embarqués.
Il existe plusieurs outils pour développer vers diverses plateformes; l'un d'entre eux est [Embedded Wizard](https://www.embedded-wizard.de/).

L'outil a un langage propriétaire - [Chora](https://doc.embedded-wizard.de/chora-reference) - qui permet d'écrire du code embarqué qui interagit avec le kit de développement UI de EW.
En arrière, Chora est compilé en C.

Bien que le langage soit puissant, il n'est pas connu.
Ceci signifie qu'il n'y a pas beaucoup d'outils DX fournis par la communauté.
Cela m'énervait: je ne voulais pas me soucier de formatter mon code - manuellement.
J'ai fouillé un peu mais je n'ai pas trouvé de formateur satisfaisant.

Alors, j'en ai fais un.
C'était tout un projet.

## Ressources

J'avais une vague idée sur la manière de procéder en me basant sur un cours de [compilation](https://www.usherbrooke.ca/admission/fiches-cours/GIF340) au cours de mon parcours scolaire.
Cependant, la majorité du projet se base sur ces ressources:

- [Référence Chora](https://doc.embedded-wizard.de/chora-reference): La documentation en elle-même
- [Prettier printer](https://homepages.inf.ed.ac.uk/wadler/papers/prettier/prettier.pdf) par Philip Wadler: L'algèbre derrière un formateur
- [The hardest program I've ever written](https://journal.stuffwithstuff.com/2015/09/08/the-hardest-program-ive-ever-written) par Bob Nystrom: Sur le fonctionnement du formateur de Dart
- [How to write a code formatter](https://yorickpeterse.com/articles/how-to-write-a-code-formatter/) de Yorick Peterse: Sur l'implémentation du formateur d'Inko
- [EBNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form): Syntaxe pour décrire une grammaire
- [Writing a tokenizer](https://dev.to/ndesmic/writing-a-tokenizer-1j85) de @ndesmic: Une référence de lexeur
- [Writing An Interpreter In Go](https://interpreterbook.com/) de Thorsten Ball: Un livre de référence en Go
- [Grammaire C](https://www.quut.com/c/ANSI-C-grammar-y.html): Inspiration basée sur la langue de base

## Structure du projet

Le problème était simple: "Prendre du code, et le reproduire en suivant un ensemble de règles structurelles".

![Étapes initiales à effectuer](/projects/ewfmt/initial-steps.svg)
_Étape initiales du formateur_

Pour ce faire, il faut prendre un [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) et le transformer en _format tree_.
Le tour est joué en passant au-travers le _format tree_ et en exprimant le code initial avec les bons espaces et sauts de ligne.
Assez simple.

![Exemple de format tree](/projects/ewfmt/ewfmt-format-tree.svg)
_Un format tree représentant: `var int foo = 3 + 4;`_

Bien que ce soit beaucoup de travail, c'est ce que je souhaitais: spécifier des règles explicites pour toutes les expressions possibles et insérer les bons caractère blancs.

---

Pour bien décrire un _format tree_, il faut un AST.
Comme je ne trouvais pas d'analyseur grammatical pour Chora, j'en ai fait un.
J'ai bien apprécié le processus puisque je devais extraire la grammaire exacte de la documentation. Un bon casse-tête!
Par chance, une partie était déjà rédigée.

Malgré tout, cela a nécessité un bout de temps afin d'avoir un produit satisfaisant.

![Grammaire pour une boucle for](/projects/ewfmt/for-loop-grammar.png)
_La documentation de Chora pour une boucle `for`_

J'aurais probablement pu utiliser un convertisseur de grammaire pour éviter la majorité du travail.
Les compilateurs sont bien recherchés et compris; ce type de problème a été résolvé plusieurs fois par le passé.

Cependant, comme pour la majorité de mes projets, je voulais mettre les mains à la pâte et essayer par [moi-même](#la-grammaire).
J'avais du temps, alors pourquoi pas?

Avec les analyseurs syntaxique et grammatical ajoutés, les étapes finales pour formatter un bout de code sont les suivantes:

![Étapes pour formatter du code](/projects/ewfmt/steps.svg)
_Étapes pour formatter du code_

## Stack technique

Le projet est un CLI en [Go](https://go.dev/).<br/>
C'était assez rapidee pour traiter le code en entrée et assez facile pour moi de travailer avec le langage.

## La grammaire

Ici suit la grammaire finale utilisée par `ewfmt` pour générer un AST.

![Grammar](/projects/ewfmt/grammar.png)

<style>
    img:first-of-type {
        border: none;
    }

    pre {
        background: #818b981f;
        font-family: monaspace, sans-serif;
    }
</style>
