import { CpfPipe } from './cpf.pipe';

describe('CpfPipe', () => {
  it('create an instance', () => {
    const pipe = new CpfPipe();
    expect(pipe).toBeTruthy();
  });

  it('if null should return empty', () => {
    const pipe = new CpfPipe();
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should return formatted', () => {
    const pipe = new CpfPipe();
    expect(pipe.transform(17667385084)).toBe('176.673.850-84');
  });
});
