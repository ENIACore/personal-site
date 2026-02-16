#!/bin/bash

docker build -t personal-site .

docker tag personal-site:latest eniacore/personal-site:latest

docker login

docker push eniacore/personal-site:latest
