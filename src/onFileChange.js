const forkProcess = require('./forkProcess');

module.exports = context => {
    context.watcher.unwatch(context.filename);
    context.watcher.add(context.filename);

    if (context.process) context.process.kill();

    forkProcess(context);
};
