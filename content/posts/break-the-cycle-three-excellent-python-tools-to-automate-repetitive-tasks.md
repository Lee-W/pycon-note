Title: Break the Cycle: Three excellent Python tools to automate repetitive tasks
Date: 2019-08-13 15:20
Category: PyCon US 2019
Tags: automation
Slug: break-the-cycle-three-excellent-python-tools-to-automate-repetitive-tasks
Authors: Lee-W

## Speaker
Thea Flowers

## Material
* [video](https://www.youtube.com/watch?v=-BHverY7IwU)

## Note
* goal
    * reduce toil (redundant boring stuff)
* tools
    * [tox](https://tox.readthedocs.io/en/latest/)
        * for automating python package testing
    * [nox](https://nox.thea.codes)
        * flexible test automation
        * the configuration file is python `noxfile.py`
    * [invoke](http://www.pyinvoke.org)
        * task execution tool
        * a tool framework
* invoke example

```python
from invoke import task


@task
def authors(ctx):
    """Print all the authors in this project"""

    result = ctx.run(
        "git log --pretty=format:\"%an <%ae>\"",
        encoding="utf-8",
        hide=True
    )

    authors = set(result.stdout.splitlines())
    authors = sorted(authors)

    for author in authors:
        print(author)


@task
def changelog(ctx, since):
    """Print the changelog since given git ref"""
    result = ctx.run(
        f"git log {since}..HEAD --format=%s",
        encoding="utf-8",
        hide=True
    )
    changes = result.stdout.splitlines()

    print(f"Changelog sine {since}:")
    for change in changes:
        print(f"- {change}")
```
