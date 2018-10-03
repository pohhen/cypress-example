# cypress-example
Web test example with Cypress.io

Easy setup for test development.
Use NodeJS package manager for local installation.
Or run it inside Docker container.
Both ways the results can be viewed on local machine.

## How to run tests locally with NPM

0. Create temporary folder for output called 'cypress'
1. Use npm to build project
2. Run test with npm
3. Check `./cypress` for the output files

Place your tests in `./tests/`.

### Commands
```sh
mkdir -p cypress
npm install
npm run cypress:run
```

## How to run tests locally with NPM

0. Create temporary folder for output called 'cypress'
1. Use Docker to build project
2. Run test with Docker
3. Check `./cypress` for the output files (if mounted)

### Commands
```sh
#Build
docker build -t <cypress_container_name> .
#Run without mounting
docker run --rm <cypress_container_name>
#Run with mounting - output will be in cypress folder
docker run --rm -v $(pwd)/cypress:/usr/src/app/cypress <cypress_container_name>
```
