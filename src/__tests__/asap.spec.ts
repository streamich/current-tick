import asap from '../asap';

const sleep = t => new Promise(r => setTimeout(r, t));

test('should always be awailable', () => {
  expect(typeof asap).toBe('function');
});

test('works', async () => {
  const fn = jest.fn();
  asap(fn);
  expect(fn).toHaveBeenCalledTimes(0);
  await sleep(1);
  expect(fn).toHaveBeenCalledTimes(1);
});
