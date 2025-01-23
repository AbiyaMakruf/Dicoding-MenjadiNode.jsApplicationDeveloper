const utils = require('./utils');

describe('generateRandomString', () => {
    it('should throw an error if length is not a number', (done) => {
        utils.generateRandomString('not a number', (err, result) => {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('Length must be a number');
            done();
        });
    });

    it('should throw an error if length is less than 1', (done) => {
        utils.generateRandomString(0, (err, result) => {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('Length must be greater than 0');
            done();
        });
    });

    it('should generate a string with the specified length', (done) => {
        const length = 10;
        utils.generateRandomString(length, (err, result) => {
            expect(err).toBeNull();
            expect(result).toHaveLength(length);
            done();
        });
    });
});