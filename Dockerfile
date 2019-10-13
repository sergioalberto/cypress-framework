FROM cypress/base:10

WORKDIR /app

COPY package.json .
COPY cypress.json .
COPY applitools.config.js .
COPY package-lock.json .

# dependencies will be installed only if the package files change
RUN npm install -D

RUN npx cypress verify
