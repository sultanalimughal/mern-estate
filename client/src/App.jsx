import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from "./pages/about";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Profile from "./pages/profile";
import CreateListing from "./pages/createListing";
import UpdateListing from "./pages/updateListing";
import Listing from './pages/listing'
import Header from "./components/header";
import PrivateRoute from "./components/PrivateRoute";
import Search from "./pages/Search";


export default function App() {
  return <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/signin" element={<SignIn/>}/> 
      <Route path="/signUp" element={<SignUp/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/search" element={<Search/>}/> 
      <Route path="/listing/:listingId" element={<Listing/>}/> 

      
      <Route element={<PrivateRoute/>}> 
      <Route path="/profile" element={<Profile/>}/> 
      <Route path="/create-listing" element={<CreateListing/>}/> 
      <Route path="/update-listing/:listingId" element={<UpdateListing/>}/> 
      </Route>


    </Routes>
  </BrowserRouter>;
};

{/* <Route path="/Profile" element={<Profile/>}/>  */}
