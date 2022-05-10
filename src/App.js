import React, { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState(""); 
  const [fullname, setFullName] = useState(""); 
  const [phone, setPhone] = useState(""); 
  const [gender, setGender] = useState(""); 
  const [state, setState] = useState(""); 
  const onSubmit = (data) => {
    setFullName(data.fullname)
    setEmail(data.email)
    setPhone(data.phone)
    setGender(data.gender)
    setState(data.state)
  }
  return (
    <div className="">
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <label htmlFor="fullname">Full name</label>
              <input className='form-control' type="text" id='fullname' {...register("fullname")} />
            </div>

            <div className='form-group'>
              <label htmlFor="email">Email Address</label>
              <input type="email" className='form-control' id='email' name="email" {...register("email")} />
            </div>

            <div className='form-group'>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" className='form-control' id='phone' name="phone" {...register("phone")} />
            </div>

            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <input type="password" className='form-control' id='passowrd' name="password" {...register("password")} />
            </div>


            <div className='form-group'>
              <label>Gender</label>
              <br />
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="male" value="male" {...register("gender")} />
                <label className="form-check-label" htmlFor="male">male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="female" value="female" {...register("gender")} />
                <label className="form-check-label" htmlFor="female">female</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="other" value="other" {...register("gender")} />
                <label className="form-check-label" htmlFor="other">other</label>
              </div>
            </div>

            <div className='form-group'>
              <select className="form-select" {...register("state")}>
                <option value="">Select your state</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
              </select>
            </div>

            <div className='form-group'>
            
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="terms" value="agree" {...register("terms & condition")} />
                <label className="form-check-label" htmlFor="terms">I agree all terms and conditons</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="updates" {...register("updates")}/>
                <label className="form-check-label" htmlFor="updates">send me latest updates</label>
              </div>
            </div>

            <button type='submit' className='btn btn-primary' style={{ marginTop: 4 }}>Submit</button>
          </form>


          <div style={{marginTop:20}}>
            Name : {fullname}
            <br />
            Email : {email}
            <br />
            Phone : {phone}
            <br />
            Gender : {gender}
            <br />
            State : {state}
          </div>

        </div>
        <div className='col-md-4'></div>
      </div>

    </div>
  );
}

export default App;
