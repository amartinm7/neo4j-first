![Neo4j](./_media/neo4j.png)

# Neo4j simple project for starting

## Setup runNeo4j file for running docker

Edit the runNeo4j file for setting up the folders data and logs:
```$xslt
    --volume=$HOME/WebstormProjects/neo4j-first/docker/live/data:/data \
    --volume=$HOME/WebstormProjects/neo4j-first/docker/live/logs:/logs \
```

Under the docker folder, run the next command to execute the neo4j instance: 
```
sh runNeo4j.sh
```

## Login into the neo4j console to change the password
Do login via http and change the password. For login user/pass neo4j/neo4j.
Setup the password in the 'setting.json' file.
run the index.js to run the main program:
```
npm install
node index.js 
```

## Docker, for cleaning porpouses run these commands
for stopping docker
```$xslt
docker rm `docker ps -aq -f status=running`
docker rm `docker ps -aq -f status=exited`
```

for deleting images
```$xslt
docker images
docker rmi imageID
```

# Operations Manual
https://neo4j.com/docs/operations-manual/current/introduction/
