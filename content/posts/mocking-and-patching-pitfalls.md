Title: Mocking and Patching Pitfalls
Date: 2020-02-16 17:20
Category: PyCon US 2019
Tags: test
Slug: mocking-and-patching-pitfalls
Authors: Lee-W

## Speaker
Edwin Jung

## Material
[video](https://www.youtube.com/watch?v=Ldlz4V-UCFw)

## Note

### Mock hell
1. complex patch targets
2. numerous mocks or patches
3. mocks with brittle assertions
4. mocks with complex setup
5. deep mocks/recursive mocks/mocks returning mocks
6. tests that test nothing
7. using the debugger to reverse-engineer mocks
8. mocks that prevent refactoring

### How to test without mock
* mocks aren't stubs

* test doubles

| name | behavior |
| --- | --- |
| mock | records calls to the object |
| stub | returns canned data, no logic |
| fake | implements fake version of production logic |
| dummy | does nothing |
| spy | records and delegates to the real thing |

* alternatives
    * fake patch
    * fake injection
* tactical questions
    1. Which test doubles (mock or other)?
    2. Mockist or classical?
    3. Patch or inject?

* tactics
    1. Find a Seam, Patch a Fake
    2. mock roles not objects
    3. Dependency Injection
    4. Inject the Collaborator
    5. Go Functional

### Conclusion
* always be refactoring
* consider other test doubles
* patching should be rare, and the last tool you use
* mocks (if you use them)
    * should target roles and not objects
    * are not just for test isolation
