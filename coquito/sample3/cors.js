// whilelist of urls for when in production
const whitelist = ['http://example1.com', 'http://example2.com']

// corsOptions obect for the cors middlware, essentially blocks requests from urls not in the whitelist
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

export default corsOptions
  