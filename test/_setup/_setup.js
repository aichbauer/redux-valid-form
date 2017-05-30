/* setup.js */
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

const copyProps = (src, target) => {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
};

const setup = () => {
  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js',
  };

  return copyProps(window, global);
};

export default setup;

