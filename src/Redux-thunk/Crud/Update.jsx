import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, ViewUser } from "../UserSlice";



const Update = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const {userList}=useSelector((state)=>state.users)
  // console.log(userList);
  // const SingleUSer = us
  const { id } = useParams();
  // console.log(`Updating User with ID: ${id}`);

  const SingleUser = userList.find((user)=>{
    return user.id === id
  })

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(ViewUser())
    reset(SingleUser)

  },[])

  const redirect = useNavigate()
  function Update(data){
    dispatch(editUser(data))
    redirect('/view')

  }


  return (
    <>
  <div class="container mt-5">
        <h2 class="text-center mb-4">Create a Blog Post</h2>
        <div className="container d-flex justify-content-center ">
          <form className="col-5 shadow p-4" onSubmit={handleSubmit(Update)}>
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
    </>
  );
};

export default Update;
