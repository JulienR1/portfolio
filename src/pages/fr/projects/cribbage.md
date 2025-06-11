---
title: "Cribbage"
repo: "https://github.com/JulienR1/cribbage"
tags: "Go,WebSocket,TypeScript,HTMX"
layout: "/src/layouts/Project.astro"
---

J'aime les jeux de cartes.

Quand mon amie m'a montré comment jouer au Cribbage, j'ai décidé que la meilleure manière d'**apprendre les règles** était de programmer ma propre version du jeu.

## Structure du projet

Le projet est séparé en 3 sections: le _core_ du jeu, l'application de test console et le serveur web.

Le _core_ exécute le jeu en soi d'une manière indépendante. Il ne fait qu'attendre une saisie des joueurs que lorsque nécessaire.
N'importe quel utilisateur peut se **connecter dans les évènements du _core_** et répondre selon les besoins du jeu.
Ceci permet de connecter divers UI ou de programmer plusieurs situations en parallèle, par exemple: tester et jouer au jeu.

![Structure du projet de Cribbage](/projects/cribbage/cribbage-structure-fr.jpg)
_Structure simplifiée du projet_

## Séquence de jeu

La séquence de jeu est relativement simple: rejoindre une partie, jouer comme à l'habitude.

La boucle de jeu n'est qu'une machine à états finis décrite par les états ainsi que la figure suivants.

1. Mélanger les cartes
1. Piger les mains des joueurs _(6 cartes par joueur dans une partie de 2 joueurs)_
1. Construire le crib _(2 cartes par joueur dans une partie de 2 joueurs)_
1. Piger la carte de départ
1. Jouer les mains des joueurs
1. Pointer les mains des joueurs
1. Pointer le crib

En _tout point_, si un joueur a 121 points ou plus, il ou elle gagne la partie.

![Boucle de jeu du Cribbage](/projects/cribbage/cribbage-game-loop-fr.jpg)
_Survol de la boucle de jeu_

## Stack technique

Le jeu et le serveur web sont tous les deux conçus avec [Go](https://go.dev/) parce que je trouve le langage facile et plaisant.<br/>
L'interface frontend est générée par [templ](https://templ.guide/) et vise à être servie par SSR.<br/>
L'interactivité est ajoutée via [HTMX](https://htmx.org/) pour les _requêtes génériques_ et via des **websockets** (Javascript + [JSDoc](https://jsdoc.app/)) pour les évènements reliés au jeu.

<style>
    img:first-of-type {
        border: none;
    }
</style>
