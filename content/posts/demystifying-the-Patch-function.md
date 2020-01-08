Title: Demystifying the Patch Function
Date: 2020-01-08 11:00
Category: PyCon US 2018
Tags: test
Slug: demystifying-the-Patch-functionusing-python
Authors: Lee-W

## Speaker
Lisa Roach

## Material
[video](https://www.youtube.com/watch?v=ww1UsGZV8fQ)

## Note
* Patch: temporarily replace your target with `MagicMock()`
* Target: `'package.modeul.ClassName'`
* When should you mock?
    * When you don't want to actually call an object
        * e.g., database, system call
* What makes it so confusing?
    1. Identifying the target
    2. Multiple ways to call

### Patch
* Target must be importable
* **Patch where the object is used**

```python
# module.py
from db import db_write

# test_module.py
@patch("module.db_write")
```

* How to call Patch
    * Context Manager
    * Function / Class Decorators
    * Manual start/stop

### Spec
* The `spec` arguments: `spec`, `autospec`, `spec_set`
* Mock Problems that `spec` can solve
    1. Misspelled asserts look like attributes
    2. Mocked objects called incorrectly pass silently
* A MagicMock
    * `dir()`
        * `assert_any_call`
        * `assert_called`
        * `assert_called_once`
        * `assert_called_once_with`
        * `assert_called_with`
        * ...
        * `return_value`
        * `side_effect`
* A Specced MagicMock
    * `spec=True`
        * The attribute of patched object is now in MagicMock.
        * **We can now only get attribute that exists.**
        * It does not know the attribute of your attribute → `autospec=True`
            * However, `autospec` can be dangerous. It will run the code that will be triggered when introspected.
        * It doesn't know dynamicaly created attribute (including the ones in `__init__`) → manually create it
    * `spec_set=True` prevent you from setting attribute that does not exist

### Other arguments
* `new_callable`
    * Common Use case: Mocking property object
* `new`
* `create`
* `kwargs`
    * `return_value`
    * set attribute

### Readmore
* `patch.object`
* `patch.dict`
* `patch.multiple`
