import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Component/Home/Home/Home";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        }
      ]
    },
  ]);


  export default Router;