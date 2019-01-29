import { LogLevel } from './LogLevel'
import { Logging } from './Logging'

export class PrintLogger implements Logging {
  protected static readonly printLogger: (message?: any, ...optionalParams: any[]) => void = console.log

  log (str: string, level: LogLevel, file: string, func: string, line: number, column: number) {
    PrintLogger.printLogger(`[ ${level} ] ${str} (${file}:${func}:${line}:${column})`)
  }
}
