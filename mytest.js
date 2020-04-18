
const createWorker = require('./src/');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log('Hi')

const app = async () => {
    const worker = createWorker(require('path').resolve(__dirname, 'test/calculator/worker.js'), {
        debug: false,
        watch: true,
    });

    setInterval(async () => {
        console.log('makeRPC')

        await worker.add(20); // 30
        await worker.div(2); // 15
        await worker.sub(7); // 8
        await worker.mul(5); // 40

        console.log(await worker.get());



    }, 500);


    await sleep(1000000);


    worker.kill();
};


app();
