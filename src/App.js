

import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import BlogPost from './components/BlogPost';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <BlogPost 
          title="My First Blog Post"
          date="May 30, 2024"
          author="Narveer Saharan"
          image="https://via.placeholder.com/600"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor."
        />
        <BlogPost 
          title="Another Interesting Post"
          date="May 29, 2024"
          author="Narveer Saharan"
          image="https://via.placeholder.com/600"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor."
        />
      </div>
    </div>
  );
};

export default App;
