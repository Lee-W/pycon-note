Title: The Hidden Power of the Python Runtime
Date: 2020-07-09 11:30
Category: PyCon US 2020
Tags: core
Slug: the-hidden-power-of-the-python-runtime
Authors: Lee-W

## Speaker
Elizaveta Shashkova

## Material
* [video](https://www.youtube.com/watch?v=yr6E7FwK_Hw&feature=youtu.be)
* [slide](https://speakerdeck.com/elizaveta239/the-hidden-power-of-the-python-runtime)
* [sample code](https://github.com/Elizaveta239/PyRuntimeTricks)

## Note
* Stack Frame
    * `sys._getframe([depth])`
        * frame object
            * `f_locals`
            * `f_globals`
            * `f_lineno`
            * `f_trace`: tracing function
            * `f_back`: previous frame
            * `f_code`: code object
                * `co_filename`
                * `co_name`: name of function or module
                * `co_varnames`
                * `co_code`: compiled bytecode
                    * disassemble with `dis.dis()`
* Development Tools:
    * pytest
    * debugger
    * code coverage
    * typing information
    * fault handler
