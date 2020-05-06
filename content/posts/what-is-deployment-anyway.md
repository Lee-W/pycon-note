Title: What is deployment, anyway?
Date: 2020-05-06 11:23
Category: PyCon US 2020
Tags: deployment
Slug: what-is-deployment-anyway
Authors: Lee-W

## Speaker
Katie McLaughlin

## Material
* [video](https://www.youtube.com/watch?v=8vstov3Y7uE&feature=youtu.be)

## Note
* What is django deployment anyway?
    1. copy code to host
    2. update database, if needed
    3. update static, if needed
    4. start web server

### 1. Run Django
* Host
    * Platform as a Service
        * your responsibility: django app, data
        * managed for you: web server, os, hardware, storage, networking
        * e.g., Heroku
    * Infrastructure as a Service
        * your responsibility: django app, data, web server os
        * managed for you: hardware, storage, networking
        * e.g., AWS

### 2. Connect to a database
* No opinion?
    * Use postgres
* Database hosting
    * DBaaS
        * your responsibility:
        * django's responsibility: migrations
        * managed for you: storage, backups, persistence, maintenance

### 3. Serve static file
* simple assets
* cloud storage
    * [django-storages](https://django-storages.readthedocs.io/en/latest/)
* media uploads
* asset compilation
