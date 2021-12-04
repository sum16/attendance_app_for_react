import { Switch } from "@chakra-ui/switch";
import { memo } from "react";
import { Route, Routes } from "react-router";
import { Login } from "../components/Pages/Login";
import { TopPage } from "../components/Pages/TopPage";

export const Router = memo(() => {
  return (
    <Switch>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/top" element={<TopPage />}></Route>
      </Routes>
    </Switch>
  );
});

// v6からルーティングの記述の仕方が変わっている
// https://reacttraining.com/blog/react-router-v6-pre/#introducing-routes
