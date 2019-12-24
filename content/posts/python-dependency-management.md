Title: Python Dependency Management
Date: 2019-12-24 11:35
Category: PyCon DE 2018
Tags: dependencies
Slug: python-dependency-management
Authors: Lee-W

## Speaker
Patrick Muehlbauer

## Material
* [video](https://www.youtube.com/watch?v=pA4XriRWVxQ)

## Note
* Problems
    * multiple tools for the whole workflow
    * no real dependency resolution in pip
    * multiple files needed for reproducible env (e.g., `requirements.txt`, `dev-requirements.txt`)
* Possible Solutions
    * reproducible env
        * Pipfile, Pipfile.lock
    * distutils/setuptools limitations
        * pyproject.toml
* Python dependency managers
    * [pipenv](https://pipenv.kennethreitz.org/en/latest/)
    * [pip-tools](https://www.google.com/search?q=pip+tools&oq=pip+tools&aqs=chrome..69i57j0l7.1384j0j1&sourceid=chrome&ie=UTF-8)
    * [poetry](https://python-poetry.org/)
    * [hatch](https://github.com/ofek/hatch)
    * [conda](https://docs.conda.io/en/latest/)
    * [Bento](https://cournape.github.io/Bento/)
    * [flit](https://github.com/takluyver/flit)
    * [pants/ pex](https://www.pantsbuild.org/pex.html)
* Which to choose?
    * It depends.
    * Questions to ask
        * Are building a library or an application?
        * Doest it fit my infra?

### pip-tools
* `pip-compile`: generates **requirements.txt** from **setup.py** or **requirements.in**
* `pip-sync`: dependency synchronization

### Pipenv
* wrapper around pip and virtual environments
* use **Pipfile**, **Pipfile.lock**
* for **applications** rather than **libraries**
* separate sections for dev and man dependencies

#### Poetry
* tool to manage dependencies, build and publish packasge
* use **pyproject.toml**, **poetry.lock**

### hatch
* simplifies development workflow
* warps multiple tools (`pip`, `virtualenv`, `twine`, `pytest`, `coverage.py`)
* **setup.py**, **requirements.txt**
