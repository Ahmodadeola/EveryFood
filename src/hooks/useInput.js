import { useCallback, useEffect, useState } from "react";

const useInput = (config, setFormData) => {
  const { rules } = config;
  const [show, toggle] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  const checkErr = useCallback(
    (rules) => {
      let rs;
      for (let rule of rules) {
        rs = rule(value);
        if (typeof rs === "string") {
          setError(rs);
          break;
        }
        setError("");
      }
    },
    [value]
  );

  useEffect(() => {
    toggle(!!value);
    typeof error === "string" && checkErr(rules);
  }, [value, rules, checkErr, error, setFormData]);

  const focusHandler = () => {
    setFocused(true);
  };

  const blurHandler = () => {
    checkErr(rules);
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
    checkErr(config.rules);
    console.log(`[changeHandler] error => ${error}`);
  };
  return {
    value,
    error,
    show,
    focused,
    changeHandler,
    blurHandler,
    focusHandler,
  };
};

export default useInput;
