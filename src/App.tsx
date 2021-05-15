import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "テスト",
  // hobbies: ["映画", "ゲーム"],
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
      <Text color="red" fontSize="30px" />
    </div>
  );
}
