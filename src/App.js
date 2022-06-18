import React from 'react';
// import styles from './App.module.scss';
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import { Routes, Route} from 'react-router-dom';

const App = () => {
  
  return (
      <div>
          <Routes>
              <Route path={`/registration`} element={<Registration />}/>
              <Route path={`/login`} element={<Login />}/>
          </Routes>
      </div>
  );
}

export default App;
