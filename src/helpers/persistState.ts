import {load as loadFromLocalStorage} from 'src/helpers/localStorage.ts';

const STATE_KEY = 'state';

export const loadState = (): Record<string, unknown> =>
  loadFromLocalStorage(STATE_KEY);

export const saveState = (state: Record<string, unknown>): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, serializedState);
  } catch (err) {
    // todo do something with error
    /* eslint-disable-next-line  no-console */
    console.exception(err);
  }
};
