import { Switch } from "@chakra-ui/switch";
import { memo } from "react";
import { Route } from "react-router";
import { Home } from "../components/Pages/Home";
import { Login } from "../components/Pages/Login";
import { TopPage } from "../components/Pages/TopPage";

export const Router = memo(() => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />}></Route>
      <Route path="/login" render={() => <Login />}></Route>
      <Route path="/top" render={() => <TopPage />}></Route>
    </Switch>
  );
});

// v6からルーティングの記述の仕方が変わっている
// https://reacttraining.com/blog/react-router-v6-pre/#introducing-routes
