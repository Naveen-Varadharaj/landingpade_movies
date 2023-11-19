import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
}
root.render(<App />);

//https://github.com/SananMuzaffarov/ReactJS-Projects/tree/main/React%20JS%20-%20Landing%20Page/src/Assets