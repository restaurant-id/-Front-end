import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import AppRouter from "./Components/AppRouter";

import 'bootstrap/dist/css/bootstrap.css';
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AppRouter/>
      <Footer/>
    </div>
  );
}

export default App;
