Title: Modern development environments for Pythonistas
Date: 2019-10-02 16:20
Category: PyCon JP 2019
Tags: best practices
Slug: modern-development-environments-for-pythonistas
Authors: Lee-W

## Material
* [video](https://www.youtube.com/watch?v=d3cj4f63u-A)

## Note
* Speaker
    * Dustin Ingram ([twitter](https://twitter.com/di_codes))
        * Organize PyTexas
        * PyPi contributor

* Topics
    * dev, test env
    * dependency workflows
    * linting & autoformatting
    * go to prod

* Focus: anything that's not code and will be check into code base

## dev, test environment

> Your development environment.
> "But it works on my machine"
>
> You laptop is not production.

* Problem: `virtualenv` only isolate Python. Platform-level stuff are still shared.

* Fully isolate a reproducible environments
    * containerization (e.g., docker)
        * Dockerfile
        * docker-compose

## A modern workflow for dependencies
* Problems: When install a new package and it depends on newer version of old dependency, it might upgrade unnoticeably.

* Don't `pip freeze > requirements.txt` anymore
    * Bad
        * Get everything from your system
    * Good
        * Version pinning
        * Managing sub-dependencies

### pip-tools
* [pip-tools](https://github.com/jazzband/pip-tools/)

* Pin and compile the dependencies and sub-dependencies
    ```sh
    pip-compile requirements.in
    ```
* Pinning and compiling only get 90%
    * **Artifact hashing**
        * `pip compile --generate-hashes requirements.in`
        * `pip install --require-hashes -r requirements.txt`
* Now our deps are 100% frozen

### When / How to upgrade dependencies
* When: early and often
* How: automated dependency services → scan you repo and see your deps
    * [pyup.io](https://pyup.io)
    * [dependabot](https://dependabot.com)

## Linting and autoformatting
Use [black](https://github.com/ambv/black)

## Taking your env to prod
Through services that supports deployment through container

## Conclusion
1. Use docker
2. Use docker-compose
3. Use `pip-compile` from `pip-tools`
4. Use [dependabot](https://dependabot.com) / [pyup.io](https://pyup.io)
 for auto-upgrade deps
5. Use [dependabot](https://dependabot.com)
6. Deploy your docker container to prod

## Q & A
* Q: pipenv, poetry or pip-tools
    * A: Personal perference
