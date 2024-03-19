import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    element: <AppLayout />,
    children: [
      { path: "/blog", element: <Blog /> },
      { path: "/products", element: <Products /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
