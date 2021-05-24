import React, { useCallback, useReducer } from "react";

const Input = (props) => {
  const {
    inputType = "input",
    config: { name, type = "text" },
    options,
  } = props;

  //   const reducer = (focused, v) => {
  //     reyrun;
  //   };

  const formatLabel = useCallback((text) => {
    return text.replace(/[-_]/g, " ");
  }, []);

  const [focused, focusHandler] = useReducer(
    (focused, e) => !!e.target.value,
    false
  );

  let input = <input />;
  switch (inputType) {
    case "input":
      let fmtName = formatLabel(name);
      console.log(fmtName);
      return (input = (
        <div className="">
          {
            <label
              className="text-lg text-green-400 text-medium block text-left"
              htmlFor={name}
            >
              {focused && fmtName[0].toUpperCase() + fmtName.slice(1)}
            </label>
          }
          <input
            {...props}
            onFocus={focusHandler}
            id={name}
            type={type}
            placeholder={fmtName[0].toUpperCase() + fmtName.slice(1)}
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
