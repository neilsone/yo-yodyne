#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

SITENAME = u'Yo-Yodyne'
SITEURL = ''

PATH = 'content'
STATIC_PATHS = ['images', 'appEngineConfig']
EXTRA_PATH_METADATA = {
            'appEngineConfig/app.yaml': {'path': 'app.yaml'},
                }

PAGE_URL = '{slug}.html'
PAGE_SAVE_AS = '{slug}.html'

TIMEZONE = 'America/Los_Angeles'

DEFAULT_LANG = u'en'

DIRECT_TEMPLATES = ['index', 'archives','categories']
THEME = "svbhack"

OUTPUT_PATH = 'output/static'
# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

ARCHIVES_SAVE_AS = 'articles.html'
# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
