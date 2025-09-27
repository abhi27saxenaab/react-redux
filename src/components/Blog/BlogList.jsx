import React, { useEffect, useState } from "react";
const BlogList = (props) =>{

    console.log("==props", props)

    const clickonBlogList =()=>{
        console.log("=============clickonBlogList")
        setBlogCount(blogCount+1)
        props.clickonBlogList(blogCount)
    }

    const [blogCount,setBlogCount] =useState(0);



    return (
        <p>
            Blog Listing =={props.count}=={blogCount}
            <button onClick={clickonBlogList}>Client Child Blog</button>
            
        </p>
    )
}
export default BlogList;