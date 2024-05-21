import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import ArtistPage from "../components/ArtistPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h3>no no no</h3>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/artists/:artistName",
        element: <ArtistPage />,
      },
    ],
  },
]);

export default router;
