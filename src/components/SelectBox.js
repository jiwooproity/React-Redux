import { MultiSelect } from "react-multi-select-component";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

const SelectBox = () => {
  const selectValue = [
    {
      label: "item 1",
      value: "item 1",
    },
    {
      label: "item 2",
      value: "item 2",
    },
  ];

  const [selectedValue, setSelectedValue] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (selectedValue.length === 0) {
      setVisible(false);
    }
  }, [selectedValue]);

  const renderSelectResult = (selectedValue) => {
    return selectedValue.map((item) => (
      <div>
        <ul>
          <li>{item.label}</li>
        </ul>
      </div>
    ));
  };

  return (
    <div>
      <MultiSelect options={selectValue} value={selectedValue} onChange={setSelectedValue} disableSearch={true} />
      <button onClick={() => setVisible(true)}>Apply</button>
      {visible && selectedValue.length > 0 && renderSelectResult(selectedValue)}
    </div>
  );
};

export default withRouter(SelectBox);
