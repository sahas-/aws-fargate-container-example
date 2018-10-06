## Local dev

### Build the docker image
`docker build . -t simple-node-example:latest`

### Run in local
`docker run -p 8080:8080 simple-node-example:latest`

### Test in local
`curl localhost:8080`

## Fargate setup

setup [fargate cli](https://github.com/jpignata/fargate) in your local 

## AWS setup
 + setup fargate cli with appropriate credentials
    - note: this role needs permission to ECS, ECR, ELB, Cloudwatch logs
### Steps
+ login to container registry and create the repo
    - create a repo `simple-node-example`
+ tag the container
    - `docker tag simple-node-example:latest blah:latest`
+ upload to container registry
    - `docker push blah:latest`
+ create load balancer
    - `fargate lb create simple-node-example -p 80`
    - `fargate lb info simple-node-example` - grab the public DNS from this
+ create service
    - `fargate service create simple-node-example --port HTTP:8080 --lb simple-node-example --image blah:latest`
    - `fargate service info simple-node-example`
+ test the service
    - `curl publicDNS`
