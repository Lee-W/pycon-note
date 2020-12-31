Title: Tests that (Almost) Write Themselves
Date: 2020-12-31 15:40
Category: EuroPython 2020
Tags: test
Slug: tests-that-almost-write-themselves
Authors: Lee-W

## Speaker
Stefan Baerisch

## Material
* [video](https://www.youtube.com/watch?v=CSwm95DLRf4)
* [slide](https://ep2020.europython.eu/media/conference/slides/4ALvmfv-tests-that-almost-write-themselves.pdf)

# Note
* golden master test (a.k.a. characterizations tests, approval tests, snapshot tests)

### How to design such tool / test?

![design decision]({static}/images/post-images/tests-that-almost-write-themselves/design-decision.jpg)

* what to ignore
    * time
    * key order for non-ordered dicts
    * random data

### existing tools
* [syrusakbary/snapshottest](https://github.com/syrusakbary/snapshottest)
* [approvals/ApprovalTests.Python](https://github.com/approvals/ApprovalTests.Python)

## Personal Summary / Thought
This talk introduces an idea similar to [pytest-regressions](https://pytest-regressions.readthedocs.io/en/latest/). It also details how this kind of tools and tests should be designed.
