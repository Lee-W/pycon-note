# -*- coding: utf-8 -*- #
from __future__ import unicode_literals


PATH = "content"

# Blog Conf
AUTHOR = "Lee-W"
SITENAME = "PyCon Note"
SITEURL = "http://localhost:8000"
SITETITLE = AUTHOR
SITELOGO = None
BROWSER_COLOR = "#333333"

# Locale
TIMEZONE = "Asia/Taipei"
DEFAULT_LANG = "zh-tw"
DEFAULT_DATE_FORMAT = "%Y/%m/%d - %a"

# Page Setting
MAIN_MENU = True
DEFAULT_PAGINATION = 10
MENUITEMS = (
    ("About", "/about.html"),
    ("Archives", "/archives.html"),
    ("Categories", "/categories.html"),
)
DIRECT_TEMPLATES = ("index", "categories", "tags", "authors", "archives", "search")

# Content Setting
DEFAULT_CATEGORY = "Article"
ARTICLE_URL = "posts/{category}/{date:%Y}/{date:%m}/{slug}"
ARTICLE_SAVE_AS = "posts/{category}/{date:%Y}/{date:%m}/{slug}/index.html"
STATIC_PATHS = ["images", "static"]

# Theme Setting
THEME = "theme/elegant"
JINJA_ENVIRONMENT = {"extensions": ["jinja2.ext.i18n"]}
EXTRA_PATH_METADATA = {"images": {"path": "images/"}}
PYGMENTS_STYLE = "default"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Social widget
SOCIAL = (
    ("Linkedin", "https://tw.linkedin.com/in/clleew"),
    ("GitHub", "https://github.com/Lee-W"),
    ("Gitlab", "https://gitlab.com/Lee-W"),
    ("Twitter", "https://twitter.com/clleew"),
    ("RSS", "//lee-w.github.io/feeds/all.atom.xml"),
)

# Markdown extension
MARKDOWN = {
    "extension_configs": {
        "markdown.extensions.extra": {},
        "markdown.extensions.codehilite": {"css_class": "highlight"},
        "markdown.extensions.nl2br": {},
        "markdown.extensions.toc": {"toc_depth": "1-3"},
        "mdx_del_ins": {},
    },
    "output_format": "html5",
}

# Plugin-setting
PLUGIN_PATHS = ["pelican-plugins"]
PLUGINS = [
    "another_read_more_link",
    "render_math",
    "neighbors",
    "share_post",
    "i18n_subsites",
    "tipue_search",
    "tag_cloud",
    "extract_toc",
    "post_stats",
]
ANOTHER_READ_MORE_LINK = ""
