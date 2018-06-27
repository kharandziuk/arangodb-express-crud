.phony: get post

get:
	curl localhost:3000/

post:
	curl -X POST localhost:3000/
