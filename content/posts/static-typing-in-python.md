Title: Static Typing in Python
Date: 2020-05-06 12:55
Category: PyCon US 2020
Tags: typing
Slug: static-typing-in-python
Authors: Lee-W

## Speaker
Dustin Ingram

## Material
* [video](https://www.youtube.com/watch?v=ST33zDM9vOE&feature=youtu.be)

## Note

### PEPs
* [PEP 3107](https://www.python.org/dev/peps/pep-3107/)
* [PEP 483](https://www.python.org/dev/peps/pep-0483/)
* [PEP 484](https://www.python.org/dev/peps/pep-0484/)

### Types
* Gradual typing
    * not do it all at once
* Special type consturcts
    * Existing types
        * e.g., `int`, `float`, `str`, `NoneType`
    * New types: (`from typing import ...`)
        * `Any`
        * `Union[t1, t2, ...]`
        * `Optional[t1]`
        * `Tuple[t1, t2, ...]`
        * `Callable[[t1, t2, ...], tr]`
* Container types
    * e.g., `List[int]`
* Generic types
    * e.g., `from typing import Iterable`
* Type aliases
    * e.g., `Number = Union[int, float, complex, Decimal]`

### When you shouldn't use static typing
* basically never
* not a replacement for unit tests

### When you should use static typing
* basically always
* especially
    * if your project is for public consumption
    * before migrating or refactoring

![when-you-will-migrate]({static}/images/post-images/static-typing-in-python/when-you-will-migrate.jpg)

### How
1. Migrate to Python >= 3.6 [Optional]
2. Install a typechecker locally
3. Start optionally typing your codebase
4. Run a typecheker with your linting and CI
5. Convince all your coworkers to join you
