import React, { useEffect, useState,useLayoutEffect } from "react";
import { Box, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import './UserStyle.css';
import {getAllUser} from './../../actions/user.actions'
import { useSelector } from "react-redux";
import BlogList from './../Blog/BlogList'
import {setUser,setUserDetails} from './../../actions/user.actions'
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const User = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);
  let navigate = useNavigate(); 

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



//   useEffect(() => {
//     console.log('====this is callig every time')
//     dispatch(getAllUser());
//   }, []);
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users',
            {
          method: "GET",
          headers: {
            "x-rapidapi-host": "asos2.p.rapidapi.com",
            "x-rapidapi-key":
              "1949ed3468msh573f2b5adccd778p14beffjsn12e69f0cac40",
          },
        }
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Set the fetched data in state
      } catch (err) {
        setError(err); // Handle errors
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };
    fetchData(); // Call the async function
    // Optional: Cleanup function if needed (e.g., to cancel pending requests)
    return () => {
      // Cleanup logic here
    };
  }, []);





  
  const incrementCount = () =>{
    setCount(count + 1); 
  }
  const clickonBlogList =(blogCount)=>{
    console.log("=====parent",blogCount)
    setBlogCount(blogCount)
  }
  const BlogListProps={
      incrementCount,
      clickonBlogList

  }

  const editUser = (user) =>{

    dispatch(setUserDetails(user));
    navigate('/about');
  }

  


  const users = useSelector((state) => state.users);
  console.log("=====users1",data)
  return (
    <>
    

    <div class="table-container">
        <div class="table-controls">
            <div class="search-box">
                <div class="input-group">
                    <span class="input-group-text">
                        <i class="bi bi-search"></i>
                    </span>
                    <input type="text" class="form-control" placeholder="Search employees..."/>
                </div>
            </div>
            <div class="filter-options">
                <select class="form-select">
                    <option selected>All Departments</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>HR</option>
                    <option>Finance</option>
                </select>
                <select class="form-select">
                    <option selected>All Statuses</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Pending</option>
                </select>
                <button class="btn btn-outline-secondary">
                    <i class="bi bi-funnel"></i> Filter
                </button>
            </div>
        </div>
         
        <div class="table-row header">
            <div class="table-cell id">ID</div>
            <div class="table-cell">Employee</div>
            <div class="table-cell">Department</div>
            <div class="table-cell">Position</div>
            <div class="table-cell">Join Date</div>
            <div class="table-cell">Status</div>
            <div class="table-cell actions">Actions</div>
        </div>
        {
        users && users.userlist && users.userlist.map((user)=>(
        <div class="table-row">
            <div class="table-cell id" data-label="ID">#101</div>
            <div class="table-cell" data-label="Employee">
                <div class="d-flex align-items-center">
                    <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" >JS</div>
                    <div>
                        <div class="fw-bold">{user?.name}</div>
                        <div class="text-muted small">{user?.email}</div>
                    </div>
                </div>
            </div>
            <div class="table-cell" data-label="Department">{user?.website}</div>
            <div class="table-cell" data-label="Position">Senior Developer</div>
            <div class="table-cell" data-label="Join Date">{user?.phone}</div>
            <div class="table-cell" data-label="Status">
                <span class="status-badge status-active">Active</span>
            </div>
            <div class="table-cell actions" data-label="Actions">
                <button onClick={()=>editUser(user)} class="btn btn-outline-primary btn-sm">Edit</button>
                <button class="btn btn-outline-danger btn-sm">Delete</button>
            </div>
        </div>
        ))
        }
        {
            users.length==0 ? ('No Record'):('No Record1')
        }   
        
    </div>
    </>
  );
};
export default User;
