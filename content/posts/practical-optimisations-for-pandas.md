Title: Practical Optimisations for Pandas
Date: 2020-07-29 15:44
Category: EuroPython 2020
Tags: data, WIP
Slug: practical-optimisations-for-pandas
Authors: Lee-W

## Speaker
[Eyal Trabelsi](https://twitter.com/eyaltra)

## Material
* [slide](https://ep2020.europython.eu/media/conference/slides/8pANAid-practical-optimisations-for-pandas.html)

## Note
* use what you need
    * keep needed columns and rows only
* avoid loop
    * use vectorized operations
* type matters
    * supported types
        * `int64`
        * `float64`
        * `bool`
        * `objects`
        * `datetime64`
        * `timedelta`
        * Category
        * Sparse Types
        * Nullable Integer / Nullable boolean
* pandas usage
    * chunks
    * query
        * use [numexpr](https://github.com/pydata/numexpr)
            * e.g., `df[df.col == "val"]` → `df.query("col=='val'")`
    * use `concat` instead op `append`
    * groupby
        * filter early
        * custom functions are slow
    * merge
        * filter / aggregate early
        * join on index
* compiled code
    * Cython
    * Numba
* General Python techniques
    * cache
    * use intermediate variables
    * concurrency And parallelism
