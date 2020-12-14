Title: Awesome Command Line Tools
Date: 2020-01-21 13:10
Category: PyCon US 2017
Tags: command line
Slug: awesome-command-line-tools
Authors: Lee-W

## Speaker
Amjith Ramanujam

## Material
* [video](https://www.youtube.com/watch?v=hJhZhLg3obk&feature=youtu.be)
* [slide](https://speakerdeck.com/pycon2017/amjith-ramanujam-awesome-command-line-tools)

## Note

### Core Concepts
* Discoverability
    * Be forthcoming
    * Eschew special key
    * example
        * [pgcli](https://www.pgcli.com/) (tab completion)
        * [fish shell](https://fishshell.com/) (ctrl - r: search through the history)
* User Focus
    * User come first, implementation later
    * example
        * [mycli](https://www.mycli.net/)
        * [bpython](https://bpython-interpreter.org/)
* Configurability
    * subjective options only (e.g., color)

### Checklist
* Persistent history
* History search
* Emacs Keybindings
* Paged Output
* **Auto-Completion**
* **Minimal Config**
* **Syntax Coloring**

### Toolkit
* [python-prompt-toolkit](https://github.com/prompt-toolkit/python-prompt-toolkit)
    * `prompt`
        * `hisotry`
        * `auto_suggest`
        * `completer`
        * `lexer`
* [pygements](https://pygments.org/)
    * `lexers`
