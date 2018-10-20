/**
 * @module main
 */

/*
 * adonis-generic-exceptions
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

import * as NE from 'node-exceptions'

/**
 * Runtime exceptions are raised when expectations to execute an
 * operation are not met.
 */
export class RuntimeException extends NE.RuntimeException {
  static get errorsDoc () {
    return 'http://adonisjs.com/errors'
  }

  /**
   * The value is missing inside the config file
   */
  public static missingConfig (key: string, configLocation: string) {
    const message = `${key} is not defined inside ${configLocation} file`
    return new this(message, 500, 'E_MISSING_CONFIG', this.errorsDoc)
  }

  /**
   * The value of appKey is missing inside the config/app.js file
   */
  public static missingAppKey (provider: string) {
    const message = `Make sure to define appKey inside config/app.js file before using ${provider} provider`
    return new this(message, 500, 'E_MISSING_APP_KEY', this.errorsDoc)
  }

  /**
   * The value is missing inside the environment variables
   */
  public static missingEnvKey (key) {
    const message = `Make sure to define environment variable ${key}.`
    return new this(message, 500, 'E_MISSING_ENV_KEY', this.errorsDoc)
  }

  /**
   * Certain keys are missing inside the config
   */
  public static incompleteConfig (missingKeys: string[], file: string, forKey?: string) {
    const baseMessage = `Make sure to define ${missingKeys.join(', ')}`
    const message = forKey ? `${baseMessage} on ${forKey} inside ${file}` : `${baseMessage} inside ${file}`
    return new this(message, 500, 'E_INCOMPLETE_CONFIG', this.errorsDoc)
  }

  /**
   * Raise custom runtime error
   */
  public static invoke (message, status = 500, code = 'E_RUNTIME_ERROR') {
    return new this(message, status, code, this.errorsDoc)
  }
}
