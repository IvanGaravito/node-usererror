# node-usererror

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/IvanGaravito/node-usererror.svg?branch=master)](https://travis-ci.org/IvanGaravito/node-usererror)
[![devDependency Status](https://david-dm.org/IvanGaravito/node-usererror/dev-status.svg)](https://david-dm.org/IvanGaravito/node-usererror#info=devDependencies)
[![NPM pkg](https://img.shields.io/npm/v/node-usererror.svg)](https://www.npmjs.com/package/proxyvator)
[![NPM dm](https://img.shields.io/npm/dm/node-usererror.svg)](https://www.npmjs.com/package/proxyvator)
[![Gratipay](https://img.shields.io/gratipay/IvanGaravito.svg)](https://gratipay.com/IvanGaravito)

> User errors for Node.js

This [Node.js](http://nodejs.org/) module extends Error class by adding a `code` property. This allows you to easily
identify instances at your error handler, just like system errors.

## Requirements

All you need to get it with you [Node.js](http://nodejs.org/). If you're using a Linux system, you can use
[node-install](https://github.com/IvanGaravito/node-install) for an easy installation.

## Installation

To use have this module installed, just follow the next instructions.

### NPM

``` bash
ૐ » your-project-dir λ npm install node-usererror
```

### GIT

``` bash
ૐ » your-project-dir λ git clone https://github.com/IvanGaravito/node-usererror.git
```

## Usage

Just require the module and use it like if it were the Error class:

``` js
var UserError = require('node-usererror')

try {
  throw new UserError('My own error', 'EOWN')
} catch (err) {
  if (err.code === 'EOWN') {
    console.log(err)  // Outputs: { [Error: My own error] code: 'EOWN', message: 'My own error' }
  } else {
    console.log('Something went wrong, aborting...')
    process.exit(1)
  }
}
```

## API

**Example**  
``` js
var UserError = require('node-usererror')
// ...
throw new UserError('My own error', 'EOWN')
```
<a name="module_node-usererror..UserError"></a>

### node-usererror~UserError ⇐ <code>Error</code>
**Kind**: inner class of <code>[node-usererror](#module_node-usererror)</code>  
**Extends:** <code>Error</code>  
<a name="new_module_node-usererror..UserError_new"></a>

#### new UserError(message, code)

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | The error message |
| code | <code>any</code> | The error code you want to use for this error |


## License

The MIT License (MIT)

Copyright (c) 2016  Ivan Garavito <ivangaravito@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
