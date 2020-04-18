const getCommandHandler = require('./getCommandHandler');
const getKillHandler = require('./getKillHandler');

module.exports = context => ({
    get(_, command) {
        switch (command) {
            case 'kill':
                return getKillHandler(context, command);
            default:
                return getCommandHandler(context, command);
        }
    }
});
