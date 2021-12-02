// 認証周りのカスタムフックを定義
import { useCallback } from "react";
import axios from "axios";

export const useAuth = () => {
  const login = useCallback((id) => {
    axios.get(`https://jsonplaceholder.typicode.com/users${id}`).then((res) => {
      if (res.date) {
      } else {
        alert("hoge");
      }
    });
  }, []);
  return { login };
};
