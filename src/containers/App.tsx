import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../layout";

const router = createBrowserRouter([{ path: "/", element: <Layout /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
