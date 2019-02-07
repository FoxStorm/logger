"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
class PrintLogger {
    verbose(str, file, func, line, column) {
        this.log(str, LogLevel_1.LogLevel.verbose, file, func, line, column);
    }
    debug(str, file, func, line, column) {
        this.log(str, LogLevel_1.LogLevel.debug, file, func, line, column);
    }
    info(str, file, func, line, column) {
        this.log(str, LogLevel_1.LogLevel.info, file, func, line, column);
    }
    warning(str, file, func, line, column) {
        this.log(str, LogLevel_1.LogLevel.warning, file, func, line, column);
    }
    error(str, file, func, line, column) {
        this.log(str, LogLevel_1.LogLevel.error, file, func, line, column);
    }
    log(str, level, file, func, line, column) {
        PrintLogger.printLogger(`[ ${level} ] ${str} (${file}:${func}:${line}:${column})`);
    }
}
PrintLogger.printLogger = console.log;
exports.PrintLogger = PrintLogger;
//# sourceMappingURL=PrintLogger.js.map