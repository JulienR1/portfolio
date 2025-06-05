---
title: "Satisfactory solver"
website: "https://julienr1.github.io/satisfactory-resolver/"
repo: "https://github.com/JulienR1/satisfactory-resolver"
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

![A modular frame factory example](/projects/satisfactory/modular-frames.jpg)
_A modular frame factory example_

The app displays useful information in the following manner.

| Symbol                                                                  | Signification                                          |
| ----------------------------------------------------------------------- | ------------------------------------------------------ |
| <mark style="background: oklch(.685 .169 237.323);">Blue</mark> borders | A production surplus                                   |
| <mark style="background: oklch(.712 .194 13.428);">Red</mark> borders   | An input deficit                                       |
| Numbers on **nodes**                                                    | The required machine count                             |
| Numbers on **edges**                                                    | How many intermediate items are travelling from A to B |

It allows to compare various factory designs and evaluate which is better for a given situation.

![Comparison between various screw factories](/projects/satisfactory/comparison.gif)
_Comparison between various screw factories_

<style>
    img {
        max-height: 600px;
    }
</style>
