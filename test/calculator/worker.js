let result = 2;

/s/23kjh2314
console.log('Worker started');

module.exports = {
  async set(value) {
    result = value;
  },

  async get() {
    return result;
  },

  async add(value) {
    result += value;
  },

  async sub(value) {
    result -= value;
  },

  async mul(value) {
    result *= value;
  },

  async div(value) {
    result /= value;
  },

  async clear() {
    result = 0;
  }
};
