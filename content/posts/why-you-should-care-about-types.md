Title: Why you should care about types: How Python typing helped my team scale
Date: 2019-08-13 15:20
Category: PyCon AU 2018
Tags: type annotation
Slug: why-you-should-care-about-types
Authors: Lee-W

## Speaker
Luka Sterbic

## Material
* [video](https://2018.pycon-au.org/talks/45224-why-you-should-care-about-types-how-python-typing-helped-my-team-scale/)

## Note

### Are Python types Pythonic?

```python
import this

>>> Explicit is better than implicit.

>>> Readability counts

>>> In the face of ambiguity, refuse the temptation to guess.
```

If nothing else, because Guido said so 😆

### Type 101
* Collection, Union, Optional, Type

```python
from typing import Type, TypeVar

class BaseClass:
    pass

class DerivedClass(BaseClass):
    pass

T = TypeVar("T", bound=BaseClass)

def factory(clazz: Type[T]) -> T:
    return claszz()
```

### Tool
[GitHub - Instagram/MonkeyType: A system for Python that generates static type annotations by collecting runtime types](https://github.com/Instagram/MonkeyType)
