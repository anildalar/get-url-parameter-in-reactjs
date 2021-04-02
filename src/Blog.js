import React from 'react'
import {useParams} from "react-router-dom";
/**
* @author
* @function Blog
**/

const Blog = (props) => {
    const params = useParams();
  return(
    <div>Blog {params.blogid}</div>
   )

 }

export default Blog