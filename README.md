# current-tick

A tiny modern no-nonsense "current-tick" implementation that equeues your function to be executed
later __within the current event loop cycle__, exactly what unfortunately named
[`process.nextTick`](https://nodejs.org/api/process.html#process_process_nexttick_callback_args) does in Node.js,
but `current-tick` also works in the browser.

It will try below methods in the following order:

1. `process.nextTick`
2. `Promise`
3. `MutationObserver`
4. `WebkitMutationObserver`

`current-tick` will be equal to `null` if your evironment does not support any of the above methods.

```js
import currentTick from 'current-tick';

if (!currentTick) {
  console.log('Your environment is not supported!');
}

currentTick(() => console.log('world!'));
console.log('Hello');
// 👉 Hello world!
```

If you use TypeScript, because `currentTick` may be `null`, if you know for sure your evironment supports
at least one of the methods, you can use `!` to tell the TypeScript compiler that `currentTick` is not `null`.

```ts
currentTick!(fn);
```

Alternatively, you can define an `asap` method, that will 100% always exist, but
__will not guarantee that your function is always executed within the current event loop cycle__.

```js
const asap = currentTick ||
  typeof setImmediate === 'function'
    ? setImmediate
    : fn => setTimeout(fn, 0);
```

`asap` function is already prepared for you:

```js
import asap from 'current-tick/lib/asap';

asap(() => console.log('world!'));
console.log('Hello');
// 👉 Hello world!
```

## License

[Unlicense](LICENSE) &mdash; public domain.
