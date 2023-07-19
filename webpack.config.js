const path = require('path');

module.exports = {
    mode: 'none',
    target: 'node',
    entry: './lib/wrapper.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'wrapper.js',
    }
};
