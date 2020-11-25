Title: Python Performance: Past, Present and Future
Date: 2020-07-29 10:45
Category: EuroPython 2019
Tags: performance
Slug: python-performance-past-present-and-future
Authors: Lee-W

## Speaker
Victor Stinner

## Material
* [video](https://www.youtube.com/watch?v=TXRPCZ7Nmh4&feature=youtu.be)
* [slide](https://github.com/vstinner/talks/blob/master/2019-EuroPython/python_performance.pdf)

## Note
### Present
* [PyPy](https://www.pypy.org/)
    * fully compatible with CPython
    * issues
        * slower when involving C extension
        * larger memory footprint
        * longer startup time
* multiprocessing
    * Work around the GIL limitation
    * Shared memory (Python 3.8) avoids memory copies between workers
* [Cython](https://cython.org/)
    * Easy way to write C extension
    * Support multiple Python versions
* Numba
    * JIT compiler tranlating subset of Python and NumPy
    * Simplified Threading (release GIL)
* Summary
    * PyPy doesn't require any code change
    * multiprocessing scales
    * Use Cython, don't use C API
    * Numba makes numpy faster

## Future
* [New PyHandle C API](https://pythoncapi.readthedocs.io/pyhandle.html)
    * CPython
        * on top of the current C API
    * PyPy
        * More efficient that the current C API
    * Cython
        * no need to change your code, Cython will handle it
* Reference counting
* Gilectomy
* Tracing CG
* Subinterpreters (WIP)
    * [PEP 545](https://www.python.org/dev/peps/pep-0545/)
    * GIL -> on lock per interpreter
    * Expectation
        * lower memory footprint
        * faster locks
        * limitation: python object cannot be shared between interpreters
