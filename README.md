# Selenium

## How to run

Firstly run "npm i" to upload all needed packages

Then there are two options

- Run each test scenario manually
  ```sh
  $ node ./node_modules/jasmine/bin/jasmine.js --config=./support/jasmine.json
  $ start http://localhost:8888?spec=<SPEC>
  ```
- Run predefined scenarios all at once using
  ```sh
  $ npm test
  ```
