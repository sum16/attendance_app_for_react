// グローバルなステートをもたせる

import { useState } from "react";
import { createContext } from "react";

// 初期値は空のオブジェクト
export const LoginUserContext = createContext();

export const LoginUserProvider = (props) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState([]);
  return (
    // loginUserが更新されるとsetLoginUserもレンダリングされるため、必要に応じてそれぞれのProviderで分ける
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
