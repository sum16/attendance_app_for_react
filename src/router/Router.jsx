import { memo } from "react";
import { Route, Switch } from "react-router";
import { Login } from "../components/Pages/Login";
import { TopPage } from "../components/Pages/TopPage";
import { LoginUserProvider } from "../providers/LoginUserProvider";
import { HomeRoutes } from "./HomeRoutes";

export const Router = memo(() => {
  return (
    <Switch>
      {/* <LoginUserProvider>で囲まれた箇所がchildrenとして渡される */}
      <LoginUserProvider>
        <Route exact path="/" render={() => <Login />}></Route>
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {HomeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />
        <Route path="/top" render={() => <TopPage />}></Route>
      </LoginUserProvider>
    </Switch>
  );
});

// v6からルーティングの記述の仕方が変わっている
// https://reacttraining.com/blog/react-router-v6-pre/#introducing-routes
