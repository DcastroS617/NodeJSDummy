//CommonJS, every file is module (by default)
//modules - Encapsulated code (only share minimum)
const names = require('./name');
const sayHi = require('./Utils');
const data = require('./AlternativeSolution');
require('./MindGrenade')

sayHi('Pedrillo');
sayHi('Marcella');
sayHi(names.marcus);