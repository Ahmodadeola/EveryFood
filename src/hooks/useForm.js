import { useState, useReducer, useMemo, useCallback, useEffect } from "react";

const useForm = (mode) => {
  // stores value for all form inputs
  const [_formData, _setFormData] = useReducer(
    (data, { key, value, valid }) => {
      const dataDup = { ...data };
      dataDup[key] = { value, valid };
      return dataDup;
    },
    {}
  );

  // data validity state
  const [valid, setValid] = useState(false);

  // memoized form data object
  const formData = useMemo(() => {
    return { ..._formData };
  }, [_formData]);

  useEffect(() => {
    let _valid = true;
    Object.values(formData).forEach((data) => {
      _valid = _valid && data.valid;
    });
    setValid(_valid);
    console.log(`[In InputForm] ${JSON.stringify(formData)}, ${_valid}`);
  }, [formData]);

  // memoized setFormData
  const setFormData = useCallback(
    (key, value, valid) => {
      _setFormData({ key, value, valid });
      console.log(`[in useCallback] key => ${key}, value=> ${value}`);
    },
    [_setFormData]
  );

  // submit form handler
  const submitForm = (e) => {
    e.preventDefault();
    console.log(`[in submit form] formdata => ${JSON.stringify(formData)}`);
  };

  return {
    valid,
    setFormData,
    submitForm,
  };
};

export default useForm;
