import { EMERGENCY, ALERT, CRITICAL, ERROR, WARNING, NOTICE, INFO, DEBUG } from './Logger'

/**
 * ConsoleAdapter
 */
export default class ConsoleAdapter {
    static _levelToMethodMapping = {
        [EMERGENCY]: 'error',
        [ALERT]: 'error',
        [CRITICAL]: 'error',
        [ERROR]: 'error',
        [WARNING]: 'warn',
        [NOTICE]: 'warn',
        [INFO]: 'info',
        [DEBUG]: 'log'
    };

    /**
     * Public methods
     */

    log(level, message) {
        if (level in ConsoleAdapter._levelToMethodMapping) {
            console[ConsoleAdapter._levelToMethodMapping[level]](message);
        }
    }
}