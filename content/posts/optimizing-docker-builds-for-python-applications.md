Title: Optimizing Docker builds for Python applications
Date: 2020-03-06 13:15
Category: EuroPython 2019
Tags: container
Slug: optimizing-docker-builds-for-python-applications
Authors: Lee-W

## Speaker
Dmitry Figol

## Material
* [video](https://www.youtube.com/watch?v=eRzMJuwuYpU)
* [slide](https://slides.com/dmfigol/optimizing-docker-builds-for-python-applications)

## Note

* Docker Concept

![-w817](/images/post-images/optimizing-docker-builds-for-python-applications/docker-concept.jpg)

* Optimize Goal
    1. Reducing image size
    2. Reducing build time
* Priority
    * Fast build during development → Use slim-stretch
    * Small size during production → Use alpine

### build deps are only needed when compiling but not runtimeImprovement
* Use specific `COPY` statement instead of `COPY ..`
* `.dockerignore`

### delete build deps doesn't shrink image size
* Docker Layer
    * Instructions create read-only layers
    * A new layer can't be smaller than the previous layer
    * Layers are cached and can be re-used for subsequent builds
    * Layers introduce some overhead
* Tips
    * Combine multiple **RUN** statements into one
    * delete files in the same layer (instruction) where they were added
    * arrangement statement from the least changing to the most changing (system-level -> tools -> Python deps -> source code)
    * don't save deps to cache
        * pip: `--no-cache-dir`
        * apk: `--no-cache`

### complicate Dockerfile and no cache during build
* Docker multi-stage
    * Build an intermediate image with all build deps and install your app
    * Copy the result to a fresh image

### Other Tips
* Bind mount source code instead of COPY in local dev env
* `PYTHONUNBUFFERED=1` -> print to stdout without buffering
* `PYTHONDONTWRITEBYTECODE=1` -> no `*.pyc` files
