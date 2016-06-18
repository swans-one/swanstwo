gulp

docker kill swanstwo-dev
docker rm swanstwo-dev

docker build -t swanstwo .

docker run -d -p 8080:80 --name swanstwo-dev swanstwo
