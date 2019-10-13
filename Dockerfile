FROM cypress/base:10

WORKDIR /app

# dependencies will be installed only if the package files change
COPY package.json .
COPY cypress.json .
COPY package-lock.json .

RUN npm install -D

RUN npx cypress verify
