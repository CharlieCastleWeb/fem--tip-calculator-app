import type { State } from "../types/state";

export function tipTotal(s: State) {
  return s.bill * (s.tipPercent / 100);
}
export function tipPerPerson(s: State) {
  return s.people > 0 ? tipTotal(s) / s.people : 0;
}
export function totalPerPerson(s: State) {
  return s.people > 0 ? (s.bill + tipTotal(s)) / s.people : 0;
}
