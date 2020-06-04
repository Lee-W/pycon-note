Title: Write Less and Test More with Data Regression Testing
Date: 2020-06-04 10:38
Category: PyCon US 2020
Tags: data, test
Slug: write-less-and-test-more-with-data-regression-testing
Authors: Lee-W

## Speaker
Igor T. Ghisi

## Material
* [video](https://www.youtube.com/watch?v=YBuVGx3EYSY&feature=youtu.be)
* [repo](https://github.com/igortg/pycon2020-pytest-regressions)

## Note
* Data Regression Testing
* [pytest-regressions](https://github.com/ESSS/pytest-regressions)
    * fixtures
        * `num_regression`: dict of 1-D array
        * `file_regression`: text
        * `data_regression`: basic python types
        * `image_regression`: image binary
    * Tips and tricks
        * regenerate all regression files
            * `pytest --force-regen`
        * `num_regression` and `image_regression` dependencies are not automatically installed
            * `num_regression`: `pandas`
            * `image_regression`: `pillow`
    * plugins used in this project
        * [pytest-datadir](https://github.com/gabrielcnr/pytest-datadir)
        * [serialchemy](https://github.com/ESSS/serialchemy)
