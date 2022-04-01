import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    resId: "AAA00000",
  },
  {
    id: 2,
    resId: "BBB00000",
  },
  {
    id: 3,
    resId: "CCC00000",
  },
  {
    id: 4,
    resId: "DDD00000",
  },
  {
    id: 5,
    resId: "FFF00000",
  },
  {
    id: 6,
    resId: "GGG00000",
  },
];

const SelectTable = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [customData, setCustomData] = useState([]);
  const [allCheck, setAllCheck] = useState(false);

  useEffect(() => {
    setCustomData(data);
  }, []);

  useEffect(() => {
    if (customData.length === checkedItems.length) {
      setAllCheck(false);
    } else {
      setAllCheck(true);
    }
  }, [checkedItems]);

  const allChecking = () => {
    if (allCheck) {
      setAllCheck(false);
      setCheckedItems(customData.map((item) => item.resId));
    } else {
      setAllCheck(true);
      setCheckedItems([]);
    }
  };

  const check = (resId) => {
    setCheckedItems((check) => (check.find((item) => item === resId) ? checkedItems.filter((fil) => fil !== resId) : [...checkedItems, resId]));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <input checked={!allCheck} type="checkbox" onClick={allChecking} />
            </td>
            <td>
              <span>Response ID</span>
            </td>
          </tr>
        </thead>
        <tbody>
          {customData.map((item, index) => (
            <tr key={index}>
              <td>
                <input checked={checkedItems.find((check) => check === item.resId)} type="checkbox" onClick={() => check(item.resId)} />
              </td>
              <td>{item.resId}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <span>체크: {checkedItems.length}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SelectTable;
