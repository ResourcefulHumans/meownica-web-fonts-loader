.DEFAULT_GOAL := help
.PHONY: test clean

jssrcfiles := $(shell find test/*.js -type f)
jsbuildfiles := $(patsubst test/%,build/test/%,$(jssrcfiles))
jsbuildfiles += build/index.js

build/test/%.js: test/%.js
	@mkdir -p $(dir $@)
	./node_modules/.bin/browserify < ./node_modules/.bin/babel $< > $@

build/index.js: index.js
	@mkdir -p $(dir $@)
	./node_modules/.bin/browserify < ./node_modules/.bin/babel $< > $@

build/test/index.html: test/index.html build/test/mocha.css build/test/mocha.js
	@mkdir -p $(dir $@)
	cp $< $@

build/test/mocha.css: ./node_modules/mocha/mocha.css
	@mkdir -p $(dir $@)
	cp $< $@

build/test/mocha.js: ./node_modules/mocha/mocha.js
	@mkdir -p $(dir $@)
	cp $< $@

clean: ## Clean build artifacts
	rm -rf build

test: $(jsbuildfiles) build/test/index.html ## Build and run tests
	@mkdir -p build

help: ## (default), display the list of make commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
