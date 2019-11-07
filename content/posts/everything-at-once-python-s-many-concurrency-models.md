Title: Everything at Once: Python's Many Concurrency Models
Date: 2019-11-07 11:41
Category: PyCon US 2019
Tags: concurrency
Slug: everything-at-once-python-s-many-concurrency-models
Authors: Lee-W
Status: draft

## Speaker
Jess Shapiro

## Material
* [video](https://www.youtube.com/watch?v=w2nKIGhXPAM)

## Note
* available options in Python
    * asyncio
    * Python threads
    * GIL-released thread
    * multiprocessing
    * distributed tasks

* parallelism
    * Do things actually happen simultaneously?
    * How does performance scale when you add more CPUs?
* minimum schedulable unit
    * How big are the code can be run independently?
* data sharing and isolation
    * how isolated is data between tasks?
    * how long does data stay the same for?
    * what tools can be used to share data?

### asyncio
* one coroutine runs at a time
    * event loop
* global state is shared and consistent within each block

### Python threads
* One thread runs (GIL)
* Global state is shared but consistent only for single bytecodes ops
    * e.g,
        * single bytecodes ops: `func(**kw)`,
        * non-single bytecodes ops: `x += 1`, `dict,items()`
* combined scheduling

### GIL-released threads
* multiple threads run simultaneously
* Global state is shared but unreliable
* OS-scheduled

### multiprocessing
* multiple processes run simultaneously
* global state starts the same as parent, but evolves independently
* OS-scheduled

### Distributed Tasks
* Multiple tasks run simultaneously
* Global state totally independent
* Central orchestrator
