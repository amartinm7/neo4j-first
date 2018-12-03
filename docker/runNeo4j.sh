#!/usr/bin/env bash
docker run \
    --publish=7474:7474 --publish=7687:7687 \
    --volume=$HOME/projects/forTesting/neo4j-first/docker/data:/data \
    --volume=$HOME/projects/forTesting/neo4j-first/docker/logs:/logs \
    neo4j:3.0

