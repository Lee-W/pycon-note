Title: Docker and Python: making them play nicely and securely for Data Science and ML
Date: 2020-05-15 16:00
Category: PyCon US 2020
Tags: data, container
Slug: docker-and-python-making-them-play-nicely-and-securely-for-data-science-and-ml
Authors: Lee-W

## Speaker
Tania Allard

## Material
* [video](https://www.youtube.com/watch?v=Jq68axbKIbg&feature=youtu.be)
* [slide](https://speakerdeck.com/trallard/docker-and-python-making-them-play-nicely-and-securely-for-data-science-and-machine-learning)

## Note

* common pain points in DS and ML
    * complex setup / deps
    * reliance on data / database
    * fast evolving projects
    * are containers secure enough?
* how is it different from web apps?
   * not every deliverable is an app or a model
   * relies on data
   * Mixture of wheels and compiled packages
   * Security access levels - for data and software
   * Mixture of stakeholders:
       * data scientists
       * software engineers
       * ML engineers

* best practices
    * Split complex `RUN` statements and sort them
    * Prefer `COPY` to add files
    * install only necessary packages
    * explicitly ignore files
        * documentations
        * never add data
        * secrets
* cookiecutter template
    * [docker-science/cookiecutter-docker-science](https://github.com/docker-science/cookiecutter-docker-science)

### Top Tips
1. Rebuild your images frequently - get security updates for system packages
2. Never work as root / minimize the privileges
    * run as non-root user
    * minimize capability
3. You do not want to use Alpine Linux (go for buster, stretch or the Jupyter stack)
4. pin / version EVERYTHING (use pip-tools, conda, poetry or pipenv)
5. Leverage build cache
6. Use one Dockerfile per project
7. Use multi-stage builds
    * fetch and manage secrets in an intermediate layer
    * creates smaller image
8. Make your images identifiable (test, production, R&D) - also be careful when accessing databases and using ENV variables / build variables
    * Provide context with `LABELS`
9. Do not reinvent the wheel! Use repo2docker
10. Automate - no need to build and push manually
11. Use a linter
