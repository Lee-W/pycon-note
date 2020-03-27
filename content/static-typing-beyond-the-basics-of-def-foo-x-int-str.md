Title: Static typing: beyond the basics of def foo(x: int) -str:
Date: 2020-03-27 19:08
Category: EuroPython 2019
Tags: typing
Slug: static-typing-beyond-the-basics-of-def-foo-x-int-str
Authors: Lee-W

## Speaker
Vita Smid

## Material
* [video](https://www.youtube.com/watch?v=UQo-ebJk4a4&feature=youtu.be)
* [slide](https://qntln.github.io/europython2019/#/)

## Note

### 1. Strategy: how to approach a large code base
* try to start with strict configuration

```ini
# Ensure full coverage
disallow_untyped_calls = True
disallow_untyped_defs = True
disallow_imcomplete_defs = True
disallow_untyped_decorators = True

# Restrict dynamic typing
disallow_any_generics = True
disallow_subclassing_any = True
warn_return_any = True

# Know exactly what you're doing
warn_redundant_casts = True
warn_unused_ignore = True
warn_unused_configs = True

# imports
ignore_missing_imports = True
follow_imports = silent  # do not use 'follow_import = skip'
```

* gradual coverage
    * opt-in: only explicitly listed modules are checked
* tests
    * use `# type: ignore` on mocks and monkey patching
    * don't give up on test code completely

```ini
[mypy-*.tests.*]
disallow_untyped_decorators = True # pytest decorators are untyped.
disallow_untyped_defs = False      # Properly typing *all* fixtures
disallow_incomplete_defs = False   # and tests is hard and noisy.
```

* your own pakcage

```python
setup(
  ...,
  package_data = {
    'your_package': ['py.typed'],
  },
  ...,
)
```

* 3rd party packages
    * explicitly ignore those are not typed

```ini
[mypy-"package.to.ignore"]
ignore_missing_imports = True
follow_imports = silent
```

### 2. Tactics: Dealing with complex code
* Generics and type varaiables
    * `TypeVar` with restriction (e.g., `AlgebraType = TypeVar('AlgebraType', float, Decimal)`)
* nominal typing v.s. structural typing
    * Structural typing: describe capabilities, not ancestry
* Defining you own types
    * `NewType`
* write your own mypy plugin
    * e.g., [ github.com/qntln/fastenum/fastenum/mypy_plugin.py](https://github.com/qntln/fastenum/blob/master/fastenum/mypy_plugin.py)
* overloading functions
