---
title: "ewfmt"
repo: "https://github.com/JulienR1/ewfmt"
tags: "Go,Chora,Embedded Wizard"
layout: "/src/layouts/Project.astro"
---

I got to work on some embedded GUI projects.
There are many tools to develop on various platforms; one of them is [Embedded Wizard](https://www.embedded-wizard.de/).

It has a custom language - [Chora](https://doc.embedded-wizard.de/chora-reference) - that allows to write embedded code that interacts with the EW UI toolkit.
Under the hood, Chora compiles to C.

While the language in itself is really powerful, it is niche. This means that there is not a lot of community provided DX tooling.
This bugged me: I did not want to worry about code formatting - manually. I looked around and could not find a satisfying formatter.

So, I made one. It was quite the project.

## Resources

I had a vague idea on where to start from based on some [compilation](https://www.usherbrooke.ca/admission/fiches-cours/GIF340) uni class.
However, most of this project comes from these resources:

- [Chora reference](https://doc.embedded-wizard.de/chora-reference): The docs in themselves
- [Prettier printer](https://homepages.inf.ed.ac.uk/wadler/papers/prettier/prettier.pdf) by Philip Wadler: The algebra behind a formatter
- [The hardest program I've ever written](https://journal.stuffwithstuff.com/2015/09/08/the-hardest-program-ive-ever-written) by Bob Nystrom: On how the dart formatter is made
- [How to write a code formatter](https://yorickpeterse.com/articles/how-to-write-a-code-formatter/) by Yorick Peterse: On how the inko formatter is made
- [EBNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form): Grammar description syntax
- [Writing a tokenizer](https://dev.to/ndesmic/writing-a-tokenizer-1j85) by @ndesmic: A tokenizer reference
- [Writing An Interpreter In Go](https://interpreterbook.com/) by Thorsten Ball: A reference book in Go
- [C grammar](https://www.quut.com/c/ANSI-C-grammar-y.html): Inspiration based on the source material

## Project structure

The problem was simple: "Take some code, and spit it back out given a set of structural rules".

![Initial steps to be done](/projects/ewfmt/initial-steps.svg)
_Initial formatter steps_

To do this, take an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) and transform it into a format tree.
Walk through the format tree and output the initial code with the correct new lines and white spaces.
Simple enough.

![Format tree example](/projects/ewfmt/ewfmt-format-tree.svg)
_A format tree representing: `var int foo = 3 + 4;`_

While quite a bit of work, this is what I wanted: to specify explicit rules for every possible statement and insert the appropriate white space.

---

To properly describe a format tree, I needed an AST.
Since I could not find a Chora AST parser, I had to make one.
I quite enjoyed the process since I needed to properly extract a grammar from the docs.
By chance, some of it was already written.

Still, it took quite a while to get evrything properly working.

![For loop grammar](/projects/ewfmt/for-loop-grammar.png)
_The Chora docs grammar syntax for a `for-loop`_

I probably could have used a grammar converter tool to skip most of the work.
Compilers are well researched and this type of problem has been solved before.

However, like most of my projects, I wanted to get my hands dirty and try to [do it myself](#the-grammar).
I had time, so why not?

With the parser (and therefore lexer) added, the final steps to format a bit of code are as follows:

![Steps to format code](/projects/ewfmt/steps.svg)
_Steps to format code_

## Tech stack

This project is a pure [Go](https://go.dev/) CLI.<br/>
It was quick enough to parse strings and easy enough to work with.

## The grammar

Here is the final grammar used by `ewfmt` to generate an AST.

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
