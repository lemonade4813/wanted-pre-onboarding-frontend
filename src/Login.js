import './App.css';
import {useCallback, useState} from 'react';
import SignUpComponent from './SignUpComponent';
import axios from 'axios';

function Login() {
  
  //회원 가입 컴포넌트 활성화 / 비활성화 상태값
  const [signUpState, setSignUpState] = useState(false);
  
  //로그인시 입력 메일 상태값
  const [email, setEmail] = useState("")

  //로그인시 입력 비밀번호 상태값
  const [password, setPassword] = useState("")
  
  //로그인시 입력 메일 유효성 여부
  const [emailValidState, setEmailValidState] = useState(false)
  
  //로그인시 입력 메일 유효성 여부
  const [passwordValidState, setPasswordValidState] = useState(false)

  console.log(emailValidState, passwordValidState)

    // 회원 가입 컴포넌트 활성화 / 비활성화 상태 설정
    function controllSignUp(){
        setSignUpState(!signUpState)
    }

  //이메일 입력창에 이벤트 발생시
   const emailCheck = useCallback((e) => {
      const emailCurrent = e.target.value
      //입력 이메일 상태값 등록
      setEmail(emailCurrent)
      
      //이메일 유효성 검사 위한 정규식 작성
      const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      
      //현재 입력된 이메일 주소 유효 여부에 따라 상태값 설정
      if (!emailRegex.test(emailCurrent)) {
        setEmailValidState(false)
      } else {
        setEmailValidState(true)
      }
    }, [])

  //패스워드 입력창에 이벤트 발생시
    const passwordCheck = useCallback((e) => {
      
      const passwordCurrent = e.target.value
      //패스워드 유효성 검사 위한 정규식 작성
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
      
      //입력 비밀번호 상태값 등록
      setPassword(passwordCurrent)
  
      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordValidState(false)
      } else {
        setPasswordValidState(true)
      }
    }, [])
 

 //로그인 함수   
 function callSignIn(){

 //sigin url   
 let url = "https://pre-onboarding-selection-task.shop/auth/signin"   

 let data = {
              "email": email,
              "password": password
            }
            //API 호출
            axios
            .post(url,  JSON.stringify(data), {
            headers: {
                        "Content-Type": `application/json`,
                     },
            })
            .then((res) => {
            localStorage.setItem('token', res.data.access_token) 
            }) 
            .catch((error)=>{
                console.log(error.response)
            })
            return;  
 }           
  return (
    <div className="App">
        <div className ="SignIn">
            <h1>LOGIN</h1>
            <form className = "loginForm">
                <label htmlFor="email">email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={emailCheck}
                      placeholder="test@email.com"
                    />
                <label htmlFor="password">password</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={passwordCheck}
                      placeholder="****************"
                    />
                 <button onClick={callSignIn} disabled={(emailValidState && passwordValidState)? false : true}>login</button>
              </form>
            <button onClick={controllSignUp}>signup</button><br/><br/>
            {signUpState && <SignUpComponent/>}
        </div>
    </div>
  );

  }
export default Login;
