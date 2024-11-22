import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { auth } from '../FireStore'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'


const LoginForm = () => {
  const{register,handleSubmit,reset}=useForm()

  const redirect = useNavigate()

  function SignIn(data){
    signInWithEmailAndPassword(auth,data.email,data.password)
    .then((res)=>{
      console.log(res.user);
      toast.success("Login successfully",{position:'top-center'})
      window.location.href = '/CreateThunk'
      reset()
    })
    .catch((err)=>{
      console.log(err);
      toast.error("Error: " + err.message, { position: 'top-center' });
    })
  }

  return (
<>
    <div className="container d-flex justify-content-center">
    <form action="" method='post' onSubmit={handleSubmit(SignIn)} className='col-5 p-4 shadow' >
      <h3>Login</h3>
      <div className="mt-3">
        <input type="Email" className='form-control' placeholder='please Enter your Email' {...register("email")}/>
      </div>
      <div className="mt-3">
        <input type="password" className='form-control' placeholder='please Enter your password' {...register("password")} />
      </div>
      <div className="d-flex justify-content-around align-item-center mt-4">
      <button className='btn btn-success text-center'>Submit</button>
      <NavLink className='btn btn-primary' to='/signup'>Signup</NavLink>
      </div>
    </form>
    <ToastContainer/>
    </div>
    
    </>
  )
}

export default LoginForm