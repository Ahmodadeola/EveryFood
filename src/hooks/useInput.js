import { useEffect, useState } from "react";

const useInput = ({ config: { rules } }) => {
  const [show, toggle] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const valid = false;

  useEffect(() => {
    toggle(!!value);
    for (let rule of rules) {
      //   rule = (v) =>
      //     v.length > 6 || "Password must not be less than 6 characters";
      //   console.log(rule.toString());
      let rs = rule("salau");
      console.log(rs);

      if (typeof result === String) {
        setError("");
        // console.log(`[useInput hook]Error is => ${result}`);
        break;
      }
    }
  }, [value]);

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
