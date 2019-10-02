var tipuesearch = {"pages":[{"title":"About","text":"Just my note after watching PyCon videos.","tags":"pages","url":"https://lee-w.github.io/pycon-note/pages/about.html","loc":"https://lee-w.github.io/pycon-note/pages/about.html"},{"title":"Modern development environments for Pythonistas","text":"Material video Note Speaker Dustin Ingram ( twitter ) Organize PyTexas PyPi contributor Topics dev, test env dependency workflows linting & autoformatting go to prod Focus: anything that's not code and will be check into code base dev, test environment Your development environment. \"But it works on my machine\" You laptop is not production. Problem: virtualenv only isolate Python. Platform-level stuff are still shared. Fully isolate a reproducible environments containerization (e.g., docker) Dockerfile docker-compose A modern workflow for dependencies Problems: When install a new package and it depends on newer version of old dependency, it might upgrade unnoticeably. Don't pip freeze > requirements.txt anymore Bad Get everything from your system Good Version pinning Managing sub-dependencies pip-tools pip-tools Pin and compile the dependencies and sub-dependencies sh pip-compile requirements.in Pinning and compiling only get 90% Artifact hashing pip compile --generate-hashes requirements.in pip install --require-hashes -r requirements.txt Now our deps are 100% frozen When / How to upgrade dependencies When: early and often How: automated dependency services → scan you repo and see your deps pyup.io dependabot Linting and autoformatting Use black Taking your env to prod Through services that supports deployment through container Conclusion Use docker Use docker-compose Use pip-compile from pip-tools Use dependabot / pyup.io for auto-upgrade deps Use dependabot Deploy your docker container to prod Q & A Q: pipenv, poetry or pip-tools A: Personal perference","tags":"PyCon JP 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-jp-2019/2019/10/modern-development-environments-for-pythonistas","loc":"https://lee-w.github.io/pycon-note/posts/pycon-jp-2019/2019/10/modern-development-environments-for-pythonistas"},{"title":"Automating Code Quality","text":"Materials video Note example aws/chalice Steps to automation tools flake8 pycodestyle → style pyflakes → bug mccabe → complexity flake8 --max-complexity ... pylint similar but stricter and more optional than flake8 coverage other tools: mypy , doc8 , pydocstyle automation on local env Makefile requirements-dev.txt atuomation on prod env Makefile requirements-prod.txt Best practices Always improve quality check Avoid compromising existing quality checks Be aware automated quality checks does not guarantee code quality","tags":"PyCon US 2018","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2018/2019/09/automating-code-quality","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2018/2019/09/automating-code-quality"},{"title":"Ace Your Technical Interview Using Python","text":"Material video slide Note Technical Interview Process Recruiter phone screen Technical phone screen with an engineer Take-home assessment Onsite interviews' Non-technical skill matters (a lot) problem solving ask good questions How to Ask Good Questions understand assumption Code (obviously) matters collections time complexity recursion base case progress object-oriented programming data structure & algorithm Coding challenges: quality over quantity Mindset is key Failure and rejection are part of the process You don't need every company to want to hire you","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/ace-your-technical-interview-using-python","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/ace-your-technical-interview-using-python"},{"title":"API Evolution the Right Way","text":"Material video article Note Avoid Bad Features Minimize Features Keep Feature Narrow Mark Experimental Features \"Provisional\" Delete Feature Gently Deprecated warning Instructive error Maintain a Change Log Choose a Version Scheme Semantic Versioning Time-based Versioning Write an Upgrade Guide Add parameter compatibly （and fail loudly!） Add default value for new added parameter that preserve old behavior Use * <- all parameters after it can only be passed by name Changing Behavior without Changing API Add a flag default False but warn if it's False Phrase 2. Change default to True, deprecate flag Phrase 3. Remove flag","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/api-evolution-the-right-way","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/api-evolution-the-right-way"},{"title":"Break the Cycle: Three excellent Python tools to automate repetitive tasks","text":"Material video Note goal reduce toil (redundant boring stuff) tools tox for automating python package testing nox flexible test automation the configuration file is python noxfile.py invoke task execution tool a tool framework","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/break-the-cycle-three-excellent-python-tools-to-automate-repetitive-tasks","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/break-the-cycle-three-excellent-python-tools-to-automate-repetitive-tasks"},{"title":"Escape from auto-manual testing with Hypothesis!","text":"Material video slide Note Property-based testing User Describes valid input Writes tests that passes for any valid input Strategies and Tactics strategies ( st ) values collections map and filter methods complicated data recursive strategies combine strategies builds() : custom object inferring strategies hypothesis.extra st.data() tactics: what do we tests? auto-manual testing: output == expected oracle tests (full specification) partial specification \"Does not crash\" Just call your function with valid input Round trip e.g., json.dumps / json.loads Metamorphic Relation Although we don't know the relation between input and output, we might know how output should change. Stateful Testing (N)DFA RuleBasedStateMachine Observability --hypothesis-show-statistics timing stats perf breakdown exit reasons Use note() if you like print-debugging","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/escape-from-auto-manual-testing-with-yypothesis","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/escape-from-auto-manual-testing-with-yypothesis"},{"title":"Getting Started Testing in Data Science","text":"Material video slide-origin slide-flatten Note Data Science Workflows One-off analysis Exploratory Well defined problem Data Science Domain Problem Working with Pandas DataFrames Pandas built-in testing methods from pandas.util.testing import assert_frame_equal check_like check_dtype Working with DB mock data that should be get from database and test only behavior Generating Dataframe for Testing hypothesis","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/getting-started-testing-in-data-science","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/getting-started-testing-in-data-science"},{"title":"Practical decorators","text":"Material video Note usage examples timing limited call (e.g., function can be called once per minute) memoization (i.e. caching) add class attribute (e.g., better __repr__ )","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/practical-decorators","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/practical-decorators"},{"title":"Scraping a Million Pokemon Battles: Distributed Systems By Example","text":"Material video slide Note Scalability and 3 \"Pillars\" Concurrency of Resources Asserting for Correctness Resilience against Failures New Problems Loss of determinism Long startup times (e.g., initialize message queue) Increases flakiness Correctness Resilience","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/scraping-a-million-pokemon-battles-distributed-systems-by-example","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/scraping-a-million-pokemon-battles-distributed-systems-by-example"},{"title":"Solve Your Problem With Sloppy Python","text":"Material video Note Personal Description It's an introduction for how to use python as the shell script The rules fail early and noisily stop writing the shell script The guidelines try automating even more try new libraries/technologies","tags":"PyCon AU 2018","url":"https://lee-w.github.io/pycon-note/posts/pycon-au-2018/2019/08/solve-your-problem-with-sloppy-python","loc":"https://lee-w.github.io/pycon-note/posts/pycon-au-2018/2019/08/solve-your-problem-with-sloppy-python"},{"title":"The Zen of Python Teams","text":"Material video Note Beautiful is better than ugly. Be kind Accelerate Explicit is better than implicit Documenting process makes it easier for others to join you. resource onboard guide how to contribute where to get help Keep your conversation about work in public Document your peoeple I enjoy working on ... I get excited by ... I struggle when ... I feel appreciated when ... Ask me for help with ... Simple is better than complex. Build meaningful relationships with small interactions Error should never pass silently With humans, we have to rely on other humans to tell us when we broke them. In the face of ambiguity, refuse the temptation to guess. Now is better than never. Doing and being wrong is a lot better than not doing at all.","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/the-zen-of-python-teams","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/the-zen-of-python-teams"},{"title":"Time to take out the rubbish: garbage collector","text":"Material video Note We do not use __del__() to clean up. Use with instead","tags":"PyCon US 2019","url":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/time-to-take-out-the-rubbish-garbage-collector","loc":"https://lee-w.github.io/pycon-note/posts/pycon-us-2019/2019/08/time-to-take-out-the-rubbish-garbage-collector"},{"title":"Watch out for Safety Bandits!","text":"Material video Note The \"Essential Two\" security problems Problems someone else made safety Problems you made bandit","tags":"PyCon AU 2018","url":"https://lee-w.github.io/pycon-note/posts/pycon-au-2018/2019/08/watch-out-for-safety-bandits","loc":"https://lee-w.github.io/pycon-note/posts/pycon-au-2018/2019/08/watch-out-for-safety-bandits"},{"title":"Why you should care about types: How Python typing helped my team scale","text":"Material video Note Are Python types Pythonic? import this >>> Explicit is better than implicit . >>> Readability counts >>> In the face of ambiguity , refuse the temptation to guess . If nothing else, because Guido said so 😆 Type 101 Collection, Union, Optional, Type from typing import Type , TypeVar class BaseClass : pass class DerivedClass ( BaseClass ): pass T = TypeVar ( \"T\" , bound = BaseClass ) def factory ( clazz : Type [ T ]) -> T : return claszz () Tool GitHub - Instagram/MonkeyType: A system for Python that generates static type annotations by collecting runtime types","tags":"PyCon AU 2018","url":"https://lee-w.github.io/pycon-note/posts/pycon-au-2018/2019/08/why-you-should-care-about-types","loc":"https://lee-w.github.io/pycon-note/posts/pycon-au-2018/2019/08/why-you-should-care-about-types"}]};