import { LogLevel } from './LogLevel';
export interface Logging {
    verbose(str: string, file: string, func: string, line: number, column: number): void;
    debug(str: string, file: string, func: string, line: number, column: number): void;
    info(str: string, file: string, func: string, line: number, column: number): void;
    warning(str: string, file: string, func: string, line: number, column: number): void;
    error(str: string, file: string, func: string, line: number, column: number): void;
    log(str: string, level: LogLevel, file: string, func: string, line: number, column: number): void;
}
