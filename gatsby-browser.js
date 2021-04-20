/**
 * Implement Gatsby's Browser APIs in this file.
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const ReactDOM = require('react-dom')

exports.replaceHydrateFunction = () => {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback)
  }
}
