Title: Building large scale data pipelines by Apache Airflow
Date: 2022-09-12 18:05
Category: PyCon APAC 2022
Tags: data, pipeline, airflow
Slug: building-large-scale-data-pipelines-by-apache-airflow
Authors: Lee-W

## Speaker
黃泰瑋 (Tai-Wei Huang)

## Material
* [video](https://www.youtube.com/watch?v=V97gqcgFcCE)
* [slide](https://drive.google.com/file/d/17J_4FKu1s26rfpTO6MGmq1Qh5jUrkiJh/view)

## Note

### design large scale pipeline

* separate business logic from DAG
* reduce DAG processing time
    * don't import global module
        * import them in function
    * use	 `.airflowignore`
* customize operator
    * don't do heavy computations in `__init__`
    * `pre_execute()`
    * `execute()`
    * `post_execute()`
* use the jinja template over Variable
    * decouple logic from airflow → make unit tests easier to write
* DAG generator
    * extract similar parts among data pipelines

### run large-scale pipeline
* Runner
    * Celery Executor
        * scale up
            * `worker_concurrency`
            * `worker_autoscale`
        * scale out
            * run more workers
    * Kubernetes Executor
* airflow level parameter
    * `max_active_tasks_per_dag`
    * `max_active_runs_per_dag`
* DAG level parameter
    * `max_active_runs`
    * `max_active_tasks`
* task level parameter
    * `max_active_tis_per_dag`
    * `pool`

### manage large scale pipeline
* setup `access_control`
* separate runtime environment → `executor_config`
* cluster policy
    * `task_policy`
    * `dag_policy`
    * `task_instance_mutation_hook`
* failure management
    * `retires`
    * `sla`
    * `sla_miss_callback`
    * `on_failure_callback`
