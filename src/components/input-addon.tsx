import React from 'react';

export default function InputAddon(props: any) {
  const { addonType, addonText } = props;

  return (
    <div className={`input-group-${addonType}`}>
      <span className="input-group-text">{addonText}</span>
    </div>
  );
}
