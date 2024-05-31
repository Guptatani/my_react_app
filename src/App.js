

import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import BlogPost from './components/BlogPost';
import image1 from './alex-fedorenko-zBMKUdPAKmk-unsplash.jpg'
import image2 from './anzhela-bets-81Dc3H1iipk-unsplash.jpg'

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <BlogPost 
          title="My First Blog Post"
          date="May 31, 2024"
          author="Tanisha Gupta"
          image={image1}
          body="Ukraine is expected to strike Russian territory – using US arms – within hours after president Joe Biden lifted the embargo, it is being reported.

          Such an attack could a new chapter in the war, particularly in the Kharkiv Region, where Russian troops have been making major battlefield gains in recent weeks.
          
          European countries have been increasingly calling on the White House to permit strikes across the border with American weapons."/>
        <BlogPost 
          title="Another Interesting Post"
          date="May 30, 2024"
          author="Tanisha Gupta"
          image={image2}
          body="Since the start of the Russian invasion, Biden has opposed Ukraine using US-made weaponry offensively out of concern that the action could be seen as provocative and lead to Moscow widening the war."
        />
      </div>
    </div>
  );
};

export default App;
