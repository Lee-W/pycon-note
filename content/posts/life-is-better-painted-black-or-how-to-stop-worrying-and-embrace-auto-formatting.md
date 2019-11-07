Title: Life Is Better Painted Black, or: How to Stop Worrying and Embrace Auto-Formatting
Date: 2019-11-07 10:51
Category: PyCon UW 2019
Tags: code quality, automation
Slug: life-is-better-painted-black-or-how-to-stop-worrying-and-embrace-auto-formatting
Authors: Lee-W

## Speaker
Łukasz Langa

## Material
* [video](https://www.youtube.com/watch?v=esZLCuWs_2Y)

## Note
* Problem Statement
    * From Style Guide (PEP 8) to Code Style
        * Sol 1: Linters
            * It still has human labor involves.
        * Sol 2: Auto-formatting
            * Why people don't like auto-formatting? → too destructive
            * What we can learn from Go Community? → `Uniformity Trumps Perfection`
                * The good enough uniform format style is better than having a lot of different formatting that are locally better but is inconsistence
            * Auto-formatter in different languages
                * [gofmt](https://golang.org/cmd/gofmt/) for go
                * [Prettier](https://prettier.io/) for javascript
                * [black](https://github.com/psf/black) for Python
* Design and implementation
    * Goal
        * Opinionated
        * Deterministic
        * Consistent
        * Fast
* Tips for adoption
    * [git-hyper-blame](https://commondatastorage.googleapis.com/chrome-infra-docs/flat/depot_tools/docs/html/git-hyper-blame.html)
    * [pre-commit](https://pre-commit.com/)
