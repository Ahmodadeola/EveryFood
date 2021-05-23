import React from "react";

const Input = (props) => {
  const {
    inputType = "input",
    config: { name, type = "text" },
    options,
  } = props;
  let input = <input />;
  switch (inputType) {
    case "input":
      return (input = (
        <div className="">
          <label
            className="text-lg text-green-400 text-medium block text-left"
            htmlFor={name}
          >
            {name[0].toUpperCase() + name.slice(1)}
          </label>
          <input
            {...props}
            id={name}
            type={type}
            placeholder={name[0].toUpperCase() + name.slice(1)}
            className="input-custom"
          />
        </div>
      ));
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
      console.log("Default returned");
      return input;
  }
};

export default Input;
