const moment = require('moment');


let someTimestamp = moment().valueOf();
console.log(someTimestamp);

let createdAt = 1234;

let date = moment(createdAt);
// date.add(1, 'years');
//
// console.log(date.format('MMM Do, YYYY'));\

console.log(date.format('h:mm a'));
