---
title: "Satisfactory solver"
website: "https://julienr1.github.io/satisfactory-resolver/"
repo: "https://github.com/JulienR1/satisfactory-resolver"
tags: "React,React Flow,NodeJs,TypeScript,GitHub Pages"
layout: "/src/layouts/Project.astro"
---

I got addicted to [Satisfactory](https://www.satisfactorygame.com/) during [Update 3](https://satisfactory.fandom.com/wiki/Patch_0.3).

_Who could have guessed that I would like a game about optimizing workflows and making a perfectly balanced system?_

I tried oh so many times to create a generic Excel spreadsheet to calculate various factory options quickly.
I wanted them to be as **efficient** as could be _and_ as **cost effective** as possible.

Many tools are available online to do exactly this, and even more.
[Satisfactory Calculator](https://satisfactory-calculator.com/) is a pretty popular one.

However, it felt like cheating.
I wanted to _play_ the game, to get the full experience, and that meant doing all the maths by myself.

But, if _I_ made a program that does the maths, then **_I_ did the maths by proxy**! This is this project.

## Showcase

The following image shows a "Modular Frame" factory producing 60 items per minute.

![A modular frame factory example](/projects/satisfactory/modular-frame.gif)
_A modular frame factory example_

The app displays useful information in the following manner.

| Symbol                                                                                    | Signification                                          |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| <mark style="padding: 0 0.2em; background: oklch(.685 .169 237.323);">Blue</mark> borders | A production surplus                                   |
| <mark style="padding: 0 0.2em; background: oklch(.712 .194 13.428);">Red</mark> borders   | An input deficit                                       |
| Numbers on **nodes**                                                                      | The required machine count                             |
| Numbers on **edges**                                                                      | How many intermediate items are travelling from A to B |

It allows to compare various factory designs and evaluate which is better for a given situation.

![Comparison between various screw factories](/projects/satisfactory/screw-options.gif)
_Comparison between various screw factories_

The app also smoothly handles item cycles, using products before requesting more inputs (as seen with the water example in the following picture).

![Item cycles handling](/projects/satisfactory/cycles.jpg)
_Handling item cycles_

## Motivations

- It is a fun challenge.
- I wanted to practice using graphs as a data structure.
- My whiteboard was full of calculations and I wanted to use it for something else.

## Tech stack

Items and recipes are scraped from the [Satisfactory Wiki](https://satisfactory.wiki.gg/) using a custom [Node](https://nodejs.org) script.

The app is built using [React](https://react.dev/) and heavily relies on [React Flow](https://reactflow.dev/) to handle user inputs.<br/>
It is available through [GitHub Pages](https://pages.github.com/).<br/>
Everything is in [TypeScript](https://www.typescriptlang.org/).

<style>
    img {
        max-height: 600px;
    }
</style>
