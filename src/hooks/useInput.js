import { useCallback, useEffect, useState } from "react";

const useInput = (config) => {
  const { rules } = config;
  const [show, toggle] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    console.log(`[for config] => ${config}`);
  }, [config]);

  const checkErr = useCallback(
    (rules) => {
      for (let rule of rules) {
        let rs = rule(value);
        console.log(rs, typeof rs);

        if (typeof rs === "string") {
          setError(rs);
          console.log(`[useInput hook]Error is => ${rs}`);
          break;
        }
        setError("");
      }
    },
    [value]
  );

  useEffect(() => {
    console.log("Logged");
    toggle(!!value);
    typeof error === "string" && checkErr(rules);
  }, [value, rules, checkErr, error]);

  const focusHandler = () => {
    setFocused(true);
  };

  const blurHandler = () => {
    checkErr(rules);
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
    checkErr(config.rules);
    console.log(`[for config] => ${JSON.stringify(config)}`);
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
