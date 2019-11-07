Title: Python Security Tool
Date: 2019-10-26 11:10
Category: PyCon US 2019
Tags: security
Slug: python-security-tool
Authors: Lee-W

## Speaker
Terri Oda

## Material
* [video](https://www.youtube.com/watch?v=e7zzdl8OXCU)

### Detecting Known Vulnerability
* [CVE](https://cve.mitre.org): database with known software vulerability
* Tools
    * [safety](https://github.com/pyupio/safety)
        * Free db: update monthly
        * Paid db: update realtime
    * `pipenv check`
* Safety vs Pipenv: Which one is better?
    * Neither! They use the same database

### Code Quality
* [pylint](https://www.google.com/search?client=firefox-b-d&q=pylint)
    * Security Value: Low
* [bandit](https://github.com/PyCQA/bandit)
    * Goal: find security issues
    * Security Value: High
    * Sometimes you don't want to fix all your Bandit warnings
    * Use them as a way to focus code review instead

### Code Quality - some anti-patterns
* [What Errors Are Included in the Top 25 Software Errors?](https://www.sans.org/top25-software-errors/)

### Use these tools
1. CI
2. During code review
3. Before release

### How do I secure python?
* Check for known vulnerabilities
    * `safety check` or `pipenv check`
* Check for code quality
    * pylint for basic linting
    * `bandit` for security linting
    * other static analysis for more
* Review secure coding guidelines for python to improve code reviews
