Title: PySpark: avoiding common pitfalls and keeping your sanity
Date: 2019-12-23 11:48
Category: PyCon CA 2019
Tags: Spark
Slug: pyspark-avoiding-common-pitfalls-and-keeping-your-sanity
Status: draft
Authors: Lee-W

## Speaker
Jonathan

## Note
* 25 minutes of sanity
    1. Improving code readability
    2. Understand the type dichotomy
* Readability
    * Pipelining in PySpark via method chaining
* Types dichotomy
    * Prefer using `IntegerType()` or `LongType()` when dealing with integers
        * unless you have a (very) good reason not to
        * and are willing to test for overflow
    * Take the time to "type" your columns
    * Use API doc to know the required type of the column
        * It's usually provided in the function description
    * Use Python's typing and PySpark's return type for UDFs
    * Prefer schema-full data format(Parquet, Avro, ORC), avoid share CSV internally
* Q & A
    * Would you recommend using pyspark in small scale (e.g., a few GBs)?
        * Won't recommend.
