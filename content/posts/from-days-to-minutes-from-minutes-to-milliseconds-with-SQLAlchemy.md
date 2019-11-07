Title: From days to minutes, from minutes to milliseconds with SQLAlchemy
Date: 2019-11-07 11:48
Category: PyCon US 2019
Tags: database, efficiency
Slug: from-days-to-minutes-from-minutes-to-milliseconds-with-SQLAlchemy
Authors: Lee-W

## Speaker
Leonardo Rochael Almeida

## Material
* [video](https://www.youtube.com/watch?v=kEShMV4VfWE)

## Note
* SQLAlchemy
    * SQL Expression Language (a Python DSL)
    * Object Relational Mapper (ORM)

* The ORM Trap
    * Sensible Python Code → Bad SQL access patterns
    * unnoticeable at low data volumes
        * e.g., dev and early production

* The Fix: Let the DB do its job
    * Be aware of implicit queries
        * especially from relationships
    * Aim for O(1) queries per request/job/activity
        * Avoid looping through model instances
