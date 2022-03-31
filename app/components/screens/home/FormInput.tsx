import React from "react";
import InputPlaces from "../../ui/InputPlaces";

const FormInput = () => {
  const cbSuccess = () => {
    console.log("success");
  };

  return <InputPlaces cbSuccess={cbSuccess} type="from" />;
};

export default FormInput;
