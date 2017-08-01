'use strict'

/*
 * adonis-generic-exceptions
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const NE = require('node-exceptions')

/**
 * Runtime exception is thrown when some unexpected behavior
 * is detected at rutime.
 *
 * @class RuntimeException
 */
class RuntimeException extends NE.RuntimeException {
  /**
   * Missing config exception is thrown when configuration
   * is not define for a given key
   *
   * @method missingConfig
   *
   * @param  {String}      key
   * @param  {String}      configLocation
   *
   * @return {RuntimeException}
   */
  static missingConfig (key, configLocation) {
    const message = `${key} is not defined inside ${configLocation} file`
    return new this(message, 500, 'E_MISSING_CONFIG')
  }

  /**
   * This exception is raised when appKey is missing
   * inside the config file but required to make
   * some operation
   *
   * @method missingAppKey
   *
   * @param  {String}      provider - Name of the provider who want to use the app key
   *
   * @return {RuntimeException}
   */
  static missingAppKey (provider) {
    const message = `Make sure to define appKey inside config/app.js file before using ${provider} provider`
    return new this(message, 500, 'E_MISSING_APP_KEY')
  }

  /**
   * This exception is raised when configuration is not
   * complete for a given config file or key
   *
   * @method incompleteConfig
   *
   * @param  {String}         forKey
   * @param  {Array}          missingKeys
   * @param  {String}         file
   *
   * @return {RuntimeException}
   */
  static incompleteConfig (forKey, missingKeys, file) {
    const message = `Make sure to define ${missingKeys.join(', ')} on ${forKey} inside ${file}`
    return new this(message, 500, 'E_INCOMPLETE_CONFIG')
  }

  /**
   * Invoke instance of this class with a custom message
   * status and error code
   *
   * @method invoke
   *
   * @param  {String} message
   * @param  {Number} [status = 500]
   * @param  {String} [code = E_RUNTIME_ERROR]
   *
   * @return {RuntimeException}
   */
  static invoke (message, status = 500, code = 'E_RUNTIME_ERROR') {
    return new this(message, status, code)
  }
}

module.exports = RuntimeException
