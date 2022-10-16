import './App.css';
import {BrowserRouter as Router, Route,Routes, Navigate} from 'react-router-dom';
import Todos from './Todos';
import Login from './Login';
import {useEffect, useState} from 'react'

function App() {

  // 로컬스토리지의 토큰값 상태값으로 설정

  const [token, setToken] = useState("")

  useEffect(()=>{
      setToken(localStorage.getItem("token"))
  }
  ,[token])


  //로컬스토리지에 저장된 토큰값이 undefined으로 변경될경우 삭제
  if(localStorage.getItem('token') === "undefined"){
    localStorage.removeItem('token')
}
  //로컬스토리지 토큰 저장 여부에 따른 페이지 분기
  return(
      <Router>
      {  !token ? <Navigate to ="/" /> : <Navigate to="/todo" /> }
        <Routes>
          <Route path="/" element={<Login/>}></Route> 
          <Route path="/todo" element={<Todos/>}></Route>
        </Routes>
      </Router>
  )
  }
export default App;
