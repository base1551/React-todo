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
  const onClickAdd = () => {
    if (todoText === "") {
      return;
    }
    const newTodos = [...imcompleteTodos, todoText]; //配列を追加
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  //indexがmapのキー
  const onClickDelete = (index) => {
    deleteTodoList(index);
  };

  const onClickComplete = (index, todo) => {
    deleteTodoList(index);
    const newTodos = [...completeTodos, todo];
    setCompleteTodo(newTodos);
  };

  //リスト削除処理共通化
  const deleteTodoList = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
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
            {imcompleteTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={() => onClickComplete(index, todo)}>
                    完了
                  </button>
                  {/* 関数に引数を渡したい場合は、アロー関数で書く必要がある */}
                  <button onClick={() => onClickDelete(index)}>削除</button>
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
