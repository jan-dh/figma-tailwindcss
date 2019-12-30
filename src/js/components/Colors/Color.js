import React from 'react';
import { useInput } from '../../helpers/customHooks';

function Color(color) {
  const { name: initalName, value: initalValue, index } = color;
  const [name, setName] = useInput(initalName);
  const [value, setValue] = useInput(initalValue);

  // Functions
  const updateColor = () => {
    const newColor = {
      name,
      value
    };
    color.onChange(newColor, index);
  };
  const removeColor = () => {
    color.removeColor(index);
  };
  // Return
  return (
    <div className="flex mt-4 justify-between items-center">
      <div style={{ backgroundColor: value }} className={`color shadow`}></div>
      <div className="form-field">
        <input
          type="text"
          name="name"
          placeholder={name}
          defaultValue={name}
          className="form-control"
          onChange={setName}
        />
      </div>
      <div className="form-field mx-2">
        <input
          type="text"
          name="hex"
          placeholder={value}
          defaultValue={value}
          className="form-control"
          onChange={setValue}
        />
      </div>
      <div>
        <button className="mx-2 button button--grey" onClick={updateColor}>
          Update
        </button>
        <button className="button button--grey" onClick={removeColor}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default Color;
