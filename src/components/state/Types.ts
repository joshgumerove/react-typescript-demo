interface CounterState {
  count: number;
}

interface ResetAction {
  type: "RESET";
  payload?: number;
}

interface UpdateAction {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
}

type CounterAction = UpdateAction | ResetAction;

export type { CounterState, CounterAction };
