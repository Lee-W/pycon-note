Title: Best practices for production-ready Docker packaging
Date: 2020-11-25 16:00
Category: EuroPython 2020
Tags: container
Slug: best-practices-for-production-ready-docker-packaging
Authors: Lee-W

## Speaker
Itamar Turner-Trauring

## Material
* [video](https://www.youtube.com/watch?v=H0UPw-ILiz4)
* [slide](https://pythonspeed.com/europython2020/slides/#1)
* [resources](https://pythonspeed.com/europython2020)

## Note
### 1. Get something working.
### 2. Security.
* Don't run as root

```dockerfile
RUN useradd --create-home appuser
USER appuser
WORKDIR /home/appuser
```

### 3. Running in CI.

```sh
GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
docker build -t "yourimage:$GIT_BRANCH" .
docker push "yourimage:$GIT_BRANCH"
```

### 4. Make images easy to identify and debug.
* Tracebacks on crashes in C code

```dockerfile
ENV PYTHONFAULTHANDLER=1
```

* Pre-install useful debugging tools

### 5. Improved operational correctness.
* Python compiles source code .pyc for faster startup.

```dockerfile
# Compile installed code:
RUN python -c "import compileall; compileall.compile_path(maxlevels=10)"
# Compile code in a directory:
RUN python -m compileall yourpackage/
```

* Health checks.

### 6. Reproducible builds.
### 7. Faster builds.
* Don't use Alpine Linux
* COPY in files only when needed
### 8. Smaller images.

```dockerfile
RUN pip install --no-cache-dir -r requirements.txt
```

* Add files to .dockerignore.
