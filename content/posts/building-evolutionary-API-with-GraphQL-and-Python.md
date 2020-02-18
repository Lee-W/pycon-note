Title: Building Evolutionary API with GraphQL and Python
Date: 2019-12-30 09:40
Category: PyCon US 2019
Tags: tutorial, Web
Slug: building-evolutionary-API-with-GraphQL-and-Python
Status: draft
Authors: Lee-W

## Speaker
Dave Anderson

## Material
* [GraphQL Python Tutorial Reference](https://gist.github.com/dvndrsn/9b3655dd90a16b3a3226f69ee62f6ed0)
* [video](https://www.youtube.com/watch?v=DWgD5iloSHs)
* [slides](https://slides.com/dvndrsn/graphql-python-tutorial)

## Note
### Introduction
* GraphQL is a query language for your API
    * constantly evolving API

* Focus
    * Why GraphQL
        * Avoid data over-fetching by client
    * How to use it in Python

* One request for all data needed
    * Avoid N+1 requests for requests in clients

* Unifing API for any kind of data source

## Comparison between libs

* `Graphene`
    * code-first
* `Airadne`
    * schema-first, supports asyncio
* `Strawberry`
    * Code-first, asyncio, Dataclass-based
