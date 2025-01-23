const utils = require('./utils');

describe('generateRandomStringProm', () => {
  it('should reject if length is not a number', async () => {
    await expect(utils.generateRandomStringProm('not a number')).rejects.toThrow('Length must be a number');
  });

  it('should reject if length is less than 1', async () => {
    await expect(utils.generateRandomStringProm(0)).rejects.toThrow('Length must be greater than 0');
  });

  it('should resolve with a string of correct length', async () => {
    const length = 10;
    const result = await utils.generateRandomStringProm(length);
    expect(result).toHaveLength(length);
  });
});