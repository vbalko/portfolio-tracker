const debugConfig = require('./debug');

const showQuery = false;

const log = (message, ...optionalParams) => {
    console.log(message, optionalParams.length ? optionalParams : "");
}

const debug = (message, ...optionalParams) => {
    if (debugConfig.debug) {
        console.log(`>> ${message}`,optionalParams.length ? optionalParams : "");
    }
}

const query = (message, ...optionalParams) => { 
    if (debugConfig.query) {
        console.log(`==>> ${message}`,optionalParams.length ? optionalParams : "");
    }
}

const error = (message, ...optionalParams) => {
    console.log(`ERROR: ${message}`,optionalParams.length ? optionalParams : "");
}



/**
 *
 *
 * @param {*} value
 */
const setShowQuery = (value) => {   
    showQuery = value;
}

module.exports = {
    log,
    debug,
    query,
    setShowQuery,
    error
}
