FROM        cypress/browsers:chrome67
# Create app directory
RUN         mkdir -p /usr/src/app
WORKDIR     /usr/src/app
COPY        package*.json /usr/src/app/
RUN         npm install
COPY        cypress.json /usr/src/app/
COPY        fixtures /usr/src/app/fixtures/
COPY        plugins /usr/src/app/plugins/
COPY        support /usr/src/app/support/
COPY        tests /usr/src/app/tests/
CMD         npx cypress run
