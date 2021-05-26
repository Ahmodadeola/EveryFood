import React, { useState, useReducer } from "react";

const useForm = ({ forms }) => {
  // stores value for all form inputs
  const [_formData, _setFormData] = useReducer(
    (data, { key, value, valid }) => {
      const dataDup = { ...data };
      dataDup[key] = { value, valid };
      return dataDup;
    },
    {}
  );
  const [valid, setValid] = useState(false);
  return <form>{forms.map(() => {})}</form>;
};

export default useForm;
