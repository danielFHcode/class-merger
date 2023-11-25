> [!WARNING]
> This version of `class-merger` has been deprecated. The source code has been moved to https://github.com/danielFHcode/class-merger-2

# Class Merger

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/probot/template/blob/master/LICENSE)
[![NPM](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://www.npmjs.com/package/class-merger/v/1.0.0)

### Table of contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)

## About

`Class Merger` is a simple one-function library for creating multi inheritance classes, inspired by the ["real" class expression mixin method](https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/).

## Installation

To install you can either use npm:

```console
npm i class-merger
```

Or just download the [one file from github](https://github.com/danielFHcode/class-merger/blob/master/classMerger.js).

To include the file in client side js use a script tag:

```html
<body>
  <script src="/path/to/classMerger.js" defer></script>
</body>
```

To include the file in node js use require:

```js
// There is no need to import anything but the mergeClasses function, since there is nothing.
const { mergeClasses } = require("class-merger");
```

## Usage

### Basic Usage

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

### Using Super

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

### Extend Class After Creation

It's also worth noting you can use this library for extending classes after you create them. You see, because `Class Merger` uses the [class expression based mixin method](https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/), when you write:

```js
class a{}
class b{}
class c{}
mergeClasses(a,b,c)
```

What essentially happens is:

```js
class c{}
class b extends c{}
class a extends b{}
// Note that classes b & c aren't actually modified, but rather newly created copies of them are.
```

So, you could use that to your advantage, and do something like this to extend classes after you created them:

```js
class a{}
class b{}
class c{}

a = mergeClasses(
  a, /* extends */ b, c
)
```
