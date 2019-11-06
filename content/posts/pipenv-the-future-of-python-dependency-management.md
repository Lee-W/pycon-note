Title: Pipenv: The Future of Python Dependency Management
Date: 2019-10-02 16:20
Category: PyCon JP 2019
Tags: dependencies
Slug: pipenv-the-future-of-python-dependency-management
Authors: Lee-W

## Material
* [video](https://www.youtube.com/watch?v=GBQAKldqgZs)

## Note
* Packaging History
    1. unzip and install from `setup.py`
    2. `easy_install`
    3. `pip`, `virtualenv`, `requirements.txt`
* Python has no lock files!
* [Pipenv](https://pipenv-fork.readthedocs.io/en/latest/)
    * Pipfile
        * TOML: easy to read/ write manually
        * Two groups: `[package]`, `[dev-package]`
    * Pipfile.lock
        * JSON: machine readible
        * transitive dependencies pinned with all acceptable hashes for each releases
        * Two groups: `default`, `develop`
    * Install packages concurrently
    * Support multiple source
    * `pipenv --venv`: show you the venv created
    * `pipenv --graph`: show dependency tree
    * `pipenv check`: check the vulnerability of packages
        * e.g., `pipenv install django==1.4.2`
    * `pipenv install --deploy`
    * `pipenv install --ignore-pipfile`
    * `pipenv --python <version>`: automatically install certain python version if you have [pyenv](https://github.com/pyenv/pyenv) installed
    * `pipenv lock -r`: generate `requirements.txt`
    * We should put the lock file on source control.
    * `pipenv uninstall` uninstall only the package. `pipenv sync` is needed to uninstall all its transitive dependencies.
    * Pipenv finds created venv through path of the directory. Thus, if you move the directory, you'll have to create a new virtual environment.
    * Pipenv won't be a replacement for `setup.py`
        * Pipenv is for application.
        * `setup.py` is for lib.
