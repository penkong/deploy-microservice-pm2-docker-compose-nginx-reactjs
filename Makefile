it:
	git pull && docker-compose up --build -d

commit:
	git add . && git commit -m 'more on' && git push origin master

down:
	docker-compose down