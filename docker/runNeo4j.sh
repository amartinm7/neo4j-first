#!/usr/bin/env bash
docker run \
    --publish=7474:7474 --publish=7687:7687 \
    --volume=$HOME/WebstormProjects/neo4j-first/docker/live/data:/data \
    --volume=$HOME/WebstormProjects/neo4j-first/docker/live/logs:/logs \
    neo4j:3.0
