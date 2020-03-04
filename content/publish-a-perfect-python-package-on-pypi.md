Title: Publish a (Perfect) Python Package on PyPI
Date: 2020-03-04 13:08
Category: EuroPython 2019
Tags: Package
Slug: publish-a-perfetc-python-package-on-pypi
Authors: Lee-W

[TOC]

## Speaker
Mark Smith

## Material
* [video](https://www.youtube.com/watch?v=-WDV0-OB4fE&feature=youtu.be)
* [resource](https://github.com/judy2k/publishing_python_packages_talk)

## Note

### Basic Usage
* minimal `setup.py`

```python
from setuptools import setup

setup(
    name="helloworld",
    version="0.0.1",
    description="Say hello!",
    py_modules=["helloworld"],
    package_dir={'': 'src'},
)
```

* build wheel

```sh
python setup.py bdist_wheel
```

* test installation locally
    * Links to the code instead of add it to `site-packages`

```sh
pip install -e .
```

### Documentation
* Compare ReStructured Text and markdown

| ReStructured Text| Markdown |
| --- | --- |
| Pythonic | More Widespread |
| Powerful | Simply |
| [Sphinx](https://www.sphinx-doc.org/en/master/) | [mkdocs](https://www.mkdocs.org/) |

* keys added to `setup.py`
    * classifiers
    * long_description
    * long_description_content_type="text/markdown"

### Dependencies

| install_required | extras_require |
| --- | --- |
| production dependencies | optional requirements |
| relaxed versions (users can install without conflicts with other packages) | specific versions (developers can have identical develop environment) |

* keys added to `setup.py`
    * install_requires
    * extras_require
        * dev
* install package with extras_require

```sh
pip install -e .[dev]
```

### Source Distribution

```sh
python setup.py sdist
```

* keys added to `setup.py`
    * url
    * author
    * author_email
* Ideally, everything should be included for source distribution
    * Use [check-manifest](https://github.com/mgedmin/check-manifest)
        * `check-manifest --create`

## Publish

```sh
python setup.py bdist_wheel sdist
twine upload dist/*
```

## Other Stuffs to add
* Must Do
    * [tox](https://tox.readthedocs.io/en/latest/)
    * Continuous Integration
* Nice to have
    * badges
        * code coverage
        * quality metrics
    * test on macOS & windows
    * more document
        * contributors section
        * Code of Conduct

## Don't do any thing mention above
* **Use cookiecutter**
    * [cookiecutter-pylibrary](https://github.com/ionelmc/cookiecutter-pylibrary)

## Things are changing
* move metadata from `setup.py` to `setup.cfg`
* move to `pyprojec.toml`
    * [poetry](https://python-poetry.org/)
    * [flit](https://github.com/takluyver/flit)
    * [hatch](https://github.com/ofek/hatch)
