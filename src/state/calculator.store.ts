import type { State } from "../types/state";

// Initial state
let state: State = { bill: 0, tipPercent: 0, people: 0 };

// Subscriptions
const subs = new Set<(state: State) => void>();
const notify = () => {
  subs.forEach((fn) => fn(state));
  console.log("[Calculator Store] state", state);
};

export const calculator = {
  getState: () => state,

  subscribe(fn: (state: State) => void) {
    subs.add(fn);
    fn(state);
    return () => subs.delete(fn);
  },

  setBill(value: number) {
    state = { ...state, bill: Math.max(0, value) };
    notify();
  },
  setTipPercent(value: number) {
    state = { ...state, tipPercent: Math.max(0, value) };
    notify();
  },
  setPeople(value: number) {
    state = { ...state, people: Math.max(0, Math.floor(value)) };
    notify();
  },
  reset() {
    state = { bill: 0, tipPercent: 0, people: 0 };
    notify();
  },
};
