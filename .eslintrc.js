module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
      "es6": true
  },
  // add your custom rules here
  'rules': {
    'no-new': 0,
    'dot-location': 0,
    'no-useless-constructor': 0,
    'no-trailing-spaces': 0,
    'no-unused-vars': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'eol-last': 0,
    // allow async-await
    'generator-star-spacing': 0
  }
};
