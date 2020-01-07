Title: Wily Python: Writing simpler and more maintainable Python
Date: 2020-01-07 15:30
Category: PyCon US 2019
Tags: code quality
Slug: wily-python-writing-simpler-and-more-maintainable-python
Authors: Lee-W

## Speaker
Anthony Shaw

## Material
* [video](https://www.youtube.com/watch?v=dqdsNoApJ80&t=3s)
* [slide](https://speakerdeck.com/pycon2019/anthony-shaw-wily-python-writing-simpler-and-more-maintainable-python)
* [wily](https://wily.readthedocs.io/en/latest/)

## Note
* Program Complexity
    * Cyclomatic Complexity
    * Halstead Metrics
    * Maintainability Index
* [radon](https://radon.readthedocs.io/en/latest/): tool to calculate program complexity
* [wily](https://wily.readthedocs.io/en/latest/): tool to track complexity change over time
    * `wily build <path>`
    * `wily report <path>`
    * `wily graph <path>`
* Take away
    * Make sure you have good behavioral test coverage
    * Refactor often
    * Divide and Conquer → Spread complexity
