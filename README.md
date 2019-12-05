# Cypress Framework
On this repository, you will find a basic examples how to create end-to-end testing with Cypress.

## Run locally
```shell script
npm i -D
npm run test
npm run cypress
```

## Run docker
```shell script
docker-compose build
docker-compose up
docker-compose down
```

Note:
To run the eyes applitools scenario, replace `apiKey` on `applitools.config.js` file.

# BackstopJS

## Setting
```shell script
sudo npm install -g puppeteer --unsafe-perm=true --allow-root
export NODE_TLS_REJECT_UNAUTHORIZED=0 && npm install
./node_modules/backstopjs/cli/index.js init
```

## Run
```shell script
./node_modules/backstopjs/cli/index.js reference
./node_modules/backstopjs/cli/index.js test

 or

npm run backstop-reference
npm run backstop-test
npm run backstop-approve
npm run backstop-report
```
