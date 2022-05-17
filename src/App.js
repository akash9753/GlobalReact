import React from 'react';
import './App.css';
import LiftingStateUp from './LiftingStateUp1/LiftingStateUp';
// import HookForm from './react-hook-form/HookForm';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import ListKeys from './ListAndKeys/Listkeys'
import Test from './LiftingStateUp1/Test';
import Employee from './LiftingStateUp2/Employee';
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
      <LiftingStateUp name={state.name}/>
      <Test name={state.name}/>
      <Employee/>
    </div>
  )
}

export default App;
