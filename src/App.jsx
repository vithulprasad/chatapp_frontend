import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authenticator from "./Middleware/Authenticator";
import Login from "./pages/Login";

import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Chat from "./pages/chat/Chat";

import socketIO from 'socket.io-client';

const socket = socketIO.connect("https://chatapp-backend-680y.onrender.com", {
  query: { token:localStorage.getItem("token") },
});

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route element={<Authenticator />}>
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
        </Route>

        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
          <Route
          path="/chat"
          element={
            <Layout>
              <Chat  socket={socket}/>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
