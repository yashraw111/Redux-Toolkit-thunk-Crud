import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deleteUser, ViewUser } from "../UserSlice";

const View = () => {
  const { userList } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ViewUser());
  }, [dispatch]);

  function trash(id){
    dispatch(deleteUser(id))
    // console.log(id);
  }
  // console.log(userList.id);
  

  return (
    <>
      <div className="container my-5">
        <h3 className="text-center mt-5">UserList</h3>

<div className="table-responsive">
        <table className="table-bordered table-striped rounded col-12 table-hover   ">
          <thead className="bg-dark text-white">
            <tr>
              <th>SNO</th>
              <th>UserName</th>
              <th>Date</th>
              <th>Decription</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.blog}</td>
                <td>{user.des}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>trash(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default View;
