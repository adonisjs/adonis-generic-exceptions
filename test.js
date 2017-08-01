'use strict'

/*
 * adonis-generic-exceptions
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const test = require('japa')
const GE = require('.')

test('exported modules should be instantiable', (assert) => {
  const invalidArgumentException = new GE.InvalidArgumentException()
  const runtimeException = new GE.RuntimeException()
  const httpException = new GE.HttpException()
  const logicalException = new GE.LogicalException()

  assert.instanceOf(invalidArgumentException, GE.InvalidArgumentException)
  assert.instanceOf(runtimeException, GE.RuntimeException)
  assert.instanceOf(httpException, GE.HttpException)
  assert.instanceOf(logicalException, GE.LogicalException)
})
