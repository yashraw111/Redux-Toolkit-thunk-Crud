import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ViewUser } from '../UserSlice';

const SingleUser = () => {

    const {id} = useParams()

    const {userList} = useSelector((state)=>state.users)
    console.log(userList);
    
    console.log(id);

    const SingleUser = userList.find((user)=>{
        return user.id == id

    })
    console.log(SingleUser);
    

    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(ViewUser())
    },[dispatch])
    
  return (
    // <div>SingleUser</div>

    <>
    <div className="container">
        <h1></h1>
        <div className="col-4 mx-auto shadow p-4 text-center">
            <h3 className='mb-4 text-success'>Single Blog</h3>
            <h3 ><b>Name:</b>{SingleUser.name}</h3>
            <h5><b>Date :</b> {SingleUser.blog}</h5>
            <p><b>Des :</b> {SingleUser.des}</p>
        </div>
    </div>
    </>
  )
}

export default SingleUser