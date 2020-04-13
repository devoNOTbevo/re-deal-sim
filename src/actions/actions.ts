import { CalculatorState, StateBuilder, IState } from '../state';

export function updateData(state: any, payload: any) {
  const newState = new CalculatorState({ ...state.data, ...payload } as IState);
  const built = new StateBuilder(newState).build();
  built.monthlyRent = payload.monthlyRent;
  return {
    ...state,
    data: built,
  };
}
