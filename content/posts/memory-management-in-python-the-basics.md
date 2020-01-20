Title: Memory Management in Python - The Basics
Date: 2020-01-20 18:20
Category: PyCon US 2016
Tags: memory management
Slug: memory-management-in-python-the-basics
Authors: Lee-W

## Speaker
Nina Zakharenko

## Material
* [video](https://www.youtube.com/watch?v=F6u5rhUQ6dU)
* [slide](https://speakerdeck.com/pycon2016/nina-zakharenko-memory-management-in-python-the-basics)

## Note
* How does Python store object in memory
    * name -> reference -> object
* Python Object Types
    * Simple (e.g., numbers, strings)
    * Containers (dict, list, user defined-class)
* Every Python object holds
    * type
    * value
    * ref count
* Reference Count
    * Decrease ref count
        * `del`
            * remove the name as a reference instead of delete the object
            * decrease the reference count by 1
        * going out of scope
* Global Namespace
    * never go out of scope → refcount never reach 0
    * **Avoid putting large or complex objects in the global namespace**
* Common Garbage Collection Techniques
    * Reference Counting
        * Concept
            * add / remove ref
            * delete object if refcount reaches 0
        * The good
            * Easy to implement
            * When refcount is 0 objects are immediately delete.
        * The bad
            * space overhead
            * execution overhead
        * The ugly
            * not thread safe
            * doesn't detect cyclical ref
    * Tracing (mark and sweep)
* What algorithm does Python use?
    * Reference Counting + Generational
* `__slot__`
    * Attribute Declarations
    * When to use
        * If we're going to create lots of instances
        * If we know the properties in advance
