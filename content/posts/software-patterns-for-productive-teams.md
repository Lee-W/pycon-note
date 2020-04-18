Title: Software patterns for productive teams
Date: 2020-04-17 16:52
Category: EuroPython 2019
Tags: team
Slug: software-patterns-for-productive-teams
Authors: Lee-W

## Speaker
Radoslav Georgiev

## Material
* [video](https://www.youtube.com/watch?v=fEy68VRmOeQ)

## Note

### Team Leader's perspective
1. Productivity
2. Confidence (keep product stable)
3. Independence
4. Well-being
5. Less context switching
6. Someone being blocked
7. Morale

### Software Development
* constant regression
* constant merge conflicts
    * split python modules by domain
    * split big test files into test file per thing that you are testing
* local setup
    * accounts
        * make sure everyone has an account/access/keys for everything needed before they need it
        * keep a spreadsheet of accounts & 3td parties
    * documentation
        * relentlessly document
        * test it
        * **onboarding new people is your final test**
    * setup scripts
* speed of tests
    * pytest-xdist

### Features
* Clients often don't know the exact details of the things they want, so ask them a lot of questions!
* Make sure everyone on your team reads the features description fully, before starting to work.

### Explicit is better than implicit
* Bug
    * Have an explicitly "firefighter" for the week
    * Rotate everyone on that position
* Explicit Git & GitHub workflows
* Refactoring PRs separated from feature PRs
* Team rules
    * Better visibility at explicit expeetation
    * Onboard new people
* Have an explicit team lead
    * leads should focus on enabling their teams do their job well
    * Rotate team leads every week, so everyone knows what its' like to be on that position.
* Conflict
    * over communicate with all parties involved
    * Read books on management & leadership
* Adapt
    * Establish processes but don't follow them blindly.
    * Things change.
