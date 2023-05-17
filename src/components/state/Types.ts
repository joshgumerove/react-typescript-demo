interface CounterState {
  count: number;
}

interface Action {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
}

export type { CounterState, Action };
