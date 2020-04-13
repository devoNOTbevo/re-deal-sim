import React from 'react';
import InputAddon from './input-addon';
import { inputRenderFunction } from './render-functions';

export default function FormGroup(props: any) {
  const {
    inputName,
    labelText,
    data,
    dataUnit,
    refRegister,
    inputType,
  } = props;
  const addonType = dataUnit === '$' ? 'prepend' : 'append';
  let addOn = null;

  if (dataUnit) {
    addOn = (
      <InputAddon addonType={addonType} addonText={dataUnit} key="addon-1" />
    );
  }
  const renderArray = [
    addOn,
    inputRenderFunction(inputType, inputName, data, refRegister),
  ];
  if (addonType === 'append') {
    renderArray.reverse();
  }
  return (
    <div className="row mt-1">
      <label htmlFor={inputName} className="col-sm-4 col-form-label">
        {labelText}
      </label>
      <div className="form-group col-sm-6">
        <div className="input-group ">
          {renderArray.map((component) => component)}
        </div>
      </div>
    </div>
  );
}
