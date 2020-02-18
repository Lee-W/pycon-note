var tipuesearch = {"pages":[{"title":"About","text":"Just my note after watching PyCon videos.","tags":"pages","url":"https://lee-w.github.io/pycon-note/pages/about.html","loc":"https://lee-w.github.io/pycon-note/pages/about.html"},{"title":"Readability Counts","text":"Speaker Trey Hunner Material video slide Note PEP 8 Read it every 6 month It's not your project style guide It's just a start point Naming things Don't be afraid of using long variable names Use tuple unpacking in for loop Optimize for accuracy instead of short variable names Instead of commenting operation, consider using descriptive variables. Programming idioms duplicated code around other code → context manager → contextlib list from list → list comprehension Operator Overloading, Abstract Base Classes Functions with shared data → class Readability checklist Can I modify line breaks to improve clarity? Can I create a variable name for unnamed code? Can I add a comment to improve clarity? Can I turn a comment into a better variable name? Can I use a more specific programming construct? Have I stated detailed preferences in a style guide?","tags":"PyCon US 2017","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2017/2020/02/readbility-counts","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2017/2020/02/readbility-counts"},{"title":"Mocking and Patching Pitfalls","text":"Speaker Edwin Jung Material video Note Mock hell complex patch targets numerous mocks or patches mocks with brittle assertions mocks with complex setup deep mocks/recursive mocks/mocks returning mocks tests that test nothing using the debugger to reverse-engineer mocks mocks that prevent refactoring How to test without mock mocks aren't stubs test doubles name behavior mock records calls to the object stub returns canned data, no logic fake implements fake version of production logic dummy does nothing spy records and delegates to the real thing alternatives fake patch fake injection tactical questions Which test doubles (mock or other)? Mockist or classical? Patch or inject? tactics Find a Seam, Patch a Fake mock roles not objects Dependency Injection Inject the Collaborator Go Functional Conclusion always be refactoring consider other test doubles patching should be rare, and the last tool you use mocks (if you use them) should target roles and not objects are not just for test isolation","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2020/02/mocking-and-patching-pitfalls","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2020/02/mocking-and-patching-pitfalls"},{"title":"Maintaining a Python Project When It's Not Your Job","text":"Speaker Hynek Schlawack Materail video slide article (highly recommend) Note Act 1: Development .github/CONTRIBUTING.rst Example - attrs/.github/CONTRIBUTING.rst Encouragement → Everyone can contribute. Workflow outline Code, test, docs and changelog standards Local development environment setup .github/CODE_OF_CONDUCT.rst Expectation in behavior GitHub - Adding a code of conduct to your project Run test through tox : test on different environemnt make sure that the user runs exactly the same test commands as the CI Having a high test coverage Checkers flake8 mypy check-manifest twine : check pypi long description Example setup Autoformatters black isort Example setup pre-commit Example setup Documentation Sphinx slice and dice your README in your Sphinx docs to avoid information duplication rst .. include:: ../README.rst :start-after: string-1 :end-before: string-2 * Read the Docs Act 2: Pull Request .github/PULL_REQUEST_TEMPLATE.md checklist Example Continuous Integration Community Stack Overflow async community searchable Maintainer Say thank you to your contributors Act 3: Release Use ISO 8601 (e.g., 1986-03-19 ) for datetime test.pypi How to maintain release information? attrs example setup.py init .py","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2020/02/maintaining-a-python-project-when-It-s-not-your-job","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2020/02/maintaining-a-python-project-when-It-s-not-your-job"},{"title":"5 Steps to Build Python Native GUI Widgets for BeeWare","text":"Speaker Dan Yeaw Material slide article video Note toga Rubicon Python -> Objective C VOC Python -> Java Batavia Python -> Java Script Step 0 : Development Platform macOS and GTK are the most developed Step 1 : Research Your Widget Step 2 : Write Docs Write API documentation first Document Driven Development Step 3 : Implement TOGA_CORE (with TDD) Step 4 : Implement TOGA_IMPL (Dummy Backend) Dummy is for automatic testing without a native platform Step 5 : Implement TOGA_IMPL (Your platform)","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2020/01/5-steps-to-build-python-native-GUI-widgets-for-BeeWare","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2020/01/5-steps-to-build-python-native-GUI-widgets-for-BeeWare"},{"title":"Dataclasses: The code generator to end all code generators","text":"Speaker Raymond Hettinger Material video site Note What are dataclasses for ? mutable data holder simplifying the process of writing the class Comparison with Named Tuples dataclass mutable unhashable more memory usage more efficient named tuple immutable hashable less memory usage less efficient Freezing and Ordering @dataclass(order=True, frozen=True) Custom Field Specifications field(default_factory=list) field(hash=False) field(repr=False) field(compare=False)","tags":"PyCon US 2018","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2018/2020/01/dataclasses-the-code-generator-to-end-all-code-generators","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2018/2020/01/dataclasses-the-code-generator-to-end-all-code-generators"},{"title":"Awesome Command Line Tools","text":"Speaker Amjith Ramanujam Material video slide Note Core Concepts Discoverability Be forthcoming Eschew special key example pgcli (tab completion) fish shell (ctrl - r: search through the history) User Focus User come first, implementation later example mycli bpython Configurability subjective options only (e.g., color) Checklist Persistent history History search Emacs Keybindings Paged Output Auto-Completion Minimal Config Syntax Coloring Toolkit python-prompt-toolkit prompt hisotry auto_suggest completer lexer pygements lexers","tags":"PyCon US 2017","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2017/2020/01/awesome-command-line-tools","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2017/2020/01/awesome-command-line-tools"},{"title":"Memory Management in Python - The Basics","text":"Speaker Nina Zakharenko Material video slide Note How does Python store object in memory name -> reference -> object Python Object Types Simple (e.g., numbers, strings) Containers (dict, list, user defined-class) Every Python object holds type value ref count Reference Count Decrease ref count del remove the name as a reference instead of delete the object decrease the reference count by 1 going out of scope Global Namespace never go out of scope → refcount never reach 0 Avoid putting large or complex objects in the global namespace Common Garbage Collection Techniques Reference Counting Concept add / remove ref delete object if refcount reaches 0 The good Easy to implement When refcount is 0 objects are immediately delete. The bad space overhead execution overhead The ugly not thread safe doesn't detect cyclical ref Tracing (mark and sweep) What algorithm does Python use? Reference Counting + Generational __slot__ Attribute Declarations When to use If we're going to create lots of instances If we know the properties in advance","tags":"PyCon US 2016","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2016/2020/01/memory-management-in-python-the-basics","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2016/2020/01/memory-management-in-python-the-basics"},{"title":"Elegant Solutions For Everyday Python Problems","text":"Speaker Nina Zaharenko (@nnja) Material video slide Note Magic methods: __func__ Custom iterator __iter__ : Make classes iterable returns an iterator __next__ : Make class iterator raises StopIteration when there is no more items to return Use a generator when your iterator doesn't need to maintain a lot of state Method magic getattr(object, name, default) call function by name string use case cli tool with dynamic commands functool.partial(func, *args, **kwargs) Context manager perform an action before and/or after an operation use case close a resource (e.g., file, network, database) perform clean up before/after function call feature flags: turn feature of your application on and off easily A/B Testing Rolling Releases from contextlib import contextmanager Decorators Wrap a function in another function to do something before the call after the call with provided arguments Problem: lost context using a decorator Solution: from contextlib import wraps Use case logging timing validation rate limiting mocking/patching ConextDecorator By use it, you can write classes that can be used both as decorator and context managers It's included if implemented through from contextlib import contextmanger .","tags":"PyCon US 2018","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2018/2020/01/elegant-solutions-for-everyday-python-problems","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2018/2020/01/elegant-solutions-for-everyday-python-problems"},{"title":"Demystifying the Patch Function","text":"Speaker Lisa Roach Material video Note Patch: temporarily replace your target with MagicMock() Target: 'package.modeul.ClassName' When should you mock? When you don't want to actually call an object e.g., database, system call What makes it so confusing? Identifying the target Multiple ways to call Patch Target must be importable Patch where the object is used # module.py from db import db_write # test_module.py @patch ( \"module.db_write\" ) How to call Patch Context Manager Function / Class Decorators Manual start/stop Spec The spec arguments: spec , autospec , spec_set Mock Problems that spec can solve Misspelled asserts look like attributes Mocked objects called incorrectly pass silently A MagicMock dir() assert_any_call assert_called assert_called_once assert_called_once_with assert_called_with ... return_value side_effect A Specced MagicMock spec=True The attribute of patched object is now in MagicMock. We can now only get attribute that exists. It does not know the attribute of your attribute → autospec=True However, autospec can be dangerous. It will run the code that will be triggered when introspected. It doesn't know dynamicaly created attribute (including the ones in __init__ ) → manually create it spec_set=True prevent you from setting attribute that does not exist Other arguments new_callable Common Use case: Mocking property object new create kwargs return_value set attribute Readmore patch.object patch.dict patch.multiple","tags":"PyCon US 2018","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2018/2020/01/demystifying-the-Patch-functionusing-python","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2018/2020/01/demystifying-the-Patch-functionusing-python"},{"title":"Wily Python: Writing simpler and more maintainable Python","text":"Speaker Anthony Shaw Material video slide wily Note Program Complexity Cyclomatic Complexity Halstead Metrics Maintainability Index radon : tool to calculate program complexity wily : tool to track complexity change over time wily build <path> wily report <path> wily graph <path> Take away Make sure you have good behavioral test coverage Refactor often Divide and Conquer → Spread complexity","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2020/01/wily-python-writing-simpler-and-more-maintainable-python","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2020/01/wily-python-writing-simpler-and-more-maintainable-python"},{"title":"Improving PyPI's security with Two Factor Authentication","text":"Speaker William Woodruff Material video Note PyPI now supports two factor authentication Two factor authentication First factor: your password or something you know Second Factor: something that you (and only you) have Why 2FA? Adding a second factor prevents/mitigates data leak but 2FA isn't panacea 2 FA methods SMS/voice Don't use it Problem: Nothing about the phone network is secure e.g., SS7 attacks, SIM ports & jacking, SMS interception do not use it in new service HOTP-based physical keys Special device high cost TOTP (Time-based one-time passwords ): your baseline 2FA Symmetric cryptography with a single shared secret design suggestion do: require users to enter a TOTP code provide both a provisioning URI and a QR code don't use uncommon TOTP parameters (bad client support) nag users for TOTP codes on every single action WebAuthn (U2F) Asymmetric, public-key crpyography Hardware agnostic Supported by most browser (W3C standard) design suggestion do allow anonymous attestation (ECDAA) (e.g., TouchID) support multiple WebAuthn keys per user force user to tag/label their keys don't make users choose between TOTP and WebAuthn → Let them do both use us2.js or any other pre-WebAuthn lib Conclusion You should add 2FA to your services and phasing out SMS 2FA TOTP pyca/crptography WebAuthn Py_webauthn is a little rough, but production ready","tags":"PyGotham 2019","url":"https://lee-w.github.io/pycon-note/posts/pygotham-2019/2019/12/improving-pypi-s-security-with-two-factor-authentication","loc":"https://lee-w.github.io/pycon-note/posts/pygotham-2019/2019/12/improving-pypi-s-security-with-two-factor-authentication"},{"title":"Keynote - Russell Keith-Magee","text":"Speaker Russell Keith-Magee Material video Where do you see Python in 10 years? Python's Black Swan Black Swan 1: Everyone uses a laptop? What happens to Python when laptop no longer exist? 2: Python can stay on the server 3: Installation is a solved problem 4: Code distribution doesn't matter America Cup Lesson 1: It's not enough to just follow the rules. You have to ensure the competition is fair. Lesson 2: Watch out for Black Swans Challenge the assumption Lesson 3: The team matters Lesson 4: Money makes things happen Expertise costs 5 Call to action Start thinking about Black swans (before it's too late) Improve resourcing of maintenance and R&D efforts Value contributors and their contributions Get out your wallet xD Contribute","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/12/Keynote-Russell-Keith-Magee","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/12/Keynote-Russell-Keith-Magee"},{"title":"Python Dependency Management","text":"Speaker Patrick Muehlbauer Material video Note Problems multiple tools for the whole workflow no real dependency resolution in pip multiple files needed for reproducible env (e.g., requirements.txt , dev-requirements.txt ) Possible Solutions reproducible env Pipfile, Pipfile.lock distutils/setuptools limitations pyproject.toml Python dependency managers pipenv pip-tools poetry hatch conda Bento flit pants/ pex Which to choose? It depends. Questions to ask Are building a library or an application? Doest it fit my infra? pip-tools pip-compile : generates requirements.txt from setup.py or requirements.in pip-sync : dependency synchronization Pipenv wrapper around pip and virtual environments use Pipfile , Pipfile.lock for applications rather than libraries separate sections for dev and man dependencies Poetry tool to manage dependencies, build and publish packasge use pyproject.toml , poetry.lock hatch simplifies development workflow warps multiple tools ( pip , virtualenv , twine , pytest , coverage.py ) setup.py , requirements.txt","tags":"PyCon DE 2018","url":"https://lee-w.github.io/pycon-note/posts/pycon-de-2018/2019/12/python-dependency-management","loc":"https://lee-w.github.io/pycon-note/posts/pycon-de-2018/2019/12/python-dependency-management"},{"title":"How to Level Up","text":"Speaker Leta Montopoli GitHub Material slide Note Be Curious What curiosity looks like ask question ← showing not ok with not understanding be open to learning from anyone contemplate if there is a better way focus on learning goals learn about the tools you use experimenting Be Brave When you get that nervous / excited feeling in your stomach, that's a sign you gotta continue. What bravery looks like Volunteer for things that scare you Teach others, even if you aren't an \"expert\" ask basic and dumb questions read things you don't understand Be Dissatisfied What dissatisfaction looks like Hunting for inefficiencies Have pet projects Make thins faster Be reflective Bing reflective helps us learn through experience What being reflective looks like Journal everyday Learn from your successes and your failures","tags":"PyCon CA 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-ca-2019/2019/12/how-to-level-up","loc":"https://lee-w.github.io/pycon-note/posts/pycon-ca-2019/2019/12/how-to-level-up"},{"title":"From days to minutes, from minutes to milliseconds with SQLAlchemy","text":"Speaker Leonardo Rochael Almeida Material video Note SQLAlchemy SQL Expression Language (a Python DSL) Object Relational Mapper (ORM) The ORM Trap Sensible Python Code → Bad SQL access patterns unnoticeable at low data volumes e.g., dev and early production The Fix: Let the DB do its job Be aware of implicit queries especially from relationships Aim for O(1) queries per request/job/activity Avoid looping through model instances","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/11/from-days-to-minutes-from-minutes-to-milliseconds-with-SQLAlchemy","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/11/from-days-to-minutes-from-minutes-to-milliseconds-with-SQLAlchemy"},{"title":"Programmatic Notebooks with papermill","text":"Speaker Matthew Seal Material video slide Note papermill scrapbook The bad side of Jupyter notebook Lack of history Difficult to test Mutable document Hard to parameterize Live collaboration Filling the Gaps - papermill Things to preserve results linked to code good visuals easy to share Things to improve not versioned mutable state templating New Users & Extensions Easy to extend They're all component","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/11/programmatic-notebooks-with-papermill","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/11/programmatic-notebooks-with-papermill"},{"title":"Everything at Once: Python's Many Concurrency Models","text":"Speaker Jess Shapiro Material video Note available options in Python asyncio Python threads GIL-released thread multiprocessing distributed tasks parallelism Do things actually happen simultaneously? How does performance scale when you add more CPUs? minimum schedulable unit How big are the code can be run independently? data sharing and isolation how isolated is data between tasks? how long does data stay the same for? what tools can be used to share data? asyncio one coroutine runs at a time event loop global state is shared and consistent within each block Python threads One thread runs (GIL) Global state is shared but consistent only for single bytecodes ops e.g, single bytecodes ops: func(**kw) , non-single bytecodes ops: x += 1 , dict,items() combined scheduling GIL-released threads multiple threads run simultaneously Global state is shared but unreliable OS-scheduled multiprocessing multiple processes run simultaneously global state starts the same as parent, but evolves independently OS-scheduled Distributed Tasks Multiple tasks run simultaneously Global state totally independent Central orchestrator","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/11/everything-at-once-python-s-many-concurrency-models","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/11/everything-at-once-python-s-many-concurrency-models"},{"title":"Does remote work really work?","text":"Speaker Lauren Schaefer Material video slide Note Think about a time you were fabulously productive. Open offices spaces , Working remotely and Cubeland all can be THE WORST. Why do you want to work remotely? unable to relocate lengthy commutes availability for children or aging parents distracting office environments travel the world Why do employers offer remote job? attract and retain top talent increate employee morale save money increase employee productivity Fewer sick days Shorter breaks Fewer distractions What does the research say? The more experience you have, the more likely you can have a remote job. The down side professional isolation negatively impacts job performance having a remote manager may negatively impact you remote employees fear stalling careers isolation distractions blurred lines between work and home life remote work encourages employees to \"overwork and to allow their work to infringe on their family role\" How to convince your boss to let you work remotely? Propose an experiment But what about collaboration and water-cooler conversations? When all else fails, talk about the bottom line. How to be a successful remote employee ( Important ) Join the right team e.g., fully distributed team consider the communication styles schedule one-on-one for each member Show picture of yourself For becoming the real person Be productive Set daily goal Create a work space suitable Don't work on your couch Communicate with you team Make sure you're making thing person as you're in office Be a great PR agent for yourself Travel Get out your home office Get a chance to meet a coworker in person Actively prevent burnout Take a lunch break Stretch before meeting Turn off your computer after work Include notifications","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/11/does-remote-work-really-work","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/11/does-remote-work-really-work"},{"title":"Life Is Better Painted Black, or: How to Stop Worrying and Embrace Auto-Formatting","text":"Speaker Łukasz Langa Material video Note Problem Statement From Style Guide (PEP 8) to Code Style Sol 1: Linters It still has human labor involves. Sol 2: Auto-formatting Why people don't like auto-formatting? → too destructive What we can learn from Go Community? → Uniformity Trumps Perfection The good enough uniform format style is better than having a lot of different formatting that are locally better but is inconsistence Auto-formatter in different languages gofmt for go Prettier for javascript black for Python Design and implementation Goal Opinionated Deterministic Consistent Fast Tips for adoption git-hyper-blame pre-commit","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/11/life-is-better-painted-black-or-how-to-stop-worrying-and-embrace-auto-formatting","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/11/life-is-better-painted-black-or-how-to-stop-worrying-and-embrace-auto-formatting"},{"title":"Pipenv: The Future of Python Dependency Management","text":"Speaker Kenneth Reitz Material video Note Packaging History unzip and install from setup.py easy_install pip , virtualenv , requirements.txt Python has no lock files! Pipenv Pipfile TOML: easy to read/ write manually Two groups: [package] , [dev-package] Pipfile.lock JSON: machine readible transitive dependencies pinned with all acceptable hashes for each releases Two groups: default , develop Install packages concurrently Support multiple source pipenv --venv : show you the venv created pipenv --graph : show dependency tree pipenv check : check the vulnerability of packages e.g., pipenv install django==1.4.2 pipenv install --deploy pipenv install --ignore-pipfile pipenv --python <version> : automatically install certain python version if you have pyenv installed pipenv lock -r : generate requirements.txt We should put the lock file on source control. pipenv uninstall uninstall only the package. pipenv sync is needed to uninstall all its transitive dependencies. Pipenv finds created venv through path of the directory. Thus, if you move the directory, you'll have to create a new virtual environment. Pipenv won't be a replacement for setup.py Pipenv is for application. setup.py is for lib.","tags":"PyCon US 2018","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2018/2019/11/pipenv-the-future-of-python-dependency-management","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2018/2019/11/pipenv-the-future-of-python-dependency-management"},{"title":"Pytest: Rapid Simple Testing","text":"Speaker Florian Bruhin Material video Note Why pytest assertion rewrite parameterize fixtures build-in fixtures tmpdir monkeypatch plugins pytest-cov pytest-bdd pytest-sugar","tags":"Swiss Python Summit 2016","url":"https://lee-w.github.io/pycon-note/posts/swiss-python-summit-2016/2019/11/pytest-rapid-simple-testing","loc":"https://lee-w.github.io/pycon-note/posts/swiss-python-summit-2016/2019/11/pytest-rapid-simple-testing"},{"title":"Python Security Tool","text":"Speaker Terri Oda Material video Detecting Known Vulnerability CVE : database with known software vulerability Tools safety Free db: update monthly Paid db: update realtime pipenv check Safety vs Pipenv: Which one is better? Neither! They use the same database Code Quality pylint Security Value: Low bandit Goal: find security issues Security Value: High Sometimes you don't want to fix all your Bandit warnings Use them as a way to focus code review instead Code Quality - some anti-patterns What Errors Are Included in the Top 25 Software Errors? Use these tools CI During code review Before release How do I secure python? Check for known vulnerabilities safety check or pipenv check Check for code quality pylint for basic linting bandit for security linting other static analysis for more Review secure coding guidelines for python to improve code reviews","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/10/python-security-tool","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/10/python-security-tool"},{"title":"這樣的開發環境沒問題嗎？","text":"Speaker Tzu-ping Chung Material video slide Note interpreter → tools → dependencies → application Dependencies Try Pipenv Tools pipsi can be an option. But, it has not been updated for a while. mkdir -p ~/.local/bin ~/.local/venvs python3 -m venv ~/.local/venvs/pipenv ~/.local/venvs/pipenv/bin/pip install pipenv ln -s ~/.local/venvs/pipenv/bin/pipenv ~/.local/bin pipenv --version Rule of Thumb Do not use sudo . Ever. Always use virtual environements Use --user when desperate Interpreter Linux Ubuntu: use \"deadsnakes\" PPA macOS Do not use System Python, Homebrew Python Must compile your own Windows Just download it from python.org or use pythonup","tags":"PyCon TW 2018","url":"https://lee-w.github.io/pycon-note/posts/pycon-tw-2018/2019/10/is-your-dev-env-alright","loc":"https://lee-w.github.io/pycon-note/posts/pycon-tw-2018/2019/10/is-your-dev-env-alright"},{"title":"Modern development environments for Pythonistas","text":"Speaker Dustin Ingram Material video Note Speaker Dustin Ingram ( twitter ) Organize PyTexas PyPi contributor Topics dev, test env dependency workflows linting & autoformatting go to prod Focus: anything that's not code and will be check into code base dev, test environment Your development environment. \"But it works on my machine\" You laptop is not production. Problem: virtualenv only isolate Python. Platform-level stuff are still shared. Fully isolate a reproducible environments containerization (e.g., docker) Dockerfile docker-compose A modern workflow for dependencies Problems: When install a new package and it depends on newer version of old dependency, it might upgrade unnoticeably. Don't pip freeze > requirements.txt anymore Bad Get everything from your system Good Version pinning Managing sub-dependencies pip-tools pip-tools Pin and compile the dependencies and sub-dependencies sh pip-compile requirements.in Pinning and compiling only get 90% Artifact hashing pip compile --generate-hashes requirements.in pip install --require-hashes -r requirements.txt Now our deps are 100% frozen When / How to upgrade dependencies When: early and often How: automated dependency services → scan you repo and see your deps pyup.io dependabot Linting and autoformatting Use black Taking your env to prod Through services that supports deployment through container Conclusion Use docker Use docker-compose Use pip-compile from pip-tools Use dependabot / pyup.io for auto-upgrade deps Use dependabot Deploy your docker container to prod Q & A Q: pipenv, poetry or pip-tools A: Personal perference","tags":"PyCon JP 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-jp-2019/2019/10/modern-development-environments-for-pythonistas","loc":"https://lee-w.github.io/pycon-note/posts/pycon-jp-2019/2019/10/modern-development-environments-for-pythonistas"},{"title":"Automating Code Quality","text":"Speaker Kyle Knapp Materials video Note example aws/chalice Steps to automation tools flake8 pycodestyle → style pyflakes → bug mccabe → complexity flake8 --max-complexity ... pylint similar but stricter and more optional than flake8 coverage other tools: mypy , doc8 , pydocstyle automation on local env Makefile requirements-dev.txt atuomation on prod env Makefile requirements-prod.txt Best practices Always improve quality check Avoid compromising existing quality checks Be aware automated quality checks does not guarantee code quality","tags":"PyCon US 2018","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2018/2019/09/automating-code-quality","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2018/2019/09/automating-code-quality"},{"title":"Ace Your Technical Interview Using Python","text":"Speaker Erin Allard Material video slide Note Technical Interview Process Recruiter phone screen Technical phone screen with an engineer Take-home assessment Onsite interviews' Non-technical skill matters (a lot) problem solving ask good questions How to Ask Good Questions understand assumption Code (obviously) matters collections time complexity recursion base case progress object-oriented programming data structure & algorithm Coding challenges: quality over quantity Mindset is key Failure and rejection are part of the process You don't need every company to want to hire you","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/ace-your-technical-interview-using-python","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/ace-your-technical-interview-using-python"},{"title":"API Evolution the Right Way","text":"Speaker A. Jesse Jiryu Davis Material video article Note Avoid Bad Features Minimize Features Keep Feature Narrow Mark Experimental Features \"Provisional\" Delete Feature Gently Deprecated warning Instructive error Maintain a Change Log Choose a Version Scheme Semantic Versioning Time-based Versioning Write an Upgrade Guide Add parameter compatibly （and fail loudly!） Add default value for new added parameter that preserve old behavior Use * <- all parameters after it can only be passed by name Changing Behavior without Changing API Add a flag default False but warn if it's False Phrase 2. Change default to True, deprecate flag Phrase 3. Remove flag","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/api-evolution-the-right-way","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/api-evolution-the-right-way"},{"title":"Break the Cycle: Three excellent Python tools to automate repetitive tasks","text":"Speaker Thea Flowers Material video Note goal reduce toil (redundant boring stuff) tools tox for automating python package testing nox flexible test automation the configuration file is python noxfile.py invoke task execution tool a tool framework invoke example from invoke import task @task def authors ( ctx ): \"\"\"Print all the authors in this project\"\"\" result = ctx . run ( \"git log --pretty=format: \\\" %a n < %a e> \\\" \" , encoding = \"utf-8\" , hide = True ) authors = set ( result . stdout . splitlines ()) authors = sorted ( authors ) for author in authors : print ( author ) @task def changelog ( ctx , since ): \"\"\"Print the changelog since given git ref\"\"\" result = ctx . run ( f \"git log {since} ..HEAD --format= %s \" , encoding = \"utf-8\" , hide = True ) changes = result . stdout . splitlines () print ( f \"Changelog sine {since} :\" ) for change in changes : print ( f \"- {change} \" )","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/break-the-cycle-three-excellent-python-tools-to-automate-repetitive-tasks","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/break-the-cycle-three-excellent-python-tools-to-automate-repetitive-tasks"},{"title":"Escape from auto-manual testing with Hypothesis!","text":"Speaker Zac Hatfield-Dodds Material video slide Note Property-based testing User Describes valid input Writes tests that passes for any valid input Strategies and Tactics strategies ( st ) values collections map and filter methods complicated data recursive strategies combine strategies builds() : custom object inferring strategies hypothesis.extra st.data() tactics: what do we tests? auto-manual testing: output == expected oracle tests (full specification) partial specification \"Does not crash\" Just call your function with valid input Round trip e.g., json.dumps / json.loads Metamorphic Relation Although we don't know the relation between input and output, we might know how output should change. Stateful Testing (N)DFA RuleBasedStateMachine Observability --hypothesis-show-statistics timing stats perf breakdown exit reasons Use note() if you like print-debugging","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/escape-from-auto-manual-testing-with-yypothesis","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/escape-from-auto-manual-testing-with-yypothesis"},{"title":"Getting Started Testing in Data Science","text":"Speaker Jes Ford Material video slide-origin slide-flatten Note Data Science Workflows One-off analysis Exploratory Well defined problem Data Science Domain Problem Working with Pandas DataFrames Pandas built-in testing methods from pandas.util.testing import assert_frame_equal check_like check_dtype Working with DB mock data that should be get from database and test only behavior Generating Dataframe for Testing hypothesis","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/getting-started-testing-in-data-science","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/getting-started-testing-in-data-science"},{"title":"Practical decorators","text":"Speaker Reuven M. Lerner Material video Note usage examples timing limited call (e.g., function can be called once per minute) memoization (i.e. caching) add class attribute (e.g., better __repr__ )","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/practical-decorators","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/practical-decorators"},{"title":"Scraping a Million Pokemon Battles: Distributed Systems By Example","text":"Speaker Duy Nguyen Material video slide Note Scalability and 3 \"Pillars\" Concurrency of Resources Asserting for Correctness Resilience against Failures New Problems Loss of determinism Long startup times (e.g., initialize message queue) Increases flakiness Correctness Resilience","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/scraping-a-million-pokemon-battles-distributed-systems-by-example","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/scraping-a-million-pokemon-battles-distributed-systems-by-example"},{"title":"Solve Your Problem With Sloppy Python","text":"Speaker Larry Hastings Material video Note Personal Description It's an introduction for how to use python as the shell script The rules fail early and noisily stop writing the shell script The guidelines try automating even more try new libraries/technologies","tags":"PyCon AU 2018","url":"https://lee-w.github.io/pycon-note/posts/pycon-au-2018/2019/08/solve-your-problem-with-sloppy-python","loc":"https://lee-w.github.io/pycon-note/posts/pycon-au-2018/2019/08/solve-your-problem-with-sloppy-python"},{"title":"The Zen of Python Teams","text":"Speaker Adrienne Lowe Leading with Spoons adriennefriend Material video Note Beautiful is better than ugly. Be kind Accelerate Explicit is better than implicit Documenting process makes it easier for others to join you. resource onboard guide how to contribute where to get help Keep your conversation about work in public Document your peoeple I enjoy working on ... I get excited by ... I struggle when ... I feel appreciated when ... Ask me for help with ... Simple is better than complex. Build meaningful relationships with small interactions Error should never pass silently With humans, we have to rely on other humans to tell us when we broke them. In the face of ambiguity, refuse the temptation to guess. Now is better than never. Doing and being wrong is a lot better than not doing at all.","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/the-zen-of-python-teams","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/the-zen-of-python-teams"},{"title":"Time to take out the rubbish: garbage collector","text":"Speaker Material video Note We do not use __del__() to clean up. Use with instead","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/time-to-take-out-the-rubbish-garbage-collector","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/time-to-take-out-the-rubbish-garbage-collector"},{"title":"Watch out for Safety Bandits!","text":"Speaker Tennessee Leeuwenburg Material video Note The \"Essential Two\" security problems Problems someone else made safety : Dependency Checking You can use pip install insecure-package to try it. Problems you made bandit : Static Analysis (e.g., rule-based syntax / style)","tags":"PyCon AU 2018","url":"https://lee-w.github.io/pycon-note/posts/pycon-au-2018/2019/08/watch-out-for-safety-bandits","loc":"https://lee-w.github.io/pycon-note/posts/pycon-au-2018/2019/08/watch-out-for-safety-bandits"},{"title":"Why you should care about types: How Python typing helped my team scale","text":"Speaker Luka Sterbic Material video Note Are Python types Pythonic? import this >>> Explicit is better than implicit . >>> Readability counts >>> In the face of ambiguity , refuse the temptation to guess . If nothing else, because Guido said so 😆 Type 101 Collection, Union, Optional, Type from typing import Type , TypeVar class BaseClass : pass class DerivedClass ( BaseClass ): pass T = TypeVar ( \"T\" , bound = BaseClass ) def factory ( clazz : Type [ T ]) -> T : return claszz () Tool GitHub - Instagram/MonkeyType: A system for Python that generates static type annotations by collecting runtime types","tags":"PyCon AU 2018","url":"https://lee-w.github.io/pycon-note/posts/pycon-au-2018/2019/08/why-you-should-care-about-types","loc":"https://lee-w.github.io/pycon-note/posts/pycon-au-2018/2019/08/why-you-should-care-about-types"}]};