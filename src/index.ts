import currentTickNextTick from './currentTickNextTick';
import currentTickPromise from './currentTickPromise';
import currentTickMutationObserver from './currentTickMutationObserver';

export default currentTickNextTick || currentTickPromise || currentTickMutationObserver;
