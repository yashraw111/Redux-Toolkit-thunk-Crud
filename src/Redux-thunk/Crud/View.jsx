import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewUser } from "../UserSlice";

const View = () => {
  const { userList } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ViewUser());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h3 className="text-center mt-5">UserList</h3>

        <table className="table-responsive table-bordered table-striped col-12 ">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default View;
