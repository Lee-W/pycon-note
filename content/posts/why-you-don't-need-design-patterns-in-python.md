Title: Why you don't need design patterns in Python?
Date: 2020-10-01 12:03
Category: EuroPython 2017
Tags: design pattern
Slug: why-you-don't-need-design-patterns-in-python
Authors: Lee-W

## Speaker
Sebastian Buczyński

## Material
* [video](https://www.youtube.com/watch?v=G5OeYHCJuv0)
* [slide](https://ep2017.europython.eu/media/conference/slides/why-you-dont-need-design-patterns-in-python.pdf)

## Note
As the speaker stated in youtube comments, **"Why you don't need SOME design patterns in Python?"** could be a better title for this talk.

* Singleton Pattern
    * using a module may be a better solution
* Facade Pattern
    * Helpful to organize code, no need for a class
* Command Pattern (object oriented callback)
    * just use plain function
* Visitor Pattern
    * `getattr` or `from functools import singledispatch`
* Decorator Pattern
    * Decorator pattern is not `@decorator`
    * `def __getattr__(self)`
