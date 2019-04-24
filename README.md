# What is this?
A step by step to create a react boilerplate

## creating a react project from scratch
1. `npm init`
2. `git init`
3. `src/index.js` -> console.log("test");
4. install `webpack`: `npm install --save-dev webpack webpack-cli`
5. `package.json` and `./node_modules` was added, `webpack` and `webpack cli` was added to `./node_modules/bin`
6. execute `./node_modules/bin/webpack` find `src/index.js` and create out file `./dist/main.js`
7. with no config web pack by default run in production mode
8. run `node dist/main.js` and it print `test`
9. `git rm --cached -r ./node_modules` to untrack a file that was added
10. to execute `webpack` create a script in `package.json` => ` { "scripts": {"build": "webpack" }} `, by default `npm script resolve in `./node_modules/bin/` folder
11. we can run build in development `npm run build -- --mode development` to see `webpack` runtime in develop in `dist/` folder
12. add project to `github`
13. `npm init -y` to see `package.json` structure
14. create a `webpack.config.js` file and modify it, remove `./dist` and run `npm buil` from terminal