import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/src/layout";
import { AppProvider } from "../context";

const router = createBrowserRouter([{ path: "/", element: <Layout /> }]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
