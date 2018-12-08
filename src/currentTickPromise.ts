export default typeof Promise === 'object'
  ? fn => Promise.resolve().then(() => fn())
  : null;
