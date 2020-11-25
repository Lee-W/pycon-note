Title: The Black Magic of Python Wheels
Date: 2020-03-26 11:16
Category: PyCon US 2019
Tags: packaging
Slug: the-black-magic-of-python-wheels
Authors: Lee-W

## Speaker
Elana Hashman

## Material
* [video](https://www.youtube.com/watch?v=02aAZ8u3wEQ)
* [slide](https://hashman.ca/pycon-2019/ehashman-pycon2019-slides.pdf)

## Note
* The Wheel
    * PEP 427
    * Follow PEP 376 (standard of distribution), PEP 426 (metadata)
    * 3 types of wheels
        * Pure wheels
            * Only Python code
            * May target specific version of Python
        * Universal wheels
            * Python 2/3 compatible pure wheels
        * Extension wheels
            * Extension: this library extends Python’s functionality with
non-Python code
    * Users now can install pre-built Python wheels.
        * How to ship compiled Python extensions on many operating systems
            * [manylinux](https://github.com/pypa/manylinux) (Symbol Versioning)
            * [auditwheel](https://github.com/pypa/auditwheel) (Dependency Bundling)
