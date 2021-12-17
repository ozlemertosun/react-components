import React from 'react';
import ReactDOM from 'react-dom';
import ShowJoke from './ShowJoke';
import ShowJokeList from './ShowJokeList';



ReactDOM.render(
  <React.StrictMode>
   <> 
      <ShowJoke />
  </>  

  <> 
      <ShowJokeList />
  </>  

  </React.StrictMode>,
  document.getElementById('root')
);

