import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LinkedPage from "./components/_PagesLinked.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App title="LOAD DOM | TU ESPACIO PARA LETRAS"/>,
  },
  {
    path: "/18bad755-e3aa-4a39-9ec5-05ca602aad51",
    element: (
      <LinkedPage
        title="Amor Completo"
        name="Mon Laferte"
        img="https://i.scdn.co/image/ab67616d00001e025eebf3f8ec6e9807105f3151"
        colorBg="#9da598"
        colorText="#545851"
        locate="/18bad755-e3aa-4a39-9ec5-05ca602aad51"
      />
    ),
  },
  {
    path: "/46d6151c-4298-4eb0-ba2c-05b873b641b4",
    element: (
      <LinkedPage
        title="Watch"
        name="Billie Eilish"
        img="https://i.scdn.co/image/ab67616d00001e02a9f6c04ba168640b48aa5795"
        colorBg="#ccb65c"
        colorText="#695e31"
        locate="/46d6151c-4298-4eb0-ba2c-05b873b641b4"
      />
    ),
  },
  {
    path: "/e6740a2d-0a6f-4e99-93be-9d9e0ce6630a",
    element: (
      <LinkedPage
        title="Everything I Wanted"
        name="Billie Eilish"
        img="https://i.scdn.co/image/ab67616d00001e02f2248cf6dad1d6c062587249"
        colorBg="#82a3b4"
        colorText="#4a5d67"
        locate="/e6740a2d-0a6f-4e99-93be-9d9e0ce6630a"
      />
    ),
  },
  {
    path: "/ba92a022-03f7-47ff-8ba9-c78ad8deeec0",
    element: (
      <LinkedPage
        title="Those Eyes"
        name="New West"
        img="https://i.scdn.co/image/ab67616d00001e021bb5dc21200bfc56d8f7ef41"
        colorBg="#bdbdbd"
        colorText="#3c3c3c"
        locate="/ba92a022-03f7-47ff-8ba9-c78ad8deeec0"
      />
    ),
  },
  {
    path: "/025e14dd-27ca-470a-a1e3-160a20629523",
    element: (
      <LinkedPage
        title="Barras Sin Barreras"
        name="Redimi2"
        img="https://i.scdn.co/image/ab67616d00001e0263e9651ed90aadd08f4496bc"
        colorBg="#c2b2a2"
        colorText="#413c37"
        locate="/025e14dd-27ca-470a-a1e3-160a20629523"
      />
    ),
  },
  {
    path: "/e1f56984-6a08-4eec-bd34-6e56d9259e63",
    element: (
      <LinkedPage
        title="Debi Suponerlo"
        name="Morat, Camila Fern..."
        img="https://i.scdn.co/image/ab67616d00001e0219fb963d4a950c973c6c5b74"
        colorBg="#c2b2a2"
        colorText="#413c37"
        locate="/e1f56984-6a08-4eec-bd34-6e56d9259e63"
      />
    ),
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
