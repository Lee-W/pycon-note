Title: Automating Code Quality
Date: 2019-09-30 18:55
Category: PyCon US 2018
Tags: code quality, automation
Slug: automating-code-quality
Authors: Lee-W

## Materials
* [video](https://www.youtube.com/watch?v=G1lDk_WKXvY)

## Note
* example
    * [aws/chalice](https://github.com/aws/chalice)

* Steps to automation
    1. tools
        * flake8
            * pycodestyle → style
            * pyflakes → bug
            * mccabe → complexity
                * `flake8 --max-complexity ...`
        * pylint
            * similar but stricter and more optional than flake8
        * coverage
        * other tools: `mypy`, `doc8`, `pydocstyle`
    2. automation on local env
        * `Makefile`
        * `requirements-dev.txt`
    3. atuomation on prod env
        * `Makefile`
        * `requirements-prod.txt`

![pylint-vs-flake8]({static}/images/post-images/automating-code-quality/15698391534086.jpg)

* Best practices
    1. Always improve quality check
    2. Avoid compromising existing quality checks
    3. Be aware automated quality checks does not guarantee code quality
