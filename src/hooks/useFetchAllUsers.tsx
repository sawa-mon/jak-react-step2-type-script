import axios from "axios";
import { useState } from "react";
import { User } from "../types/api/user";
import { userProfile } from "../types/userProfile";

//全ユーザー一覧を取得するカスタムフック
export const useFetchAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<userProfile>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { getUsers, userProfiles, loading, error };
};
