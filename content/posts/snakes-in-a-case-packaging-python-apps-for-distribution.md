Title: Snakes in a case: Packaging Python apps for distribution
Date: 2020-04-24 17:02
Category: PyCon US 2020
Tags: packaging
Slug: snakes-in-a-case-packaging-python-apps-for-distribution
Authors: Lee-W

## Speaker
Russell Keith-Magee

## Material
* [video](https://www.youtube.com/watch?v=WjMDXDHBn1I&feature=youtu.be)

## Note
* [Breifcase](https://github.com/beeware/briefcase)
* What it is?
    * PEP518 compliant build tool
    * multiple platform support
* What it isn't
    * Dependent on the rest of beeware suite
    * A solution for cli tool
* How?
    * ship a full independent Python interpreter
* What's the different?
    * Doesn't try to be clever
        * PyInstallers try to make Python something it isn't
    * Crossplatform
    * supports iOS and Android
* What's bad
    * Some platform support could be improved
    * Support packages are large
        * Use `support_package` to specify custom support package
