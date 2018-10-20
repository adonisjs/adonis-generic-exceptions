'use strict'

/*
 * adonis-generic-exceptions
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

import * as test from 'japa'
import * as GE from './src/index'

test('exported modules should be instantiable', (assert) => {
  const invalidArgumentException = new GE.InvalidArgumentException('test')
  const runtimeException = new GE.RuntimeException('test')
  const httpException = new GE.HttpException('test')
  const logicalException = new GE.LogicalException('test')

  assert.instanceOf(invalidArgumentException, GE.InvalidArgumentException)
  assert.instanceOf(runtimeException, GE.RuntimeException)
  assert.instanceOf(httpException, GE.HttpException)
  assert.instanceOf(logicalException, GE.LogicalException)
})
