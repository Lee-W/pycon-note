Title: Getting started with Kubernetes and container orchestration
Date: 2019-12-30 09:40
Category: PyCon US 2019
Tags: tutorial, container, kubernetes
Slug: getting-started-with-kubernetes-and-container-orchestration
Status: draft
Authors: Lee-W

[TOC]

## Speaker
*  Jérôme Petazzoni
*  AJ Bowen

## Material
* [video](https://www.youtube.com/watch?v=J08MrW2NC1Y)
* [slide](https://pycon2019.container.training/#1)

## Note

### Setup
* [mosh (MObile SHell)](https://github.com/mobile-shell/mosh)
    * SSH over UDP
    * Pro: works fast even on lossy connection
    * Use case: hotel or conference WiFi

### Build a testing Kubernetes Environment
* [Play with Kubernetes Classroom](https://training.play-with-kubernetes.com)
    * destroyed after 4 hours
* [Trainer tools to create and prepare local for Docker workshops](https://github.com/jpetazzo/container.training/tree/master/prepare-local)

### Container
* `docker-compose down` v.s. `ctrl-c`
    * `ctrl-c`: `docker-compose stop`
    * `docker-compose down`: removes the container, network as well (volumes are not removed by default. but `-v` can be passed as well)

### Kubernetes Concepts
* A container management system
* Runs and Manage containerized applications on a cluster
* What can Kubernetes do?
    * Place an public / internal load balancer in front of containers
    * Replace containers with new image
        * Keep processing request during the upgrade
    * Basic autoscaling
    * Blue/green deployment, canary deployment
    * Long running services, but also batch (one-off) jobs
    * Overcommit our cluster and evict low-priority jobs
    * Run services with stateful data (databases etc.)
    * Fine-grained access control defining what can be done by whom on which resources
    * Integrating third party services (service catalog)
    * Automating complex tasks (operators)

### Kubernetes Architecture

![Kubernetes Architecture 1](/images/post-images/getting-started-with-kubernetes-and-container-orchestration/15776809076780.jpg)

![Kubernetes Architecture 2](/images/post-images/getting-started-with-kubernetes-and-container-orchestration/15776812955752.jpg)

* Kubenetes Components
    * nodes
        * a container engine
        * `kubelet` (node agent)
        * kube-proxy
    * control plane
        * API server
            * scheduler and controller manager
        * `etcd` (the only stateful component)
        * master
* Running the control plane on special nodes
    * It is common to reserve a dedicated node for the control plane.
        * (Except for single-node development clusters, like when using minikube)
    * Don't run application on master
    * When high availability is required, each service of the control plane must be resilient
* Do we need to run Docker at all?
    * On our development environments, CI pipelines ...
        * Yes, almost certainly
    * On our production servers
        * Yes (today)
        * Probably not (in the future)
* What happens when master dies
    * Everything is still running and try to connect master
        * Once the master is up, they're going to re-sync
        * But we should not remove `etcd`
    * `etcd` should be highly available

### Interacting with Kubernetes through the Kubernetes API
* Kubernetes API
    * (mostly) RESTful
    * create, read, update, delete resources
    * common resource types are:
        * **node** (a machine — physical or virtual — in our cluster)
        * **pod** (group of containers running together on a node)
        * **service** (stable network endpoint to connect to one or multiple containers)
* When we scale up, we can only scale up a pod but not container
* One node can have more than one pod

![Kubetnetes concetps](/images/post-images/getting-started-with-kubernetes-and-container-orchestration/15776817907833.jpg)


### Declarative vs imperative
* Declarative in Kubernetes
    * Write a **spec** (**spec** describe how we want the thing to be)
    * Push it to API server
    * API Server validates the **spec**
    * Store it in `etcd`
    * A controller will notice that **spec** and act upon it

### Kubernetes network model
* The cluster (nodes and pods) is one big flat IP network
* namespace: Easy way to control access in multiple pods
* The good:
    * Everything can reach everything
* The less good:
    * If you want security, you need to add network poclicies
    * Pods have level 3 (IP) connectivity, but services are level 4
* In practice
    * Don't worry about `kube-proxy` performance for most case. But, if necessary, try `kube-router`

------

### First contact with `kubectl`
* `kind`, `apiVersion`, `metadata` keys exist in all Kubenetes api

#### run kubernetes

* `stern` <- nice `kubectl` log viewer

* p.163
    * This `LoadBalancer` is only for cloud load balancer

#### Shipping images with a registry

#### Labels and selectors
* In yaml, yes becomes true
    * Thus, "yes" should be used

* `kubectl get endpoints rng -w`

#### Rolling updates
`kubectl set image deployment worker worker=dockercoins/worker:v0.2`

### Question
* Q: Multiple machine needed? since master node cannot be used to run pods
    * A: not true for `minikube`
        * for production, we might have to but we might not care since it should be provided by others (e.g. aws or ops-team)
* Q: multiple pods per nodes? 為什麼效能會提升
    * A: 因為 pod 可能有效能限制，或者一次能處理的 request 有限，這時候就會 pending
* Q: In our example, per image per node?
    * 對，要透過改 yaml 做到，現在 cli 不給你這麼做
* Q: Why kubenete? kind of like aws-elb? Is the main advantage scale up and no downtime?
    * 很多理由，這些都是
* Q: What is the 10.36... address?
    * 內網

### Kubectl

```sh
# Check whether kubernetes are ok
kubectl get nodes
```
