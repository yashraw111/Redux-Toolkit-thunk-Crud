import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { auth } from '../FireStore';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signupform = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const Signup = (data) => {
    const { email, password } = data;
    const redirect = useNavigate()

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("User registered successfully!", { position: 'top-center' });
        // redirect("/signup")
        reset();
      })
      .catch((err) => {
        console.error(err.message);
        toast.error("Error: " + err.message, { position: 'top-center' });
      });
  };

  // const googleAuth = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((res) => {
  //       const user = res.user;
  //       console.log(user);
  //       toast.success("Google Sign-In successful!", { position: 'top-center' });
  //        window.location.href = '/CreateThunk'
  //     })
  //     .catch((err) => {
  //       console.error(err.message);
  //       toast.error("Google Sign-In failed: " + err.message, { position: 'top-center' });
  //     });
  // };

  return (
    <>
      <div className="container d-flex justify-content-center text-center">
        <form
          onSubmit={handleSubmit(Signup)}
          className="col-5 p-4 shadow"
        >
          <h3>Sign Up</h3>

          <div className="mt-3">
            <input
              type="email"
              className="form-control"
              placeholder="Please enter your email"
              {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
            />
            <p className="text-danger">{errors.email?.message}</p>
          </div>

          <div className="mt-3">
            <input
              type="password"
              className="form-control"
              placeholder="Please enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
            />
            <p className="text-danger">{errors.password?.message}</p>
          </div>

          <div className="d-flex justify-content-around align-items-center mt-3">
            <button type="submit" className="btn btn-success">Submit</button>
            <NavLink className="btn btn-primary" to="/">Login</NavLink>
          </div>

          {/* <button
            type="button"
            className="btn btn-dark mt-3"
            onClick={googleAuth}
          >
            Sign up With Google <i className="fa-brands fa-google"></i>
          </button> */}
        </form>
      </div>

      <ToastContainer />
    </>
  );
};

export default Signupform;
