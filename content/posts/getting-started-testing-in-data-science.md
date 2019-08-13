Title: Getting Started Testing in Data Science
Date: 2019-08-13 15:20
Category: PyCon US 2019
Tags: data
Slug: getting-started-testing-in-data-science
Authors: Lee-W

* [video](https://www.youtube.com/watch?v=0ysyWk-ox-8)
* [slide-origin](https://github.com/jesford/testing-in-data-science/blob/master/intro-to-testing-presentation.ipynb)
* [slide-flatten](https://speakerdeck.com/pycon2019/jes-ford-getting-started-testing-in-data-science)

* Data Science Workflows
    1. One-off analysis
    2. Exploratory
    3. Well defined problem

* Data Science Domain Problem
    * Working with Pandas DataFrames
        * Pandas built-in testing methods
            * `from pandas.util.testing import assert_frame_equal`
            * `check_like`
            * `check_dtype`
    * Working with DB
        * mock data that should be get from database and test only behavior
    * Generating Dataframe for Testing
        * `hypothesis`
