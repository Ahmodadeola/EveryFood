import React, { useCallback, useEffect, useReducer } from "react";
import useInput from "../../hooks/useInput";

const Input = (props) => {
  // extract props
  const {
    inputType = "input",
    config: { name, type = "text" },
    options,
    setValue,
  } = props;

  const {
    value,
    show,
    error,
    focused,
    changeHandler,
    blurHandler,
    focusHandler,
  } = useInput(props.config, setValue);

  // update the form data when value changes
  useEffect(() => {
    setValue(name, value, !error);
  }, [name, value, error, setValue]);

  const formatLabel = useCallback((text) => {
    return text.replace(/[-_]/g, " ");
  }, []);

  let input = <input />;
  // Set input classes
  let labelClasses =
    `text-lg text-green-400 text-medium block text-left transition
  transform ease-in duration-400`.split(" ");

  // animate label on focus
  labelClasses = show
    ? [...labelClasses, "translate-y-0", "h-auto"]
    : [...labelClasses, "translate-y-9", "invisible", "h-0"];

  // set error text classses
  let errClasses =
    "transition ease-in duration-400 text-red-600 font-light text-sm text-right".split(
      " "
    );

  // animate error text when field error exist
  errClasses =
    focused && !!error
      ? [...errClasses, "opacity-1", "h-auto"]
      : [...errClasses, "opacity-0", "h-0"];

  // return form field type
  switch (inputType) {
    case "input":
      let fmtName = formatLabel(name);
      return (input = (
        <div className="">
          <label className={labelClasses.join(" ")} htmlFor={name}>
            {fmtName[0].toUpperCase() + fmtName.slice(1)}
          </label>
          <input
            onChange={changeHandler}
            onFocus={focusHandler}
            onBlur={blurHandler}
            id={name}
            type={type}
            placeholder={fmtName[0].toUpperCase() + fmtName.slice(1)}
            className="input-custom"
          />
          <p className={errClasses.join(" ")}>{error}</p>
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
