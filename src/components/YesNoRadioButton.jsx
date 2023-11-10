import React, { useState } from 'react';

export const YesNoRadioButton = () => {
 const [selectedValue, setSelectedValue] = useState('option1');

 const handleChange = (event) => {
    setSelectedValue(event.target.value);
 };

 const selectedStyle = {
    border: '2px solid red',
    boxShadow: '0 0 5px 0px red',
 };

 return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedValue === 'option1'}
          onChange={handleChange}
          style={selectedValue === 'option1' ? selectedStyle : null}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedValue === 'option2'}
          onChange={handleChange}
          style={selectedValue === 'option2' ? selectedStyle : null}
        />
        Option 2
      </label>
    </div>
 );
};
