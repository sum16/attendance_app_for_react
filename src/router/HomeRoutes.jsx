import { Home } from "../components/Pages/Home";
import { UserManagement } from "../components/Pages/UserManagement";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/user_namagement",
    exact: false,
    children: <UserManagement />,
  },
];
