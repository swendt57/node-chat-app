let moment = require('moment');

let generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
        // createdAt: new Date().getTime()
    }
};

let generateLocationMessage = (from, latitude, longitude) => {
    return {
        from: from, //or just "from"
        url: `https://www.google.com/maps/?q=${latitude},${longitude}`,
        createdAt: moment().valueOf()
    }
}

module.exports = {generateMessage, generateLocationMessage};