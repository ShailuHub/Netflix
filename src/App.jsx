import Body from "./components/body/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/body/Login";
import Browse from "./components/browse/Browse";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
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
