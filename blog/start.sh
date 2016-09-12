#!/bin/sh

./hugo
node git_hook.js &
./hugo server ws --port=8080 --bind=0.0.0.0 

