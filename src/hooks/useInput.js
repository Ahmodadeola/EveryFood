import { useEffect, useState } from "react";

const useInput = ({ config }) => {
  const [show, toggle] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    toggle(!!value);
    console.log(`[useInput hook] Value is now => ${value}`);
  }, [value]);

  const valid = false;
  const focusHandler = () => {
    return show;
  };
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    error,
    show,
    changeHandler,
  };
};

export default useInput;
