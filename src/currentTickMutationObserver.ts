declare const WebKitMutationObserver: any;

const Observer = typeof MutationObserver === 'object'
  ? MutationObserver
  : typeof WebKitMutationObserver === 'object'
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
