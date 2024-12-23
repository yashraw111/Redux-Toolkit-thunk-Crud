import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../UserSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../FireStore";

const CreateThunk = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const redirect = useNavigate();
  const dispatch = useDispatch();
  function regist(data) {
    dispatch(addUser(data));
    redirect("/View");
  }

  function handleLogOut(){
   try {
   if(confirm("Confirm LogOut")){
    auth.signOut()
    window.location.href = '/'
    console.log("LogOut Successfully");
   }
    
   } catch (error) {
    console.error("Error Logging out",error.message)
    
   }
    
  }


  return (
    <>
      <div class="container mt-5">
        <h2 class="text-center mb-4">Create a Blog Post</h2>
        <div className="container d-flex justify-content-center ">
          <form className="col-5 shadow p-4" onSubmit={handleSubmit(regist)}>
            <div class="mb-3">
              <label for="firstName" class="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder="Enter your first name"
                {...register("name")}
              />
            </div>

            <div class="mb-3">
              <label for="blogDate" class="form-label">
                Date
              </label>
              <input
                type="date"
                class="form-control"
                id="blogDate"
                {...register("blog", {
                  required: {
                    value: true,
                    message: "please enter the value",
                  },
                })}
              />
            </div>

            <div class="mb-3">
              <label for="description" class="form-label">
                Description
              </label>
              <textarea
                class="form-control"
                id="description"
                rows="5"
                placeholder="Write your blog content here..."
                {...register("des")}
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit Blog
            </button>
          </form>
        </div>
      </div>


    <div className="">
      <button className="btn btn-outline-dark"  onClick={handleLogOut}><i class="fa-solid fa-right-from-bracket"></i></button>
    </div>
    </>
  );
};

export default CreateThunk;
