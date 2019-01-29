"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrintLogger {
    log(str, level, file, func, line, column) {
        PrintLogger.printLogger(`[ ${level} ] ${str} (${file}:${func}:${line}:${column})`);
    }
}
PrintLogger.printLogger = console.log;
exports.PrintLogger = PrintLogger;
//# sourceMappingURL=PrintLogger.js.map