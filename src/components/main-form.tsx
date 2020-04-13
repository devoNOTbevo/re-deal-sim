import React from 'react';
import { useStateMachine } from 'little-state-machine';
import { updateData } from '../actions/actions';
import FormGroup from './form-group';
import { useFormContext } from 'react-hook-form';

export default function MainForm(props: any) {
  const { state, action } = useStateMachine(updateData);
  const methods = useFormContext(); // methods contain all useForm functions
  const { config, submitHandler } = props;
  return (
    <form onSubmit={submitHandler}>
      {config.map((item: any, idx: number) => {
        const data = state.data[item.key];
        return (
          <FormGroup
            key={idx}
            inputName={item.key}
            labelText={item.label}
            data={data}
            refRegister={methods.register}
            dataUnit={item.unit}
            inputType={item.type}
          ></FormGroup>
        );
      })}
      <button className="btn btn-primary" type="submit">
        Update Numbers
      </button>
    </form>
  );
}
