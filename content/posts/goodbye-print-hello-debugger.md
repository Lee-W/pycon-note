Title: Goodbye Print, Hello Debugger!
Date: 2020-05-20 09:50
Category: PyCon US 2020
Tags: debugger
Slug: goodbye-print-hello-debugger
Authors: Lee-W

## Speaker
Nina Zakharenko

## Material
* [video](https://www.youtube.com/watch?v=5AYIe-3cD-s&feature=youtu.be)
* [post](https://speakerdeck.com/nnja/pycon-2020-goodbye-print-hello-debugger)

## Note
* cli debuggers
    * pdb
    * ipdb
        * `export PYTHONBREAKPOINT=ipdb.set_trace` (after Python 3.7)
* 5 most important commands
    * **l**[ist]
    * **n**[ext]: next line
    * **s**[tep]: into
    * **c**[ontinue]: util next breakpoint
    * **h**[help]
* Tip and Tricks
    * `.pdbrc`
* gotcha
    * Don't use breakpoints in production code
        * use `debug-statements` from [pre-commit-hooks](https://github.com/pre-commit/pre-commit-hooks)
