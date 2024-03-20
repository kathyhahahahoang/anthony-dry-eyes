import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Tips from "./pages/Tips";
import About from "./pages/About";
import BlogArticle from "./pages/BlogArticle";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    element: <AppLayout />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/article", element: <BlogArticle /> },
      { path: "/tips", element: <Tips /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
