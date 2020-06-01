Title: Maintaining a Python Project When It’s Not Your Job
Date: 2020-02-06 19:25
Category: PyCon US 2019
Tags: community
Slug: maintaining-a-python-project-when-It-s-not-your-job
Authors: Lee-W

## Speaker
Hynek Schlawack

## Material
* [video](https://www.youtube.com/watch?v=9G2s1TN9QQY)
* [slide](https://speakerdeck.com/hynek/maintaining-a-python-project-when-its-not-your-job)
* [article (highly recommend)](https://hynek.me/talks/python-foss/)

## Note

### Act 1: Development
* `.github/CONTRIBUTING.rst`
    * [Example - attrs/.github/CONTRIBUTING.rst](https://github.com/python-attrs/attrs/blob/master/.github/CONTRIBUTING.rst)
    * Encouragement → Everyone can contribute.
    * Workflow outline
    * Code, test, docs and changelog standards
    * Local development environment setup
* `.github/CODE_OF_CONDUCT.rst`
    * Expectation in behavior
    * [GitHub - Adding a code of conduct to your project](https://help.github.com/en/github/building-a-strong-community/adding-a-code-of-conduct-to-your-project)
* Run test through [tox](https://github.com/tox-dev/tox): test on different environment
    * make sure that the user runs exactly the same test commands as the CI
* Having a high test coverage
* Checkers
    * [flake8](https://pypi.org/project/flake8/)
    * [mypy](http://mypy-lang.org/)
    * [check-manifest](https://pypi.org/project/check-manifest/)
    * [twine](https://pypi.org/project/twine/): check pypi long description
        * [Example setup](https://github.com/python-attrs/attrs/blob/de84609505845edc0e05c2ff918a44085816e35e/tox.ini#L63-L71)
* Autoformatters
    * [black](https://github.com/psf/black)
    * [isort](https://github.com/timothycrosley/isort)
        * [Example setup](https://github.com/python-attrs/attrs/blob/6fa28b3b074a935038dd701382eb67f0e953d097/setup.cfg#L20-L31)
* [pre-commit](https://pre-commit.com/)
    * [Example setup](https://github.com/python-attrs/attrs/blob/master/.pre-commit-config.yaml)
* Documentation
    * [Sphinx](https://www.sphinx-doc.org)
        * slice and dice your README in your Sphinx docs to avoid information duplication  

          ```rst
          .. include:: ../README.rst
            :start-after: string-1
            :end-before: string-2
          ```
    * [Read the Docs](https://readthedocs.org/)

### Act 2: Pull Request
* `.github/PULL_REQUEST_TEMPLATE.md`
    * checklist
    * [Example](https://github.com/python-attrs/attrs/blob/master/.github/PULL_REQUEST_TEMPLATE.md)
* Continuous Integration
* Community
    * Stack Overflow
        * async community
        * searchable
* Maintainer
    * Say thank you to your contributors

### Act 3: Release
* Use **ISO 8601** (e.g., `1986-03-19`) for datetime
* [test.pypi](https://test.pypi.org/)
* How to maintain release information?
    * attrs example
        * [setup.py](https://github.com/python-attrs/attrs/blob/master/setup.py)
        * [__init__.py](https://github.com/python-attrs/attrs/blob/6fa28b3b074a935038dd701382eb67f0e953d097/src/attr/__init__.py#L21-L33)
