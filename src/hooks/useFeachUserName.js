import axios from "axios";
import { useState } from "react";

export const useFeachUserName = () => {
  const [userName, setUserName] = useState("");

  const feachUserName = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/1`)
      .then((res) => {
        if (res.data) {
          setUserName(res.data.name);
        } else {
          return "見つかりません";
        }
      })
      .catch(() => {
        alert("名前が見つかりません");
      });
  };
  return { feachUserName, userName };
};
