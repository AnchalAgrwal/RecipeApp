import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx"
import "./styles.css";
import GetRecipe from "./components/GetRecipe";
import { Routes, Route } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/getRecipe/:id",
//     element: (
//       <div>
//         <Header />
//         <GetRecipe />
//       </div>
//     ),
//   },
//   {
//     path: "/",
//     element: (
//       <div>
//         <Header />
//         <Homepage />
//       </div>
//     ),
//   },
// ]);

function App() {
  // return <RouterProvider router={router} />;
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <Homepage />
          </div>
        }
      />
      <Route
        path="/getRecipe/:mealid"
        element={
          <div>
            <Header />
            <GetRecipe />
          </div>
        }
      />
      <Route
        path="/about"
        element={
          <div>
            <Header />
            <About />
          </div>
        }
      />
      <Route
        path="/contact"
        element={
          <div>
            <Header />
            <Contact />
          </div>
        }
      />
    </Routes>
  );
}
export default App;
