import React from "react";

const Input = (props) => {
  const { inputType = "input", name, options } = props;
  switch (inputType) {
    case "input":
      return (
        <div className="">
          <input {...props} className="input-custom" />
        </div>
      );
    case "select":
      return (
        <select>
          {options.map((opt, idx) => (
            <option key={idx} value={opt}></option>
          ))}
        </select>
      );
    case "textarea":
      return <textarea name={name} id="" cols="30" rows="10"></textarea>;
    default:
      return <input />;
  }
};

export default Input;
