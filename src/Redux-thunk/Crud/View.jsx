import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, ViewUser } from "../UserSlice";
import { NavLink } from "react-router-dom";

const View = () => {
  const { userList } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ViewUser());
  }, [dispatch]);

  function trash(id) {
    if(confirm("Do you Want to delete this item ?")){

      dispatch(deleteUser(id));
      // console.log(`Deleted User ID: ${id}`);
    }
  }

  return (
    <>
      <div className="container my-5">
        <h3 className="text-center mt-5">User List</h3>
        <div className="table-responsive">
          <table className="table-bordered table-striped rounded col-12 table-hover">
            <thead className="bg-dark text-white">
              <tr >
                <th>SNO</th>
                <th>UserName</th>
                <th>Date</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.blog}</td>
                  <td>{user.des}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => trash(user.id)}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <NavLink
                      className="btn btn-primary btn-sm"
                      to={`/Update/${user.id}`}
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </NavLink>
                    <NavLink
                      className="btn btn-primary btn-sm"
                      to={`/SingleView/${user.id}`}
                    >
                      <i class="fa-solid fa-eye"></i>
                    </NavLink>
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
