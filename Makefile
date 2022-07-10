SERVER_SERVICE=server
DOCKER_COMPOSE_OPTIONS := -d --remove-orphans

SH= docker exec -it $(SERVER_SERVICE)

start: down up logs

up:
	export LD_LIBRARY_PATH=/usr/local/lib && docker-compose up $(DOCKER_COMPOSE_OPTIONS)

build:
	export LD_LIBRARY_PATH=/usr/local/lib && docker-compose build

bash:
	$(SH) sh

logs:
	docker-compose logs -f

down:
	docker-compose down