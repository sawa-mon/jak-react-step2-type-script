import { VFC } from "react";
import { TodoType } from "./types/todo";

//Pick 型定義から必要な型情報のみを抜き出す
//Omit 型定義からいらない型情報を除外する
// export const Todo = (
//   props: Pick<TodoType, "userId" | "title" | "completed">
// ) => {
//   const { title, userId, completed = false } = props;
//   const completeMark = completed ? "[完了]" : "[未完了]";
//   return <p>{`${completeMark}${title}(ユーザー${userId})`}</p>;
// };

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完了]" : "[未完了]";
  return <p>{`${completeMark}${title}(ユーザー${userId})`}</p>;
};
