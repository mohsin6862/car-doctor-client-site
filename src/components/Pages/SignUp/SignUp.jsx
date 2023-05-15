import { useContext } from 'react';
import img from '../../../assets/images/login/login.svg'
import {  Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';


const SignUp = () => {
  const {createUser}=useContext(AuthContext)
    const handleSignUp=(event)=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
          const newUser = result.user
          console.log(newUser)
        })
        .catch(error=>{
          console.log(error.message)
        })

       
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-20">
           <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl my-5 text-center font-bold">Sign Up now!</h1>

            <div className="card-body">
                <form  onSubmit={handleSignUp}> 
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" name='name' className="input input-bordered" />
              </div>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />
               
             
              </div>
              <div className="form-control mt-6">
              
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
                </form>

                <label className="label">
                  <p>Already have an account? <span  className="label-text-alt text-lg text-[#FF3811] link link-hover font-bold"><Link to='/login'>Please LogIn</Link></span> </p>
                  
                </label>

            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;