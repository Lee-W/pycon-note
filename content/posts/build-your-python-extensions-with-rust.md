Title: Build your Python Extensions with Rust!
Date: 2020-10-07 10:47
Category: EuroPython 2019
Tags: rust
Slug: build-your-python-extensions-with-rust
Authors: Lee-W

## Speaker
Paul Ganssle

## Material
* [video](https://www.youtube.com/watch?v=FolV-xUD3Ko&feature=youtu.be)
* [slide](https://pganssle-talks.github.io/pylondinium-2019-rust-extensions/#/)

## Note
* Rust
    * Memory safe
    * Fearless concurrency
    * High performance
    * Community
* Rust: Ownership
    * Variable bindings have ownership over the resource they're bound to
* Rust API Bindings: [PyO3](https://github.com/PyO3/pyo3)
* C FFI Bindings: [Milksnake](https://github.com/getsentry/milksnake)
    * `from msmodule._native import ffi`

![FFI v.s. API]({static}/images/post-images/build-your-python-extensions-with-rust/FFI v.s. API.jpg)
