import currentTickNextTick from '../currentTickNextTick';

const sleep = t => new Promise(r => setTimeout(r, t));

test('not null in testing environment', () => {
  expect(typeof currentTickNextTick).toBe('function');
});

test('works', async () => {
  const fn = jest.fn();
  currentTickNextTick!(fn);
  expect(fn).toHaveBeenCalledTimes(0);
  await sleep(1);
  expect(fn).toHaveBeenCalledTimes(1);
});
