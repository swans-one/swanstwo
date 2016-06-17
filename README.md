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

To see the webpage running locally inside docker, first find the ip of
the locally running vm via:

```
docker-machine ip
```

Then visit this ip, at port 8080 (probably something like 192.168.99.101:8080).


Local Development with Gulp
---------------------------

We're using gulp to automate the process of static assets. Running

```
gulp
```

Will build all assets for the project and place them in the
appropriate place in the `./static` directory, which docker builds
draw from, placing them in the correct place for nginx to serve.

The default gulp command runs the following sub-commands:

```
gulp html
```
