# Cypress Framework
On this repository, you will find a basic examples how to create end-to-end testing with Cypress.

## Setting
```shell script
sudo npm install -g puppeteer --unsafe-perm=true --allow-root
export NODE_TLS_REJECT_UNAUTHORIZED=0 && npm install
```

## Run locally
```shell script
npm i -D
npm run test
```

## Run docker
```shell script
docker-compose build
docker-compose up
docker-compose down
```

Note:
To run the eyes applitools scenario, replace `apiKey` on `applitools.config.js` file.
