import Body from "./components/Body/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Body/Login";
import Browse from "./components/Browse/Browse";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/browse-movie",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
