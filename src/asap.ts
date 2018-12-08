import currentTick from './index';

export default currentTick ||
  typeof setImmediate === 'function'
    ? setImmediate
    : setTimeout;
