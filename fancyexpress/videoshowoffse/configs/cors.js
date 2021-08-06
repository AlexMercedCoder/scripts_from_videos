/////////////////////////////
// CORS CONFIGURATION OBJECT
////////////////////////////

// Allowed origins
const whitelist = ["*"]

// Exporting of cors config object
// DOCS: https://www.npmjs.com/package/cors
export default {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }