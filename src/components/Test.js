import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const Test = (props) => {
  const propsState = useSelector((state) => state);

  let data = "123";
  let key = "";

  const removeData = (data) => {
    const change = "";

    change = data.replaceAll("3", "");
    return change;
  };

  const getKey = (data) => {
    key = removeData(data);

    return key;
  };

  return (
    <div>
      <button onClick={() => getKey(data)}>{key}</button>
    </div>
  );
};
