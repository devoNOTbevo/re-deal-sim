import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import { updateData } from './actions/actions';
import formConfig from './form-config';
import MainForm from './components/main-form';

function App() {
  const methods = useForm({ defaultValues: { monthlyRent: 0 } });
  const { state, action } = useStateMachine(updateData);
  const onSubmit = (data: any) => {
    console.log(data);
    console.log(state.data);
    action(data);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Real Estate Calculator</span>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <FormContext {...methods}>
              <MainForm
                config={formConfig}
                submitHandler={methods.handleSubmit(onSubmit)}
              ></MainForm>
            </FormContext>
          </div>
          <div className="col-4">
            <div className="row mt-3">
              <pre>
                {JSON.stringify(
                  state && state.data ? state.data.toJSON() : {},
                  null,
                  2
                )}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
