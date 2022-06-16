import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodo] = useState(["うううう"]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = (event) => {
    if (todoText === "") {
      return;
    }
    const newTodos = [...imcompleteTodos, todoText]; //配列を追加
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div>
        <div className="incomplete-area">
          <p className="title">未完了のTODO</p>
          <ul>
            {imcompleteTodos.map((todo) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="complete-area">
          <p className="title">完了のTODO</p>
          <ul>
            {completeTodos.map((todo) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button>戻す</button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
