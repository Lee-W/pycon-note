Title: From Python script to Open Source Project
Date: 2020-03-12 11:44
Category: EuroPython 2019
Tags: code quality
Slug: from-python-script-to-open-source-project
Authors: Lee-W

## Speaker
[Michał Karzyński](http://michal.karzynski.pl/)

## Material
* [video](https://www.youtube.com/watch?v=25P5apB4XWM&feature=youtu.be)
* [article](http://michal.karzynski.pl/blog/2019/05/26/python-project-maturity-checklist/)

## Note
* Stages
    * Code Prep
    * Automate
    * CI
* Specs
    * PEP8
    * GNU/POSIX
    * PyPA
    * PyCQA
* pip install
    * pytest
    * mypy
    * docopt
    * setuptools
    * tox
    * virtualenv
    * wheel
    * black
    * pre-commit
    * flake8
* Services
    * GitHub
    * TravisCI
    * Coverall.io
    * Dependabot
    * codeclimate.com
    * codacy.com
    * mergify.io
    * pyup.io

### Check list

* CLI: [docopt](http://docopt.org/)
* Code directory layout
* Code Structure
    * meaningful name
    * single responsibility
    * up to 2 parameters
    * preferably no side-effects
    * write unit tests
* Define your main function
* Preparing your setup.py file
* Using your setup.py
    * `python setup.py sdist` (source package)
    * `python setup.py bdist_wheel` (binary wheel for distribution)
* Add `entry_points` to `setup.py`
    * `entry_points={"console_scripts": ["my-command = my_module.main:main"]}`
* Create a `requirements.txt`
    * `requirements.txt`
    * `requirements_dev.txt`
* Use Black to format you code
* Use pre-commit to run formatter
* Use flake8 to check your code
* Use MyPy for static type analysis
* Use tox to test all the things
* Write unit tests (pytest)
* Setup a Git repository
* Setup continuous integration
* Requirements updater
    * pyup
    * dependbot
* Test coverage checker
* Automated code review
* Automated PR merge
    * add rules
* Publish your project on PyPI (twine)
