import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/Home/Home/Home";
import Category from "../components/Home/Category/Category";
import NewsLayOut from "../components/NewsLayOut";
import News from "../components/Pages/News/News/News";
import LoginLayOut from "../components/Login/LoginLayOut";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayOut></LoginLayOut>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayOut></NewsLayOut>,
    children: [
      {
        path: ":id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
