# -*- coding: utf-8 -*-

import os
import shutil
import sys
import datetime

from invoke import task
from pelican.server import ComplexHTTPRequestHandler, RootedHTTPServer


CONFIG = {
    # Local path configuration (can be absolute or relative to tasks.py)
    'deploy_path': 'output',
    # Github Pages configuration
    'github_pages_branch': 'master',
    'commit_message': "'Publish site on {}'".format(datetime.date.today().isoformat()),
    # Port for `serve`
    'port': 8000,
}


PELICAN_CMD = 'pipenv run pelican'


@task
def clean(c):
    """Remove generated files"""
    if os.path.isdir(CONFIG['deploy_path']):
        shutil.rmtree(CONFIG['deploy_path'])
        os.makedirs(CONFIG['deploy_path'])


@task
def build(c):
    """Build local version of site"""
    c.run(f'{PELICAN_CMD} -s pelicanconf.py')


@task
def rebuild(c):
    """`build` with the delete switch"""
    c.run(f'{PELICAN_CMD} -d -s pelicanconf.py')


@task
def regenerate(c):
    """Automatically regenerate site upon file modification"""
    c.run(f'{PELICAN_CMD} -r -s pelicanconf.py', pty=True)


@task
def serve(c):
    """Serve site at http://localhost:8000/"""

    class AddressReuseTCPServer(RootedHTTPServer):
        allow_reuse_address = True

    server = AddressReuseTCPServer(
        CONFIG['deploy_path'],
        ('', CONFIG['port']),
        ComplexHTTPRequestHandler
    )

    sys.stderr.write('Serving on port {port} ...\n'.format(**CONFIG))
    server.serve_forever()


@task
def reserve(c):
    """`build`, then `serve`"""
    build(c)
    serve(c)


@task
def preview(c):
    """Build production version of site"""
    c.run(f'{PELICAN_CMD} -s publishconf.py')


@task
def publish(c):
    """Publish to production via rsync"""
    c.run(f'{PELICAN_CMD} -s publishconf.py')


@task
def github(c):
    """Publish to GitHub Pages"""
    preview(c)
    c.run('pipenv run ghp-import -b {github_pages_branch} '
          '-m {commit_message} '
          '{deploy_path} -p'.format(**CONFIG))
