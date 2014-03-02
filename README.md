# testsuite

Let's say your project has the following structure:

```
- lib
  - server
    - foo
      - MyModule.js
  - ui
    - bar
      - AnotherModule.js
- test
  - server
    - foo
      - MyModuleTest.js
  - ui
    - bar
      - AnotherModuleTest.js
```

[nodeunit](http://github.com/caolan/nodeunit) won't recurse through the directory to find your tests [1].  How dull.  Instead you need an aggregator file to manually pull in your tests, the maintenance of which is tedious.

## Usage

Create a file `suite.js` under `test` like this:

```
var testsuite = require("testsuite");

module.exports = testsuite(__dirname);
```

Then you can run your whole suite with:

```
$ nodeunit test/suite.js
```

That's all there is to it.

[1] There's [this](https://github.com/caolan/nodeunit/pull/54) but I don't think it's getting merged any time soon.