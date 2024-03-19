import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    element: <AppLayout />,
    children: [{ path: "/blog", element: <Blog /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
