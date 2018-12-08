const promise = typeof Promise === 'function' ? Promise.resolve() : null;

export default promise ? fn => promise.then(() => fn()) : null;
