module.exports = {
    PING: '@@async-child-worker/PING',
    PONG: '@@async-child-worker/PONG',
    PING_PONG_TIMEOUT: 30000,
    PING_INTERVAL: 50,

    RECEIVE_TIMEOUT: 10000,

    COMMAND_REQUEST: '@@async-child-worker/COMMAND_REQUEST',
    COMMAND_RECEIVE: '@@async-child-worker/COMMAND_RECEIVE',
    COMMAND_SUCCESS: '@@async-child-worker/COMMAND_SUCCESS',
    COMMAND_FAILURE: '@@async-child-worker/COMMAND_FAILURE',
}
