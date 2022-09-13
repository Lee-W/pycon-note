Title: Distributing your pandas ETL job using Ray and Modin
Date: 2022-09-12 11:50
Category: PyCon APAC 2022
Tags: data, pipeline, distributed
Slug: distributing-your-pandas-ETL-job-using-ray-and-modin
Authors: Lee-W

## Speaker
李泓旻 (Andrew)

## Material
* [video](https://www.youtube.com/watch?v=yEviapotudA)
* [slide](https://www.slideshare.net/AndrewLi55/distributing-your-pandas-etl-job-using-modin-and-raypdf)

## Note

### Problem to solve
1. many small datasets -> [ray](https://github.com/ray-project/ray)
2. out-of-core dataset -> [modin](https://github.com/modin-project/modin)

### Ray

* core concept
    1. tasks
        * stateless
        * return a `future`: the result of the tasks
        * idempotence
    2. actors
        * stateful
        * can be passed to other actors or tasks

```python

# initialize a ray cluster (by default your local machine)
ray.init()
```

* components
    * global control store
        * maintain the control state
        * key-value store with pub-sub functionality
        * benefits
            * fault tolerance
            * low latency
    * global scheduler
    * local scheduler
    * in-memory object store
        * [plasma](https://www.plasmapy.org/)
        * store
            * inputs
            * outputs
            * stateless computation
        * on each node, Ray has the object store via shared memory
        * external storage is also supported


![ray](/images/post-images/distributing-your-pandas-ETL-job-using-ray-and-modin/ray.jpg)

* How to handle python dependency?
    * [runtime_env](https://docs.ray.io/en/latest/ray-core/handling-dependencies.html#runtime-environments)

```python
ray.init(runtime_env=runtime_env)
```

### Modin

```python
import modin.pandas as pd
```

* Why modin?
    * high pandas API coverage (90% up)
* What if some pandas API is not supported?
    * fallback to `default to pandas` mode
