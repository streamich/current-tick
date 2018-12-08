export default typeof Promise === 'function'
  ? fn => Promise.resolve().then(() => fn())
  : null;
