/*
 * Creates an axios instance with a base URL to the server.
 * This way we avoid having to add the base of the URL individually in the calls.
 */
const axios = require('axios')
module.exports = axios