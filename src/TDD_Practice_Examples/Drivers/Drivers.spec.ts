import { status } from './Drivers';

describe('Drivers', () => {
  test('status() should return the correct enum, based on the given age.', () => {
    expect(status(15)).toEqual('too young');
  });
  test('status() should return the correct enum, based on the given age.', () => {
    expect(status(86)).toEqual('too old');
  });
  test('status() should return the correct enum, based on the given age.', () => {
    expect(status(25)).toEqual('eligible');
  });
});
