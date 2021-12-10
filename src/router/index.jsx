import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import LoginOrRegister from "@/pages/LoginOrRegister";

const App = (prop) => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="user/:userId" element={<div>user</div>} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
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
