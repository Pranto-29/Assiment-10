
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllModels from "../Pages/AllModels/AllModels";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Registration";
import PrivateRoute from "./PrivateRoute";
import AddModel from "../Pages/AddModel/AddModel";
import ModelDetails from "../Pages/ModelDetails/ModelDetails";
import UpdateModel from "../Pages/UpdateModel/UpdateModel";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import MyModels from "../Pages/MyModels/MyModels";
import MyDownloads from "../Pages/MyDownloads/MyDownloads";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequests from "../Pages/MyFoodRequests/MyFoodRequests";
import NotFound from "../Pages/NotFound"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          try {
            const res = await fetch("https://3d-model-server.vercel.app/latest-models");
            if (!res.ok) throw new Error("Failed to load latest models");
            return res.json();
          } catch (err) {
            console.error("Home Loader Error:", err);
            return [];
          }
        },
      },
      {
        path: "/all-models",
        element: <AllModels />,
        loader: async () => {
          try {
            const res = await fetch("https://3d-model-server.vercel.app/models");
            if (!res.ok) throw new Error("Failed to load all models");
            return res.json();
          } catch (err) {
            console.error("All Models Loader Error:", err);
            return [];
          }
        },
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddModel />
          </PrivateRoute>
        ),
      },
      {
        path: "/model-details/:id",
        element: (
          <PrivateRoute>
            <ModelDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          try {
            const res = await fetch(`https://3d-model-server.vercel.app/models/${params.id}`);
            if (!res.ok) throw new Error("Failed to load model details");
            return res.json();
          } catch (err) {
            console.error("Model Details Loader Error:", err);
            return {};
          }
        },
      },
      {
        path: "/update-model/:id",
        element: (
          <PrivateRoute>
            <UpdateModel />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          try {
            const res = await fetch(`https://3d-model-server.vercel.app/models/${params.id}`);
            if (!res.ok) throw new Error("Failed to load model for update");
            return res.json();
          } catch (err) {
            console.error("Update Model Loader Error:", err);
            return {};
          }
        },
      },
      {
        path: "/update-food/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          try {
            const res = await fetch(`https://3d-model-server.vercel.app/foods/${params.id}`);
            if (!res.ok) throw new Error("Failed to load food for update");
            return res.json();
          } catch (err) {
            console.error("Update Food Loader Error:", err);
            return {};
          }
        },
      },
      {
        path: "/my-models",
        element: (
          <PrivateRoute>
            <MyModels />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-downloads",
        element: (
          <PrivateRoute>
            <MyDownloads />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-my-foods",
        element: (
          <PrivateRoute>
            <ManageMyFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-food-requests",
        element: (
          <PrivateRoute>
            <MyFoodRequests />
          </PrivateRoute>
        ),
      },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },

      // Wildcard route for 404 page
      { path: "*", element: <NotFound /> },
    ],
  },
]);


