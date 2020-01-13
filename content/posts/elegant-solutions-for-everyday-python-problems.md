Title: Elegant Solutions For Everyday Python Problems
Date: 2020-01-13 10:16
Category: PyCon US 2018
Tags: best practices
Slug: elegant-solutions-for-everyday-python-problems
Authors: Lee-W

## Speaker
Nina Zaharenko (@nnja)

## Material
* [video](https://www.youtube.com/watch?v=WiQqqB9MlkA&t=1474s)
* [slide](https://www.slideshare.net/nnja/elegant-solutions-for-everyday-python-problems-pycon-2018)

## Note

### Magic methods: `__func__`
* Custom iterator
    * `__iter__`: Make classes `iterable`
        * returns an iterator
    * `__next__`: Make class `iterator`
        * raises `StopIteration` when there is no more items to return
    * Use a generator when your iterator doesn't need to maintain a lot of state
* Method magic
    * `getattr(object, name, default)`
        * call function by `name` string
        * use case
            * cli tool with dynamic commands
    * `functool.partial(func, *args, **kwargs)`

### Context manager
* perform an action before and/or after an operation
* use case
    * close a resource (e.g., file, network, database)
    * perform clean up before/after function call
    * **feature flags: turn feature of your application on and off easily**
        * A/B Testing
        * Rolling Releases
* `from contextlib import contextmanager`

### Decorators
* Wrap a function in another function to do something
    * before the call
    * after the call
    * with provided arguments
* Problem: lost context using a decorator
    * Solution: `from contextlib import wraps`
* Use case
    * logging
    * timing
    * validation
    * rate limiting
    * mocking/patching

### ConextDecorator
* By use it, you can write classes that can be used both as decorator and context managers
    * It's included if implemented through `from contextlib import contextmanger`.
