#!/bin/sh

node git_hook.js &
./hugo -w &
./hugo server ws --port=8080 --bind=0.0.0.0 &

