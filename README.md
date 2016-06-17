SwansTwo
========

This is the repository for the second version of my personal
website. This site is built to make it simple to serve static content
via nginx, with local development enabled by docker.

Local Docker
------------

Get the docker-machine running (since I'm working on OSX):

```
docker-machine up
eval $(docker-machine env)
```

Build and run the container:

```
docker build -t swanstwo .
docker run -d -p 8080:80 swanstwo
```
