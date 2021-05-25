import React, { useCallback, useReducer } from "react";
import useInput from "../../hooks/useInput";

const Input = (props) => {
  const {
    inputType = "input",
    config: { name, type = "text" },
    options,
  } = props;

  const { show, error, changeHandler } = useInput({
    config: props.config,
  });

  const formatLabel = useCallback((text) => {
    return text.replace(/[-_]/g, " ");
  }, []);

  let input = <input />;
  let labelClasses =
    `text-lg text-green-400 text-medium block text-left transition
  transform ease-in duration-400`.split(" ");
  labelClasses = show
    ? [...labelClasses, "translate-y-0", "h-auto"]
    : [...labelClasses, "translate-y-9", "invisible", "h-0"];

  switch (inputType) {
    case "input":
      let fmtName = formatLabel(name);

      return (input = (
        <div className="">
          <label className={labelClasses.join(" ")} htmlFor={name}>
            {fmtName[0].toUpperCase() + fmtName.slice(1)}
          </label>
          <input
            {...props}
            onChange={changeHandler}
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
