import './App.css';
// import HookForm from './react-hook-form/HookForm';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import ListKeys from './ListAndKeys/Listkeys'
function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
return (
    <div>
      {/* <HookForm/> */}
      {/* <ListKeys arr = {arr}/> */}
      <ListKeys/>
      {/* <button onClick={notify}>Notify!</button>
        <ToastContainer /> */}
    </div>
  )
}

export default App;
