SwansTwo
========

This is the repository for the second version of my personal
website. This site is built to make it simple to serve static content
via nginx, with local development enabled by docker.


Local Docker
------------

Build and run the container:

```
docker build -t swanstwo .
docker run -d -p 8080:80 -v "$(pwd)/static:/usr/share/nginx" swanstwo
```

Then visit localhost:8080


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
gulp css
gulp sass
gulp articles
gulp index_pages
gulp media
gulp favicon
gulp fonts
```

Gulp can also be run to watch for changes and auto-build them with:

```
gulp watch
```

Deploying To a host
--------------------------

## Provisioning / Setup

Provision a server on a host. Make sure to setup keypair
authentication for ssh.

On the host, the following tools will need to be installed.

```
apt-get install docker pandoc nodejs nodejs-legacy npm
npm install gulp-cli --global
```

In the home directory of your user, clone this repo (only needs to be
done during setup):

```
git clone git@github.com:swans-one/swanstwo.git
```

## Deploying

Deployment is automated through the simple script `deploy.sh`, which
takes a single argument, the destination to ssh to and deploy:

```
./deploy.sh user@host
```
