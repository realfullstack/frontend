PROJECT_ROOT:=.

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  install    to install dependencies at system level"
	@echo "  lint		to check for linting issues"
	@echo "  fix-lint	to fix linting issues"
.PHONY: help


run:
	npm run dev
.PHONY: run

build:
	npm run build
.PHONY: build

start:
	npm run start
.PHONY: start

clean:
	npm run clean
.PHONY: clean
