Title: API Evolution the Right Way
Date: 2019-08-13 15:20
Category: PyCon US 2019
Tags: api
Slug: api-evolution-the-right-way
Authors: Lee-W

* [video](https://www.youtube.com/watch?v=dqDnB6jKzcE)
* [article](https://emptysqua.re/blog/api-evolution-the-right-way/)

1. Avoid Bad Features
2. Minimize Features
3. Keep Feature Narrow
4. Mark Experimental Features "Provisional"
5. Delete Feature Gently
    * Deprecated warning
    * Instructive error
6. Maintain a Change Log
7. Choose a Version Scheme
    * Semantic Versioning
    * Time-based Versioning
8. Write an Upgrade Guide
9. Add parameter compatibly （and fail loudly!）
    * Add default value for new added parameter that preserve old behavior
    * Use `*` <- all parameters after it can only be passed by name
10. Changing Behavior without Changing API
    1. Add a flag
        * default False but warn if it's False
    2. Phrase 2. Change default to True, deprecate flag
    3. Phrase 3. Remove flag
