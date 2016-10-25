# webpack-es6-project
A template for webpack based es6 projects, including useful tools and configurations.

## Usage
1. Use Node.js version defined in .nvmrc file
  -`nvm install`
  -`nvm use`
2. Install npm packages from package.js
  -`npm install`
3. Change package attributes (add your name, version, repo)
  -`nano package.json`
4. Install required modules to be used for developing (webpack loaders, ...)
  -`npm install webpack --save-dev` (already in package, this is just an example)
5. Install required modules to be used at runtime
  -`npm install jquery --save` (already package, this is just an example)
