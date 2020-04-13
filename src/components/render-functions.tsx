import React from 'react';

export const inputRenderFunction = (
  inputType: string,
  inputName: string,
  data: any,
  refRegister: any
) => {
  const decimalPlaces = inputName === 'interestRate' ? '0.001' : '0.01';
  if (inputType === 'radio') {
    return (
      <div key="input-1">
        <div className="form-check mr-1">
          <input
            id={inputName + '1'}
            className="form-check-input"
            type="radio"
            name={inputName}
            ref={refRegister}
            value="true"
          />
          <label className="form-check-label" htmlFor={inputName + '1'}>
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            id={inputName + '2'}
            className="form-check-input"
            type="radio"
            name={inputName}
            ref={refRegister}
            value="false"
            defaultChecked={true}
          />
          <label className="form-check-label" htmlFor={inputName + '2'}>
            No (wrap into loan)
          </label>
        </div>
      </div>
    );
  } else {
    return (
      <input
        className="form-control"
        name={inputName}
        defaultValue={data}
        ref={refRegister}
        key="input-1"
        type="number"
        placeholder="0.0"
        step={decimalPlaces}
      ></input>
    );
  }
};
