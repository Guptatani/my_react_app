import React from 'react';
     import './Blogpost.css';

     const BlogPost = ({ title, date, author, image, body }) => {
       return (
         <div className="blog-post">
           <h2>{title}</h2>
           <p className="meta">Posted on {date} by {author}</p>
           <img src={image} alt={title} />
           <p>{body}</p>
           <hr />
         </div>
       );
     };

     export default BlogPost;