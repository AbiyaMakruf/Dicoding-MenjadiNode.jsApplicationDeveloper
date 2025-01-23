const {generateRandomStringSync} = require('./utils');

describe('generateRandomStringSync', () => {
    test('should throw an error if length is not a number', () => {
        expect(() => generateRandomStringSync('a')).toThrow('Length must be a number');
    });
    
    test('should throw an error if length is less than 1', () => {
        expect(() => generateRandomStringSync(0)).toThrow('Length must be at least 1');
    });
    
    test('should return a string of the specified length', () => {
        const result = generateRandomStringSync(10);
        expect(result).toHaveLength(10);
    });
    
    test('should return a different string each time', () => {
        const result1 = generateRandomStringSync(10);
        const result2 = generateRandomStringSync(10);
        expect(result1).not.toEqual(result2);
    });
});
 