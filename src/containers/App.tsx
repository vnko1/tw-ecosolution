import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "@/src/context";
import { Layout } from "@/src/layout";

const router = createBrowserRouter([{ path: "/", element: <Layout /> }]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
