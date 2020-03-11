Title: Zen of Python Dependency Management ... and package release automation
Date: 2020-03-11 09:52
Category: EuroPython 2019
Tags: dependencies
Slug: zen-of-python-dependency-management
Authors: Lee-W

## Speaker
Justin Mayer

## Material
* [video](https://www.youtube.com/watch?v=asL0dbN6pAY&feature=youtu.be)
* [slide](https://justinmayer.com/talks/dependency-management-release-automation/assets/player/KeynoteDHTMLPlayer.html#0)

## Note
* Why is it important?
    * reproducible builds
* PEP 518: pyproject.toml

e.g.,

```toml
[build-system]
requires = ["setuptools", "wheel"]
```

```toml
[build-system]
requires = ["poetry>=0.12"]
build-backend = "poetry.mansonry.api"
```

```tool
[tool.poerty.dependencies]
python = "^3.7"
```

### Dependency Management Tools
* Release Early and Often

* tools
    * pip-tools
    * pipenv
    * poetry
    * DepHell

## Release Management
* Auto-Publish Releases Upon PR Merge
* [AutoPub](https://github.com/autopub/autopub)
