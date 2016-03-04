require('babel-register'); // babel registration (runtime transpilation for node)

global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';
global.__SERVER__ = true;
global.__CLIENT__ = false;

require('./src/server');
