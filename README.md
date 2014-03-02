# testsuite

Let's say your project has the following structure:

```
my_project
|-- lib
|    |-- server
|    |    +-- foo
|    |         +-- MyModule.js
|    +-- ui
|         +-- bar
|              +-- AnotherModule.js
+-- test
     |-- server
     |    +-- foo
     |         +-- MyModuleTest.js
     +-- ui
          +-- bar
               +-- AnotherModuleTest.js
```

[nodeunit](http://github.com/caolan/nodeunit) won't descend through the directory to find your tests[1].  How dull.  Instead you need an aggregator file to manually pull in your tests or some other workaround, the maintenance of which is tedious.

## Usage

1. Add to the `devDependencies` section of your `package.json` file and run `npm install`.
2. Create a file `suite.js` under `test` that contains:

```javascript
module.exports = require("testsuite")(__dirname);
```

Then you can run your whole suite with:

```
$ nodeunit test/suite.js
```

That's all there is to it.

---

[1] There's [this](https://github.com/caolan/nodeunit/pull/54) but I don't think it's getting merged any time soon.
