Title: Exceptional Exceptions
Date: 2020-07-08 09:20
Category: EuroPython 2019
Tags: core
Slug: exceptional-exceptions
Authors: Lee-W

## Speaker
Mario Corchero

## Material
[video](https://www.youtube.com/watch?v=ac5b8LyHJcQ&feature=youtu.be)

## Note
* Logging exception
    * `logging.exception("")`
    * `logging.info("", exc_info=True)`
* Exception techniques
    * Reraise
    * Chaining exception
        * `raise Exception() from e`
    * Eliding previous exception
        * `raise Exception() from None`
    * False friends: `NotImpelmented`
        * Use `raise NotImplementedError`
* Exception attributes
    * `args`
    * `__traceback__`
* New magic in 3.8
    * `sys.unraisablehook`
    * `threading.excepthook`
