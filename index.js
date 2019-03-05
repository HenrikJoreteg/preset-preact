var transformReactJsx = require('@babel/plugin-transform-react-jsx')
var jsxSyntax = require('@babel/plugin-syntax-jsx')

module.exports = function() {
  return {
    plugins: [[transformReactJsx, { pragma: 'h' }], jsxSyntax]
  }
}
