import { FonePipe } from './fone.pipe';

describe('FonePipe', () => {
  it('create an instance', () => {
    const pipe = new FonePipe();
    expect(pipe).toBeTruthy();
  });

  it('when length is greater than 12 should return formatted', () => {
    const pipe = new FonePipe();
    expect(pipe.transform('1234567890123')).toBe('+12 (34) 56789-0123');
  })

  it('when length is greater than 11 should return formatted', () => {
    const pipe = new FonePipe();
    expect(pipe.transform('123456789012')).toBe('+12 (34) 5678-9012');
  })

  it('when length is greater than 10 should return formatted', () => {
    const pipe = new FonePipe();
    expect(pipe.transform('12345678901')).toBe('(12) 34567-8901');
  })

  it('when length is greater than 9 should return formatted', () => {
    const pipe = new FonePipe();
    expect(pipe.transform('1234567891')).toBe('(12) 3456-7891');
  })

  it('when length is greater than 5 should return formatted', () => {
    const pipe = new FonePipe();
    expect(pipe.transform('1234567')).toBe('(12) 3456-7');
  })

  it('when length is greater than 1 should return formatted', () => {
    const pipe = new FonePipe();
    expect(pipe.transform('12')).toBe('(12) ');
  })

  it('when length is 1 should return formatted', () => {
    const pipe = new FonePipe();
    expect(pipe.transform('1')).toBe('(1');
  })

  it('if null should return empty', () => {
    const pipe = new FonePipe();
    expect(pipe.transform(null)).toBe('');
  })
});
