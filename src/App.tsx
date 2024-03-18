import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
