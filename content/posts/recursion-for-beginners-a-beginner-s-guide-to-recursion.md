Title: Recursion for Beginners: A Beginner's Guide to Recursion
Date: 2020-02-20 12:00
Category: NorthBay Python 2018
Tags: algorithm
Slug: recursion-for-beginners-a-beginner-s-guide-to-recursion
Authors: Lee-W

## Speaker
Al Sweigart

## Material
* [video](https://www.youtube.com/watch?v=AfBqVVKg4GE&list=WL&index=2)
* [slide](https://docs.google.com/presentation/d/149zzXcV_34DIZ50OJIfau1L0GDpMvc9VDk2szPVELsI/edit#slide=id.p)

## Note
* To understand recursion, first understand stacks.
* Recursive function
    * **at least one base case**
    * recursive case
* When should we use recursion? (both requirements needed)
    * tree-like structure
    * **backtracking**
* Tail Call Optimization/Elimination
    * It's a compiler trick
        * But CPython doesn't implement and never will (*"If you want a short answer, it's simply unpythonic" - Guido*)
* Memoization (Cache)
    * `functools.lru_cache` (least recently used)
