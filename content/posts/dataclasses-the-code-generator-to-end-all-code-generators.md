Title: Dataclasses: The code generator to end all code generators
Date: 2020-01-29 11:32
Category: PyCon US 2018
Tags: Core
Slug: dataclasses-the-code-generator-to-end-all-code-generators
Authors: Lee-W

## Speaker
Raymond Hettinger

## Material
* [video](https://www.youtube.com/watch?v=T-TwcmT6Rcw)
* [site](https://gdevops.gitlab.io/tuto_python/peps/3.7/pep-0557/tutorials/hettinger/hettinger.html)

## Note
* What are dataclasses for ?
    * mutable data holder
    * simplifying the process of writing the class
* [Comparison with Named Tuples](https://gdevops.gitlab.io/tuto_python/peps/3.7/pep-0557/tutorials/hettinger/basic.html#comparison-with-named-tuples)
    * dataclass
        * mutable
        * unhashable
        * more memory usage
        * more efficient
    * named tuple
        * immutable
        * hashable
        * less memory usage
        * less efficient
* Freezing and Ordering
    * `@dataclass(order=True, frozen=True)`
* [Custom Field Specifications](https://gdevops.gitlab.io/tuto_python/peps/3.7/pep-0557/tutorials/hettinger/custom_fields.html)
    * `field(default_factory=list)`
    * `field(hash=False)`
    * `field(repr=False)`
    * `field(compare=False)`
