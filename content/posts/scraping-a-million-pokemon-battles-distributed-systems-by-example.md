Title: Scraping a Million Pokemon Battles: Distributed Systems By Example
Date: 2019-08-13 15:20
Category: PyCon US 2019
Tags: core
Slug: scraping-a-million-pokemon-battles-distributed-systems-by-example
Authors: Lee-W

* [video](https://www.youtube.com/watch?v=QvZqttX9uXc)
* [slide](https://docs.google.com/presentation/d/14v2huYsC5rJYUR3sWBXu0YN33b6tWRFraEgf9FwRPiE/edit#slide=id.g56f736b0fc_1_545)

* Scalability and 3 "Pillars"
    * Concurrency of Resources
    * Asserting for Correctness
    * Resilience against Failures

* New Problems
    * Loss of determinism
    * Long startup times (e.g., initialize message queue)
    * Increases flakiness

* Correctness
![Correctness]({static}/images/post-images/scraping-a-million-pokemon-battles-distributed-systems-by-example/15647353098656.jpg)

* Resilience
![Resilience]({static}/images/post-images/scraping-a-million-pokemon-battles-distributed-systems-by-example/15647353190256.jpg)
