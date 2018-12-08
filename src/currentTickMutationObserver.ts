/**
 * NOTE: Code in this file has been tested manually. If you
 * want to modify it in any way, you have to add tests
 * for this file.
 */

declare const WebKitMutationObserver: any;

const Observer = typeof MutationObserver === 'function'
  ? MutationObserver
  : typeof WebKitMutationObserver === 'function'
    ? WebKitMutationObserver
    : null;

export default Observer
  ? fn => {
    const observer = new Observer(() => fn());
    const element = document.createTextNode('');
    observer.observe(element, {characterData: true});
    element.data = '';
  }
  : null;
