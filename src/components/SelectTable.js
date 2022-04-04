import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "./Data";

const SelectTableWrapper = styled.div`
  width: 100%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SelectTableBorder = styled.table`
  padding: 10px;

  border: 1px solid rgba(0, 0, 0, 0.6);
`;

const ActiveEventWrapper = styled.div``;

const ActiveButton = styled.span`
  padding: 5px;
  margin-right: 5px;

  color: white;
  background-color: ${({ disabled }) => (disabled ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.8)")};

  transition: background-color 0.5s ease;
`;

const SelectTableHead = ({ allCheck, allChecking }) => {
  return (
    <thead>
      <tr>
        <td>
          <input type={"checkbox"} onChange={allChecking} checked={allCheck} />
        </td>
        <td>Response ID</td>
      </tr>
    </thead>
  );
};

const SelectTableBody = ({ customData, check, thisCheck }) => {
  return (
    <tbody>
      {customData?.length > 0 ? (
        customData?.map((item, index) => (
          <tr key={index}>
            <td>
              <input type={"checkbox"} onChange={() => check(item)} checked={thisCheck(item)} />
            </td>
            <td>{item}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td></td>
          <td>데이터 값이 없습니다.</td>
        </tr>
      )}
    </tbody>
  );
};

const SelectTable = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [customData, setCustomData] = useState(data.map((item) => item.resId));
  const [allCheck, setAllCheck] = useState(false);
  const [activeButton, setActiveButton] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [deleteSum, setDeleteSum] = useState(0);
  const [test, setTest] = useState({
    id: "2",
    title: "",
  });

  const onAddTest = () => {
    setTest({ ...test, title: "2" });
  };

  const allChecking = () => {
    allCheck ? setCheckedItems([]) : setCheckedItems(customData.map((item) => item));
  };

  const check = (resId) => {
    const checkItem = !!checkedItems.find((item) => item === resId);

    const setCheck = (resId) => {
      return checkItem ? setCheckedItems((checkItem) => checkItem.filter((item) => item !== resId)) : setCheckedItems((checkItem) => checkItem.concat(resId));
    };

    setCheck(resId);
  };

  const setDeleteLength = (length) => {
    setDeleteSum(deleteSum + length);
  };

  const deleteList = () => {
    if (window.confirm(checkedItems.length + "개 항목을 삭제하시겠습니까?")) {
      setCustomData(customData.filter((data) => !checkedItems.find((item) => data === item)));
      setDeleteLength(checkedItems.length);
      setCheckedItems([]);
    }

    return;
  };

  const thisCheck = (resId) => {
    return checkedItems.find((item) => item === resId);
  };

  const onRefresh = () => {
    setRefresh(!refresh);
    setDeleteSum(0);
    setCustomData(data.map((item) => item.resId));
  };

  const onSort = () => {
    setCustomData(customData.reverse());
    setRefresh(!refresh);
  };

  useEffect(() => {
    setActiveButton(!checkedItems.length > 0);
  }, [checkedItems]);

  useEffect(() => {
    const isAllCheck = customData.length === checkedItems.length;

    setAllCheck(isAllCheck);
  }, [customData, checkedItems]);

  return (
    <SelectTableWrapper>
      <SelectTableBorder>
        <SelectTableHead allCheck={allCheck} allChecking={allChecking} />
        <SelectTableBody customData={customData} check={check} thisCheck={thisCheck} />
      </SelectTableBorder>
      <ActiveEventWrapper>
        <p>선택 {checkedItems.length}개</p>
        <ActiveButton disabled={activeButton} onClick={deleteList}>
          삭제
        </ActiveButton>
        <ActiveButton disabled={false} onClick={onRefresh}>
          새로고침
        </ActiveButton>
        <ActiveButton disabled={false} onClick={onSort}>
          정렬
        </ActiveButton>
        <p>{deleteSum}개 삭제됌</p>
      </ActiveEventWrapper>
      <button onClick={onAddTest}>testAdd</button>
    </SelectTableWrapper>
  );
};

export default SelectTable;
