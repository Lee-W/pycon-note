Title: How to Write Deployment-friendly Applications
Date: 2020-09-23 11:20
Category: PyCon US 2018
Tags: Code Quality
Slug: how-to-write-deployment-friendly-applications
Authors: Lee-W

## Speaker
Hynek Schlawack

## Material
* [video](https://www.youtube.com/watch?v=wuCpCkrfeMs&feature=emb_title)
* [slide](https://speakerdeck.com/hynek/how-to-write-deployment-friendly-applicationshttps://speakerdeck.com/hynek/how-to-write-deployment-friendly-applications)
* [article](https://hynek.me/talks/deploy-friendly/)

## Note

![architecture](/images/post-images/how-to-write-deployment-friendly-applications/architecture.jpg)

### Configuration
* What varies?
* use environment variables
    * setting
        * [direnv](https://direnv.net/)
        * [envconsul](https://github.com/hashicorp/envconsul)
    * consuming
        * **[environ_config](https://github.com/hynek/environ-config)**
    * templating
        * [envsubst](https://www.gnu.org/software/gettext/manual/html_node/envsubst-Invocation.html)
        * [confd](confd)
        * [consul-template](https://github.com/hashicorp/consul-template)
* don't put sensitive data into env variables
    * [HashiCorp's vault](https://www.vaultproject.io/)
    * docker secrets
    * aws secret manager
    * microsoft azure key value
    * google cloud KMS

### Load balancing
* rolling update
* make sure you handle SIGTERM
* how load balancer know you're ready?
    * readiness
        * e.g., `/healthz`, `/__heartbeat__`, `/-/ready`, `/-/readiness`
    * liveness
        * e.g., `/-/healthy`, `/-/liveness`, `/__lbheartbeat__`
    * more
        * `__version__`
        * `/-/metrics`
        * `/-/log-level`
