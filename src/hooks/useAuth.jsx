// 認証周りのカスタムフックを定義
import { useCallback, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id) => {
      setLoading(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push("/home");
          } else {
            alert("ユーザーが見つかりません");
          }
        })
        .catch(() => alert("ログインできません"))
        .finally(() => {
          setLoading(false);
        });
    },
    [history]
  );
  return { login, loading };
};
