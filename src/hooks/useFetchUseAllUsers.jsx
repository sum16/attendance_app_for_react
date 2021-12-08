import axios from "axios";
import { useCallback, useState } from "react";
import { useToastMessage } from "./useToastMessage";

// ユーザー取得をカスタムフック化
export const useFetchUseAllUsers = () => {
  //カスタムフックuseToastMessageのshowMessageを読み込み
  const { showMessage } = useToastMessage();

  const [loading, setLoading] = useState(false);
  // userを設定するステート
  const [users, setUsers] = useState([]);

  const getAllUsers = useCallback(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        if (res.data) {
          setUsers(res.data);
        } else {
          alert("失敗");
        }
      })
      .catch(() => {
        // hooksの中の関数showMessageを指定しないとエラーになる
        showMessage({
          title: "ユーザー取得に失敗しました",
          status: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { getAllUsers, loading, users };
};
