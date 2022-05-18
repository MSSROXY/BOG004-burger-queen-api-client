import React from 'react';
import ReactDOM from 'react-dom';
import Views from './router';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <Views/>, 
  document.getElementById('root')
);