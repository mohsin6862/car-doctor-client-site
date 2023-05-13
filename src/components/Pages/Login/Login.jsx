import React from 'react';
import img from '../../../assets/images/login/login.svg'
import { Form, Link } from 'react-router-dom';

const Login = () => {

    const handleLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-20">
           <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl my-5 text-center font-bold">Login now!</h1>

            <div className="card-body">
                <form  onSubmit={handleLogin}> 
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  
                </label>
                <label className="label">
                  <p>Do not have an account?<br /> <span  className="label-text-alt link link-hover"><Link>Please SingUp</Link></span> </p>
                  
                </label>
              </div>
              <div className="form-control mt-6">
              
                <input className="btn btn-primary" type="submit" value="LogIn" />
              </div>
                </form>

            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;