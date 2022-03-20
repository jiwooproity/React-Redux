import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const Test = () => {
  const propsState = useSelector((state) => state);

  return (
    <div>
      <span>{propsState.name}</span>
    </div>
  );
};
