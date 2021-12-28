import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import AppLayout from '../layout';
import Dashboard from '@/pages/Dashboard';
import LoginOrRegister from '@/pages/LoginOrRegister';
import Calendar from '@/pages/Calendar';
import Mail from '@/pages/Mail';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} exact>
          <Route index element={<Dashboard />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="mailbox" element={<Mail />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
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
