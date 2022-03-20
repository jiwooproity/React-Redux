import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

function App(props) {
  const getState = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id, pwd, unique_id } = getState.member_info ? getState.member_info : getState;

  return (
    <div>
      <p>로그인 버튼을 눌러 아이디를 받으세요.</p>
      {getState.member_info ? id + " " + pwd + " " + unique_id : "익명"}
      <h1>{getState.number}</h1>
      <button onClick={() => dispatch({ type: "로그인" })}>로그인</button>
      <button onClick={() => dispatch({ type: "증가" })}>증가</button>
      <button onClick={() => dispatch({ type: "감소" })}>감소</button>
      <button onClick={props.location.pathname === "/move" ? () => props.history.push("/") : () => props.history.push("/move")}>이동</button>
      <span>현재 URL: {props.location.pathname}</span>
    </div>
  );
}

export default withRouter(App);
