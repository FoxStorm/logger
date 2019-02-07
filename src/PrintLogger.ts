import { LogLevel } from './LogLevel'
import { Logging } from './Logging'

export class PrintLogger implements Logging {
  protected static readonly printLogger: (message?: any, ...optionalParams: any[]) => void = console.log

  verbose (str: string, file: string, func: string, line: number, column: number) {
    this.log(str, LogLevel.verbose, file, func, line, column)
  }

  debug (str: string, file: string, func: string, line: number, column: number) {
    this.log(str, LogLevel.debug, file, func, line, column)
  }

  info (str: string, file: string, func: string, line: number, column: number) {
    this.log(str, LogLevel.info, file, func, line, column)
  }

  warning (str: string, file: string, func: string, line: number, column: number) {
    this.log(str, LogLevel.warning, file, func, line, column)
  }

  error (str: string, file: string, func: string, line: number, column: number) {
    this.log(str, LogLevel.error, file, func, line, column)
  }

  log (str: string, level: LogLevel, file: string, func: string, line: number, column: number) {
    PrintLogger.printLogger(`[ ${level} ] ${str} (${file}:${func}:${line}:${column})`)
  }
}
