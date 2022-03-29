import React, { useState } from "react";

export const Filter = () => {
  const [customData, setCustomData] = useState([
    {
      profileId: "B0000001",
    },
    {
      profileId: "B0000002",
    },
    {
      profileId: "B0000003",
    },
    {
      profileId: "B0000004",
    },
    {
      profileId: "B0000005",
    },
  ]);

  const data = ["B0000001", "B0000002", "B0000003", "B0000004"];

  const removeData = () => {
    setCustomData((state) => state.filter((item) => !data.find((item2) => item2 === item.profileId)));
  };

  return (
    <div>
      <ul>
        {customData.map((item) => (
          <li>{item.profileId}</li>
        ))}
      </ul>
      <button onClick={removeData}>remove</button>
    </div>
  );
};
