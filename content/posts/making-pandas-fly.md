Title: Making Pandas Fly
Date: 2020-07-31 12:00
Category: EuroPython 2020
Tags: data, WIP
Slug: making-pandas-fly
Authors: Lee-W

[TOC]

## Speaker
[Ian Ozsvald](https://ianozsvald.com/)

## Material
* [slide](https://ep2020.europython.eu/media/conference/slides/A7TniMV-making-pandas-fly.pdf)

## Note
### pandas
#### saving RAM
* Stings are expensive and slow → [Categorical](https://pandas.pydata.org/pandas-docs/stable/user_guide/categorical.html)
    * e.g., `df.CompanyCategory.astype('category')`
    * cheap and faster
* `float64` is default and a bit expensive
    * `float32` "half-price" and a bit faster
* [dtype_diet](https://github.com/ianozsvald/dtype_diet/)

#### drop to numpy if you know you can
* e.g., `df['age_years'].sum()` is much slower than `df['age_years'].values.sum()`
    * bypass a lots of method searching

#### install optional pandas dependencies
* [numexpr](https://github.com/pydata/numexpr)
* [bottleneck](https://github.com/pydata/bottleneck)

#### mistakes slow us down
* try nullable Int64, boolean, forthcoming Float64
* [ianozsvald/note_to_self](https://github.com/ianozsvald/notes_to_self)

### Other than pandas
* compile to Numba
* Dask for multi-core
    * make plain-python code multi-core
* [Vaex](https://github.com/vaexio/vaex)
* [Modin](https://github.com/modin-project/modin)
