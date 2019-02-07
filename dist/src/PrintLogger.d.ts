import { LogLevel } from './LogLevel';
import { Logging } from './Logging';
export declare class PrintLogger implements Logging {
    protected static readonly printLogger: (message?: any, ...optionalParams: any[]) => void;
    verbose(str: string, file: string, func: string, line: number, column: number): void;
    debug(str: string, file: string, func: string, line: number, column: number): void;
    info(str: string, file: string, func: string, line: number, column: number): void;
    warning(str: string, file: string, func: string, line: number, column: number): void;
    error(str: string, file: string, func: string, line: number, column: number): void;
    log(str: string, level: LogLevel, file: string, func: string, line: number, column: number): void;
}
