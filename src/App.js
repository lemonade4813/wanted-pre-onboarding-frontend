import './App.css';
import {BrowserRouter as Router, Route,Routes, Navigate} from 'react-router-dom';
import Todos from './Todos';
import Login from './Login';

function App() {

  if(localStorage.getItem('token') === "undefined"){
    localStorage.removeItem('token')
}

  return(
      <Router>
      {  !localStorage.getItem('token') ? <Navigate to ="/" /> : <Navigate to="/todo" /> }
        <Routes>
          <Route path="/" element={<Login/>}></Route> 
          <Route path="/todo" element={<Todos/>}></Route>
        </Routes>
      </Router>
  )
  }
export default App;
