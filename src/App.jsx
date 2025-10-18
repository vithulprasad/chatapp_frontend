import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authenticator from "./Middleware/Authenticator";
import Login from "./pages/Login";

import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Chat from "./pages/chat/Chat";
import Loader from "./components/Loader";
import socketIO from "socket.io-client";
import { useSelector } from "react-redux";

const socket = socketIO.connect("https://chatapp-backend-680y.onrender.com", {
// const socket = socketIO.connect("http://localhost:3000", {
  query: { token: localStorage.getItem("token") },
});

function App() {
   const loading = useSelector((state) => state.loader.loading);

  return (
    <>
      {loading && <Loader />}
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
                <Chat socket={socket} />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
