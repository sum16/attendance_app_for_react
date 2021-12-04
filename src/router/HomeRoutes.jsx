import { Home } from "../components/Pages/Home";
import { TopPage } from "../components/Pages/TopPage";
import { UserManagement } from "../components/Pages/UserManagement";

export const HomeRouter = () => [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/top",
    exact: false,
    children: <TopPage />,
  },
  {
    path: "/user_namagement",
    exact: false,
    children: <UserManagement />,
  },
];
