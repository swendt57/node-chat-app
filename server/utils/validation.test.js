const expect = require('expect');

const {isRealString} = require('./validation.js');

describe('testing the isRealString validator', () => {
    it('should reject non-string values', () =>  {
        let result = (isRealString(234));

        expect(result).toBe(false);
    });

    it('should reject string with only spaces', () =>  {
        let result = isRealString('    ', '    ');

        expect(result).toBe(false);
    });

    it('should allow string with non-space characters', () =>  {
        let result = isRealString(' abc123 ', '  123abc  ');

        expect(result).toBe(true);
    });
});