const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it("should generate correct message object", () => {
        let from = 'Steve';
        let text = 'some message';
        let message = generateMessage(from, text);


        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from: from,
            text:text
        });
    });
});

describe('generateLocationMessage', () => {
    it("should generate location message object", () => {
        let from = 'Steve';
        let latitude = '32.7';
        let longitude = '-117.0';
        let locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage).toInclude({  //Or can just use "from" and "url"
            from: from,
            url: `https://www.google.com/maps/?q=${latitude},${longitude}`
        });
    });
});