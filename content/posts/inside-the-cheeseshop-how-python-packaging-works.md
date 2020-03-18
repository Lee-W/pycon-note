Title: Inside the Cheeseshop: How Python Packaging Works
Date: 2020-03-18 17:52
Category: PyCon US 2018
Tags: packaging
Slug: inside-the-cheeseshop-how-python-packaging-works
Authors: Lee-W

## Speaker
[Dustin Ingram](https://twitter.com/di_codes)

## Material
* [video](https://www.youtube.com/watch?v=AQsZsgJ30AE)
* [slide](https://dustingram.com/talks/2018/10/23/inside-the-cheeseshop/)

## Note

* History of packaging
    * `distuils`
        * `sdist` -> source distribution
        * `bdist` -> build distribution
    * `PyPI` (Pie-P-I)
    * `setuptools`
    * `easy_intall`
    * egg
    * ~~pyinstall~~ `pip` (a.k.a. python install package)
    * requirements.txt
    * PyPI hosts distribution (PEP 427)
    * ~~egg~~ -> wheel (from wheel cheese)
        * wheel has specification
        * no one reinvents the wheel
    * `twine`
* Problem Nowadays
    * Packaging is hard
        * [Python Packaging User Guide](https://packaging.python.org/)
        * [pypa/sampleproject](https://github.com/pypa/sampleproject)
    * need more than Python
        * conda
    * reproducible environement
        * `pipenv`
    * arbitrary code in `setup.py`
        * PEP 517 / 518
        * pyproject.toml
