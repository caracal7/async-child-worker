const path  = require('path');
const { fork }  = require('child_process');

const { PING, PING_PONG_TIMEOUT, PING_INTERVAL } = require( './constants');
const onEvent  = require('./onEvent');

module.exports = context => {
    context.process = fork(path.resolve(__dirname, 'wrapper.js'), [
        context.filename
    ]);

    context.process.on('message', onEvent.bind(null, context));

    context.initialized = new Promise(async (resolve, reject) => {
        context.init = () => {
            clearInterval(ping);
            resolve();
        };

        const ping = setInterval(() => {
            if(!context.process.connected) {
                const reason = `${path.basename(context.filename)}: Process connection fail! Possible due compilation error...`;
                console.log(reason);
                return reject(reason);
            }
            context.process.send({
                type: PING
            });
        }, PING_INTERVAL);

        context.process.send({
            type: PING
        });

        setTimeout(() => {
            clearInterval(ping);
            reject();
        }, PING_PONG_TIMEOUT);
    });
};
