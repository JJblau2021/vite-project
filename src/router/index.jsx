import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import AppLayout from "../layout";
import Home from "@/pages/Home";
import LoginOrRegister from "@/pages/LoginOrRegister";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} exact>
          <Route index element={<Home />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There&apos;s nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route path="login" element={<LoginOrRegister type="login" />} />
        <Route path="register" element={<LoginOrRegister type="register" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
