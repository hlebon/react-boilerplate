# What is this?

## creating a react project from scratch
1. `npm init`
2. `git init`
3. `src/index.js` -> console.log("test");
4. install `webpack`: `npm install --save-dev webpack webpack-cli`
5. `package.json` and `./node_modules` was added, `webpack` and `webpack cli` was added to `./node_modules/bin`
6. execute `./node_modules/bin/webpack` find `src/index.js` and create out file `./dist/main.js`
7. with no config web pack by default run in production mode
8. run `node dist/main.js` and it print `test`