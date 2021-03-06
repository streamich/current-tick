import currentTick from '..';

const sleep = t => new Promise(r => setTimeout(r, t));

test('not null in testing environment', () => {
  expect(typeof currentTick).toBe('function');
});

test('works', async () => {
  const fn = jest.fn();
  currentTick!(fn);
  expect(fn).toHaveBeenCalledTimes(0);
  await sleep(1);
  expect(fn).toHaveBeenCalledTimes(1);
});
