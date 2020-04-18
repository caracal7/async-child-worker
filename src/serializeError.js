module.exports = error => {
    if (error instanceof Error) {
        return Object.getOwnPropertyNames(error).reduce((result, key) => {
            result[key] = error[key];
            return result;
        }, {});
    } else return error;
};
