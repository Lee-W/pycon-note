Title: Escape from auto-manual testing with Hypothesis!
Date: 2019-08-13 15:20
Category: PyCon US 2019
Tags: test
Slug: escape-from-auto-manual-testing-with-yypothesis
Authors: Lee-W

* [video](https://www.youtube.com/watch?v=KcyGUVzL7HA)
* [slide](https://speakerdeck.com/pycon2019/zac-hatfield-dodds-escape-from-auto-manual-testing-with-hypothesis)

### Property-based testing

* User
    * Describes valid input
    * Writes tests that passes for any valid input

### Strategies and Tactics

* strategies (`st`)
    * values
    * collections
    * map and filter methods
    * complicated data
        * recursive strategies
        * combine strategies
        * `builds()`: custom object
    * inferring strategies
    * `hypothesis.extra`
    * `st.data()`
* tactics: what do we tests?
    * auto-manual testing: `output == expected`
    * oracle tests (full specification)
    * partial specification
    * "Does not crash"
        * Just call your function with valid input
    * Round trip
        * e.g., `json.dumps` / `json.loads`
    * Metamorphic Relation
        * Although we don't know the relation between input and output, we might know how output should change.
    * Stateful Testing
        * (N)DFA
        * `RuleBasedStateMachine`

### Observability

* `--hypothesis-show-statistics`
    * timing stats
    * perf breakdown
    * exit reasons
* Use `note()` if you like print-debugging
