import { Route, Routes } from "react-router-dom"
import './App.css';
import React, {useState} from 'react';
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import CreateMedicine from "./components/CreateMedicine/CreateMedicine";
import CreateStakeholder from "./components/CreateStakeholder/CreateStakeholder";
import Transaction from "./components/Transaction/Transaction";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import TrackMedicine from "./components/TrackMedicine/TrackMedicine";
import QRCode from "./components/QRCode/QRCode";
import FAQ from "./components/FAQ/FAQ";
import ContactUs from "./components/ContactUs/ContactUs";


function App() {

  const [user, setUser] = React.useState("")
  console.log(user);

  return (
  <React.Fragment>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth setUser={setUser} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminDashboard" element={<Dashboard />} />
        <Route path="/createMedicine" element={<CreateMedicine />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/generateQRCode" element={<QRCode />} />
        <Route path="/trackMedicine" element={<TrackMedicine />} />
        <Route path="/createStakeholder" element={<CreateStakeholder />} />
        <Route path="/createTransaction" element={<Transaction/> } />
        </Routes>
      <Footer/>
  </React.Fragment>
  );
}

export default App;

