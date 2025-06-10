---
title: "Trampoline Intercité"
website: "https://trampolineintercite.com"
repo: "https://github.com/JulienR1/trampolineintercite.com"
layout: "/src/layouts/Project.astro"
---

## Version originale

Mon organisation de sports locale avait besoin d'une mise à jour de leur site internet et je souhaitais apprendre à développer pour web.
Ce projet est une expérience d'apprentissage qui est devenu un site publié.

La version originale du site est présentement hébergée chez GoDaddy en tant que site statique écrit manuellement avec HTML, CSS et JS avec un tout petit peu de PHP.
Les mises à jour sont lentes, il est facile de faire des erreurs et les temps de chargement pourraient être meilleurs.

## Version moderne

Ce projet (en cours) est une **réécriture complète** du site en utilisant des technologies modernes telles qu'[Astro](https://astro.build/), [React](https://react.dev/) et [Go](https://go.dev/).
Il est motivé par mon objectif continuel d'**automatiser les processus répétitifs** and **de réduire les embûches** lors des mises à jour du site original.

La face visible des utilisateurs est une **archive statique** répliquant le comportement actuel du site web vanille en se basant sur les **standards du web**.
La face d'administration, qui peut se permettre d'être plus lente, utilise un _stack_ plus lourd mais nettement plus puissante.
Cette séparation permet une bonne expérience pour tous les utilisateurs.

À terme, le site sera éditable par n'importe quelle administrateur autorisé and ne requerra plus mon intervention, tout en _minimisant les coûts d'opération et d'hébergement_.

La structure planifiée est la suivante:

![Planned architecture](/projects/trampo/trampo-architecture-fr.jpg)

### Planification

- [ ] Reproduire la version originale
  - Utiliser Astro;
  - Générer les pages en se basant sur des valeurs statiques;
  - Utiliser HTML pour l'interactivité quand possible, sinon utiliser JS.
- [ ] CI/CD
  - Mettre en place le projet dans le nuage.
- [ ] Lier au _backend_
  - Offrir un API basé sur les standards [OpenAPI](https://www.openapis.org/);
  - Remplacer les valeurs statiques du site par des valeurs provenant de l'API.
- [ ] Créer un outil CLI
  - Offrir des fonctionnalités de base aux administrateurs (par exemple: créer un nouvel utilisateur);
  - Automatiser les processus complexes pour réduire les erreurs.
- [ ] Portal d'administration
  - Créer un UI plus facile d'utilisation (que le CLI) pour éditer le site web.

<style>
    img {
        border: none;
    }
</style>
