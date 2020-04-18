const chokidar  = require('chokidar');

const forkProcess  = require('./forkProcess');
const onFileChange  = require('./onFileChange');
const createProxyHandler  = require('./createProxyHandler');

module.exports = (
    filename,
    { watch = false, debug = false } = {}
) => {
    const context = {
        filename,
        initialized: null,
        init: null,
        process: null,
        api: Object.create(null),
        commands: new Map(),
        watcher: watch ? chokidar.watch(filename) : null,
        watch,
        debug
    };

    forkProcess(context);

    if (context.watch) context.watcher.on('change', onFileChange.bind(null, context));
    return new Proxy(Object.create(null), createProxyHandler(context));
};
