import { LogLevel } from './LogLevel';
import { Logging } from './Logging';
export declare class PrintLogger implements Logging {
    protected static readonly printLogger: (message?: any, ...optionalParams: any[]) => void;
    log(str: string, level: LogLevel, file: string, func: string, line: number, column: number): void;
}
