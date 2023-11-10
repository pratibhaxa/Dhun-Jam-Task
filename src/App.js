import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import { DashboardPage } from './components/DashboardPage';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element = {<RegistrationPage />}></Route>
        <Route path="/login" element = {<LoginPage />}></Route>
        <Route path="/register" element = {<RegistrationPage />}></Route>
        <Route path="/dashboard" element = {<DashboardPage />}></Route>
    </Routes>
    </React.Fragment>
  );
}

export default App;
