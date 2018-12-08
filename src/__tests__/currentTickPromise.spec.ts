import currentTickPromise from '../currentTickPromise';

const sleep = t => new Promise(r => setTimeout(r, t));

test('not null in testing environment', () => {
  expect(typeof currentTickPromise).toBe('function');
});

test('works', async () => {
  const fn = jest.fn();
  currentTickPromise!(fn);
  expect(fn).toHaveBeenCalledTimes(0);
  await sleep(1);
  expect(fn).toHaveBeenCalledTimes(1);
});
