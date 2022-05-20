import React from 'react';
import './App.css';
import LiftingStateUp from './LiftingStateUp1/LiftingStateUp';
// import HookForm from './react-hook-form/HookForm';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import ListKeys from './ListAndKeys/Listkeys'
import Test from './LiftingStateUp1/Test';
import Employee from './LiftingStateUp2/Employee';
import CvsI from './CompositionVsInheritance/CvsI';
import Ex1 from './CompositionVsInheritance/Ex1';
import Ex2 from './CompositionVsInheritance/Ex2';
import Ex3 from './CompositionVsInheritance/Ex3';
import Header from './Container/Header';
import Auth from './Container/Auth';
import {UserContextProvider} from "./context/userContext"; 
function App() {
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const state = {
    name: "akash patel"
  }
return (
    <div>
      {/* <HookForm/> */}
      {/* <ListKeys arr = {arr}/> */}
      {/* <ListKeys/> */}
      {/* <button onClick={notify}>Notify!</button>
        <ToastContainer /> */}
      {/* <LiftingStateUp name={state.name}/>
      <Test name={state.name}/>
      <Employee/> */}
      {/* <CvsI/>
      <hr/>
      <h2>sending data in function as props</h2>
      <Ex1/>
      <hr/>
      <h2>sending big data in function as props</h2>
      <Ex2/>
      <hr/>
      <h2>sending component as props to another component which is inside a class or function</h2>
      <Ex3/>
      <hr/> */}
      <UserContextProvider>
      <Header/>
      <Auth/> 
      </UserContextProvider>
      {/* <LoginForm/> */}
    </div>
  )
}

export default App;
