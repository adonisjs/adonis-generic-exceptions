'use strict'

/*
 * adonis-generic-exceptions
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const InvalidArgumentException = require('./src/InvalidArgumentException')
const RuntimeException = require('./src/RuntimeException')
const { HttpException, LogicalException } = require('node-exceptions')

module.exports = {
  InvalidArgumentException,
  RuntimeException,
  HttpException,
  LogicalException
}
