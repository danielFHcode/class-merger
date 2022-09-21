# Class Merger

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/probot/template/blob/master/LICENSE)
[![NPM](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/class-merger/v/1.0.0)

### Table of contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)

## Installation

To install you can either use npm:

```console
npm i class-merger
```

Or just download the [one file from github](https://github.com/danielFHcode/class-merger/blob/master/classMerger.js).

To include the file in client side js use a script tag:

```html
<body>
  <script src=".../classMerger.js" defer></script>
</body>
```

To include the file in node js use require:

```js
// There is no need to import anything but the mergeClasses function, since there is nothing.
const { mergeClasses } = require("class-merger");
```

## About

`Class Merger` is a simple one-function library for creating multi inheritance classes, inspired by the ["real" class expression mixin method](https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/).

## Usage

As mentioned earlier, `Class Merger` is a one-function library - meaning it only consist of one function.

And that one function is the `mergeClasses` function, which you can use like so:

```js
class a {
  x() {}
}
class b {
  y() {}
}
class c extends mergeClasses(a, b) {
  z() {}
}
/*
Expected result: A class named c with methods x, y & z.
*/
```

The specialty of using the [class expression based mixin method](https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/) is that you can use built in js inheritance options such as `super`:

```js
class a {
  x() {}
}
class b {
  y() {}
}
class c extends mergeClasses(a, b) {
  z() {
    super.x();
    super.y();
  }
}
/*
Expected result: A class named c with a working super object containing methods from classes a & b.
*/
```
