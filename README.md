# AdonisJs Generic Exceptions 🚀
> Customized exceptions for AdonisJs

[![NPM Version][npm-image]][npm-url]

This repo contains some helpful classes to throw uniform exceptions through out the application. Ofcourse you can throw exceptions using `new Error()` but using this package will help in throwing informative exceptions.

## Setup
Install package using npm.

```shell
npm i @adonisjs/generic-exceptions
```

## Usage
The package exports all exceptions from [node-exceptions](https://poppinss.github.io/node-exceptions/docs/index.html) and adds additional methods to the `RuntimeException` class.

```js
const { InvalidArgumentException } = require('@adonisjs/generic-exceptions')

const message = 'Model.create requires an object'
const status = 400
const code = 'E_INVALID_ARGUMENT'

throw new InvalidArgumentException(message, status, code)
```

The `status` must be a valid HTTP status code and `code` is a unique error code to recognize an exception. AdonisJs error codes starts with `E_`, for example: `E_MISSING_CONFIG`.

## RuntimeException
The following static methods are added to the runtime exception to make the adonisJs related exceptions consistent.

#### missingConfig(key, file)
#### missingAppKey(providerName)
#### incompleteConfig(missingKeys, file)
#### invoke(message, status, [code])

Checkout the complete API docs [here](https://adonisjs.github.io/adonis-generic-exceptions/docs/classes/main.runtimeexception.html)

[npm-image]: https://img.shields.io/npm/v/@adonisjs/generic-exceptions.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@adonisjs/generic-exceptions
