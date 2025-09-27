import React, { useEffect, useState } from "react";
import { Box, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import './UserStyle.css';
import {getAllUser} from './../../actions/user.actions'
import { useSelector } from "react-redux";
import BlogList from './../Blog/BlogList'
//import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const User = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);
  
  useEffect(() => {
    console.log('====this is callig every time')
    dispatch(getAllUser());
  }, [count]);
  
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


  const users = useSelector((state) => state.users);
  console.log("=====users",users)
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
        
        
        <div class="table-row">
            <div class="table-cell id" data-label="ID">#101</div>
            <div class="table-cell" data-label="Employee">
                <div class="d-flex align-items-center">
                    <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" >JS</div>
                    <div>
                        <div class="fw-bold">John Smith</div>
                        <div class="text-muted small">john.smith@company.com</div>
                    </div>
                </div>
            </div>
            <div class="table-cell" data-label="Department">Engineering</div>
            <div class="table-cell" data-label="Position">Senior Developer</div>
            <div class="table-cell" data-label="Join Date">2022-03-15</div>
            <div class="table-cell" data-label="Status">
                <span class="status-badge status-active">Active</span>
            </div>
            <div class="table-cell actions" data-label="Actions">
                <button class="btn btn-outline-primary btn-sm">Edit</button>
                <button class="btn btn-outline-danger btn-sm">Delete</button>
            </div>
        </div>
        
        <div class="table-row">
            <div class="table-cell id" data-label="ID">#102</div>
            <div class="table-cell" data-label="Employee">
                <div class="d-flex align-items-center">
                    <div class="rounded-circle bg-success text-white d-flex align-items-center justify-content-center me-3" >SJ</div>
                    <div>
                        <div class="fw-bold">Sarah Johnson</div>
                        <div class="text-muted small">sarah.j@company.com</div>
                    </div>
                </div>
            </div>
            <div class="table-cell" data-label="Department">Marketing</div>
            <div class="table-cell" data-label="Position">Marketing Manager</div>
            <div class="table-cell" data-label="Join Date">2021-07-22</div>
            <div class="table-cell" data-label="Status">
                <span class="status-badge status-active">Active</span>
            </div>
            <div class="table-cell actions" data-label="Actions">
                <button class="btn btn-outline-primary btn-sm">Edit</button>
                <button class="btn btn-outline-danger btn-sm">Delete</button>
            </div>
        </div>
        
        <div class="table-row">
            <div class="table-cell id" data-label="ID">#103</div>
            <div class="table-cell" data-label="Employee">
                <div class="d-flex align-items-center">
                    <div class="rounded-circle bg-info text-white d-flex align-items-center justify-content-center me-3" >MB</div>
                    <div>
                        <div class="fw-bold">Michael Brown</div>
                        <div class="text-muted small">m.brown@company.com</div>
                    </div>
                </div>
            </div>
            <div class="table-cell" data-label="Department">Sales</div>
            <div class="table-cell" data-label="Position">Sales Representative</div>
            <div class="table-cell" data-label="Join Date">2023-01-10</div>
            <div class="table-cell" data-label="Status">
                <span class="status-badge status-inactive">Inactive</span>
            </div>
            <div class="table-cell actions" data-label="Actions">
                <button class="btn btn-outline-primary btn-sm">Edit</button>
                <button class="btn btn-outline-danger btn-sm">Delete</button>
            </div>
        </div>
        
        <div class="table-row">
            <div class="table-cell id" data-label="ID">#104</div>
            <div class="table-cell" data-label="Employee">
                <div class="d-flex align-items-center">
                    <div class="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center me-3" >ED</div>
                    <div>
                        <div class="fw-bold">Emily Davis</div>
                        <div class="text-muted small">emily.davis@company.com</div>
                    </div>
                </div>
            </div>
            <div class="table-cell" data-label="Department">HR</div>
            <div class="table-cell" data-label="Position">HR Specialist</div>
            <div class="table-cell" data-label="Join Date">2020-11-05</div>
            <div class="table-cell" data-label="Status">
                <span class="status-badge status-pending">Pending</span>
            </div>
            <div class="table-cell actions" data-label="Actions">
                <button class="btn btn-outline-primary btn-sm">Edit</button>
                <button class="btn btn-outline-danger btn-sm">Delete</button>
            </div>
        </div>
        
        <div class="table-row">
            <div class="table-cell id" data-label="ID">#105</div>
            <div class="table-cell" data-label="Employee">
                <div class="d-flex align-items-center">
                    <div class="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center me-3" >RW</div>
                    <div>
                        <div class="fw-bold">Robert Wilson</div>
                        <div class="text-muted small">r.wilson@company.com</div>
                    </div>
                </div>
            </div>
            <div class="table-cell" data-label="Department">Finance</div>
            <div class="table-cell" data-label="Position">Financial Analyst</div>
            <div class="table-cell" data-label="Join Date">2022-09-18</div>
            <div class="table-cell" data-label="Status">
                <span class="status-badge status-active">Active</span>
            </div>
            <div class="table-cell actions" data-label="Actions">
                <button class="btn btn-outline-primary btn-sm">Edit</button>
                <button class="btn btn-outline-danger btn-sm">Delete</button>
            </div>
        </div>
        
        
        <div class="table-footer">
            <div class="text-muted">
                Showing 1 to 5 of 25 entries
            </div>
            <div>
                <nav aria-label="Page navigation">
                    <ul class="pagination mb-0">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>








<ul class="list-group list-group-horizontal">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>





      <BlogList {...BlogListProps}/>
      <button >Click Me</button>
      <p>{count}</p>
      <p>{blogCount}</p>
      {
        users.map((user)=>(
          <ul class="list-group list-group-horizontal">
          <li class="list-group-item">{user.name}</li>
          <li class="list-group-item">{user.email}</li>
          <li class="list-group-item">A third item</li>
        </ul>


           
        ))
      }

    </>
  );
};
export default User;
