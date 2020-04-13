import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CalculatorState, StateBuilder, IState } from './state';
import {
  StateMachineProvider,
  createStore,
  DevTool,
} from 'little-state-machine';

interface StoreState {
  [key: string]: any;
  data: IState;
}

function log(store: StoreState) {
  console.log('log', store);
}

const initState: CalculatorState = new StateBuilder()
  .setMonthlyRent(1250)
  .build();

// create your store
createStore(
  {
    data: initState,
  } as StoreState,
  {
    name: 'initial',
    middleWares: [log],
    syncStores: {
      externalStoreName: 'dummy',
      transform: ({ currentStoreData }) => {
        const newState = new CalculatorState({
          ...currentStoreData.data,
        } as IState);
        return { data: new StateBuilder(newState).build() };
      },
    },
  }
);

ReactDOM.render(
  <React.StrictMode>
    <StateMachineProvider>
      {process.env.NODE_ENV !== 'production' && <DevTool />}
      <App />
    </StateMachineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
