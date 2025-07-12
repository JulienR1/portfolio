---
title: "SAUM"
layout: "/src/layouts/Project.astro"
repo: "https://github.com/SAMuCaptE/documentation"
---

SAUM est un projet de recherche étudiant visant à **monitorer l'impact du changement climatique sur les lacs nordiques canadiens** en obtenant certaines données physicochimiques utiles tout au long de l'année.
Il est mené par le [Laboratoire Nanotechnologies et Nanosystèmes](https://www.usherbrooke.ca/ln2/ et est associé avec l'[Université de Sherbrooke](https://usherbrooke.ca.

## Motivation du projet

Les images suivantes présentent certains lacs visés qui sont présentement étudiés manuellement en mesurant des données au cours de l'été.
Tout est fait au cours de l'été puisque l'environnement est trop hostile durant les autres périodes de l'année et n'est pas accessible.

<div class="horizontal">
    <img src="/projects/saum/terrain.jpg" alt="Terrain" />
    <img src="/projects/saum/manual_mission.jpg" alt="Exemple de mission" />
</div>
<em>Les scientifiques doivent prendre des mesures manuellement</em>

SAUM vise a laisser une **station sous-marine pour récupérer des données tout au long de l'année**.
Ceci permet d'obtenir **plus de données** et de caractériser le comportement des lacs **au cours de l'hiver**.
La solution doit être résiliente, efficace énergétiquement et fiable.

## Requis

Les requis principaux sont définis comme suit par l'équipe:

- Mesurer la température, le pH et la conductivité électrique de l'eau;
- Résister à la formation et la destruction de la calottre de glace;
- Être portable;
- Être facile d'utilisation;
- Accumuler des données mesurées pendant 1 an;
- Être réutilisable;

Certains autres requis ont été mis de l'avant et implémentés, mais ceux-ci étaient non-négociables.

## Solution

La solution proposée consiste en une base submergée hébergeant un circuit imprimé personnalisé alimentant et contrôlant des capteurs externes.
Cette station submergée transmet des données périodiquement vers une autre station sur la berge en tant que _backup_ pour éventuellement synchroniser le tout en ligne via satellites.
Tous les composants sont indépendants et sont conçus pour durer une année.

Le diagramme suivant résume la solution.

![Diagramme de haut niveau de la solution](/projects/saum/highlevel.png)
_Diagramme simplifié de la solution_

Les stations sont mieux détaillées par les CADs suivants.

<div class="horizontal cad">
    <img src="/projects/saum/loch-cad.png" alt="Loch CAD" />
    <img src="/projects/saum/ness-cad.png" alt="Ness CAD" />
</div>
<em>CAD de la solution</em>

Finalement, les boitiers contiennent trois composants: le circuit imprimé, les batteries et le stockage.
Ils communiquent vers divers périphériques par UART.
Les deux stations peuvent être configurées avec un ordinateur portable en utilisant un programme externe (appelé Atlanta).

D'un point de vue électronique et logiciel, les différents composants sont architecturés ainsi:

![schema](/projects/saum/schema.svg)
_Schéma électronique et logiciel de haut niveau_

## Loch

Loch est le programme exécuté par la station submergée.
Son but est de mesurer les données physicochimiques des lacs et de conserver les valeurs pendant une année.
La station est conçue pour être le plus fiable et efficace énergétiquement possible.

En résumé, la boucle principale est la suivante.

<img src="/projects/saum/flow.jpg" alt="Diagramme de flow de Loch" style="padding-bottom: 1em;"/>
<em>Version simplifiée de la boucle principale de Loch</em>

## Pigeon

Pigeon est un protocole binaire personnalisé transmis par UART afin de communiquer entre les stations et avec Atlanta.
Toutes les transmissions utilisent la structure suivante.
Le protocole est implémenté en C et en Go.

![Structure des transmissions de Pigeon](/projects/saum/pigeon.jpg)
_Structure des transmissions de Pigeon_

## Atlanta

Atlanta est un programme externe fait pour interagir avec les appareils embarqués.
Il agit en tant que UI pour faciliter la **configuration** and le **rapatriement des données**.
Cependant, toutes les fonctions sont aussi disponibles dans le terminal pour automatiser les processus.

Les requis principaux sont:

- Détecter une station connectée (via USB);
- Écrire et lire la configuration d'une station;
- Lire les données sauvegardées;
- Valider l'intégrité d'une station.

Atlanta est mis de l'avant par ses maquettes.

![Menu de sélection d'une base](/projects/saum/atlanta-menu.png)
_Menu de sélection d'une base_

![Processus de configuration](/projects/saum/atlanta-sensor-configuration.png)
_Configuration d'un capteur pour une mission à venir_

<div class="horizontal">
    <img src="/projects/saum/atlanta-config-wizard.png"/>
    <img src="/projects/saum/atlanta-config-wizard-2.png"/>
</div>
<em>Utilisation du wizard pour configurer et valider une station</em>

## Tests

Pour valider le comportement prévu, plusieurs tests ont été effectués au cours de diverses étapes de réalisation.
En guise d'exemple, le programme principal a été testé en utilisant un kit de développement (alors que le circuit imprimpé était en fabrication) et des capteurs.
Par après, c'était une étape facile de remplacer le kit de développement par le vrai circuit.
Ici sont des journaux qui ont permis de valider la fréquence des mesures, les valeurs lues ainsi que le stockage en temps réel.

![Journaux de tests de longue durée](/projects/saum/long-run-test.png)
_Journaux d'un test s'étalant sur plusieurs jours_

Certains tests ont aussi été fait pour valider les processus de déploiement et de rapatriement dans un environnement local.

![Processus de déploiement dans un environnement local](/projects/saum/test-bassin.png)
_Test du processus de déploiement_

## Mission Churchill

Au cours de l'été 2024, le premier prototype a été déployé 2 semaines à Churchill, MB en tant que premier test.

<video src="/projects/saum/mission_site.mp4" controls></video>
_Site de la mission à Churchill_

<style>
    img {
        border: none;
    }

    .horizontal img {
        margin: 0;
        max-width: min(100%, 400px);
        border: none;
        padding: 0;
    }

    .cad img {
        max-height: 30vh;
    }

    video {
        max-height: 40vh;
    }
</style>
