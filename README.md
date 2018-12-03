![Neo4j](./_media/neo4j.png)

# Neo4j simple project for starting
under the docker folder, run the next command to execute the neo4j instance: 
```
sh runNeo4j.sh
```
Do login via http and change the password. For login user/pass neo4j/neo4j.
Setup the password in the setting.json file.
run the index.js to run the main program:
```
npm install
node index.js 
```

for stopping docker
```$xslt
docker rm `docker ps -aq -f status=running`
docker rm `docker ps -aq -f status=exited`
```

# Operations Manual
https://neo4j.com/docs/operations-manual/current/introduction/
