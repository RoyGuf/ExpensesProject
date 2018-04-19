import React from 'react';

const TextInput = ({name, onChange, value, label}) => {  
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-head">{label}</label>
      <div className="col-lg-6 ">
        <input
          ///type="text"
          name={name}
          className="form-control"
          placeholder={value}
          value={value}
          onChange={onChange}/>
      </div>
    </div>
  );
};



export default TextInput; 