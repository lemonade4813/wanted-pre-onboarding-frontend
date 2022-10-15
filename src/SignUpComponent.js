import { useState ,useCallback } from "react"
import axios from 'axios'

export default function SignUpComponent(){

    //이메일 입력값 가져오기
    const [email, setEmail] = useState("")
    //패스워드 입력값 가져오기
    const [password, setPassword] = useState("")
    //이메일 유효성 상태
    const [emailValidState, setEmailValidState] = useState(false)
    //비밀번호 유효성 상태
    const [passwordValidState, setPasswordValidState] = useState(false)

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
        
        //패스워드 상태값 등록
        setPassword(passwordCurrent)
    
        //현재 입력된 비밀번호의 유효성 여부에 따라 유효 상태 설정
        if (!passwordRegex.test(passwordCurrent)) {
          setPasswordValidState(false)
        } else {
          setPasswordValidState(true)
        }
      }, [])

      //회원 가입 등록 함수
      function createSignUp(){
            let url = "https://pre-onboarding-selection-task.shop/auth/signup"
            let data = {
                            "email": email,
                            "password": password
                        }
            axios
            .post(url,  JSON.stringify(data), {
            headers: {
                        "Content-Type": `application/json`,
                     },
            })
            .then((res) => {
                console.log(`signup success!, token : ${res.data.access_token}`)
              })
            .catch((error) =>{
                console.log(error.response.data.message)
            });  
            }   
    return(
        <div>
            {/*회원가입 양식 */}
            <form className = "signUp">
            <p style ={{color:"#fff" , fontSize:"30px"}}>회원가입</p>
                <label htmlFor="email">email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={emailCheck}
                      placeholder="test@email.com"
                      style ={{height : "20px", marginBottom : "20px"}}
                    />
                <label htmlFor="password">password</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={passwordCheck}
                      placeholder="****************"
                      style ={{height : "20px", marginBottom : "20px"}}
                    />
                <button onClick={createSignUp}  disabled={(emailValidState && passwordValidState)? false : true} style ={{width : "100px", height : "30px"}}>가입하기</button>
              </form>   
        </div>
    )
}