Title: 這樣的開發環境沒問題嗎？
Date: 2019-10-18 23:59
Category: PyCon TW 2018
Tags: virtual environment
Slug: is-your-dev-env-alright
Authors: Lee-W

## Speaker
Tzu-ping Chung

## Material
* [video](https://www.youtube.com/watch?v=6Nl0IYkU0hU&t=204s)
* [slide](https://speakerdeck.com/uranusjr/zhe-yang-de-kai-fa-huan-jing-mei-wen-ti-ma)

## Note
* interpreter → tools → dependencies → application

### Dependencies
* Try Pipenv

## Tools
* [pipsi](https://github.com/mitsuhiko/pipsi) can be an option. But, it has not been updated for a while.

```sh
mkdir -p ~/.local/bin ~/.local/venvs
python3 -m venv ~/.local/venvs/pipenv
~/.local/venvs/pipenv/bin/pip install pipenv
ln -s ~/.local/venvs/pipenv/bin/pipenv ~/.local/bin
pipenv --version
```

* Rule of Thumb
    * **Do not use `sudo`. Ever.**
    * Always use virtual environements
    * Use `--user` when desperate

### Interpreter
* Linux
    * Ubuntu: use "deadsnakes" PPA
* macOS
    * Do not use System Python, Homebrew Python
    * Must compile your own
* Windows
    * Just download it from [python.org](https://www.python.org/)
    * or use [pythonup](https://github.com/uranusjr/pythonup-windows)
