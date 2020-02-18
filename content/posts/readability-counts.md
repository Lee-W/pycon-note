Title: Readability Counts
Date: 2020-02-18 17:20
Category: PyCon US 2017
Tags: Code Quality
Slug: readbility-counts
Authors: Lee-W

## Speaker
[Trey Hunner](https://twitter.com/treyhunner)

## Material
* [video](https://www.youtube.com/watch?v=knMg6G9_XCg)
* [slide](https://treyhunner.com/readability-counts/#/)

## Note
* PEP 8
    * Read it every 6 month
    * It's not your project style guide
    * It's just a start point
* Naming things
    * Don't be afraid of using long variable names
    * Use tuple unpacking in for loop
    * Optimize for accuracy instead of short variable names
    * Instead of commenting operation, consider using descriptive variables.
* Programming idioms
    * duplicated code around other code → context manager → `contextlib`
    * list from list → list comprehension
    * Operator Overloading, Abstract Base Classes
    * Functions with shared data → class
* Readability checklist
    1. Can I modify line breaks to improve clarity?
    2. Can I create a variable name for unnamed code?
    3. Can I add a comment to improve clarity?
    4. Can I turn a comment into a better variable name?
    5. Can I use a more specific programming construct?
    6. Have I stated detailed preferences in a style guide?
