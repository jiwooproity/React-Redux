import { withRouter } from "react-router-dom";
import { useState } from "react";

const Message = () => {
  const [selected, setSelected] = useState([]);

  const option = [
    {
      label: "Apple",
      value: "Apple",
    },
    {
      label: "Banana",
      value: "Banana",
    },
    {
      label: "Peach",
      value: "Peach",
    },
  ];

  return <div></div>;
};

export default withRouter(Message);
