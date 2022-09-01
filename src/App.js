import Header  from './components/Header';
import './App.css';
import React from "react";
import { Form } from './components/Form';
import { demo } from './components/demo';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <div>
      <div>

      <Link to="/">Home</Link>
      </div>

      <div>

      <Link to="/form">Form</Link>
      </div>

      <div>
      <Link to="/demo">Demo</Link>
      </div>

    </div>

    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/form" element={<Form />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
