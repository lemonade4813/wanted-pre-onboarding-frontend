# 2022년 10월 Wanted Frontend 프리온보딩 코스 사전과제


## 0.특이사항

![image](https://user-images.githubusercontent.com/103189961/195993322-f0b55c0f-8c09-4324-a476-65836af77d93.png)


프로젝트 실행시 Maximum Update update depth Excceed 관련 Warning 발생(useEffect), 프로젝트 내에서는 Login.js / SignUpComponent.js 파일에 useCallback 함수는 사용하였으나 useEffect 함수는 사용하지 않음. 
App.js 파일내 {  !localStorage.getItem('token') ? <Navigate to ="/" /> : <Navigate to="/todo" /> } 이 부분을 주석처리후 콘솔을 확인하니 위와 같은 에러가 발생되지 않았음
즉, !localStorage.getItem('token') 무한히 계속실행 되고 있는 것으로 확인. 현재 해결중





## 1. Auth

### 1-1)signUp

![image](https://user-images.githubusercontent.com/103189961/195994049-9b37e102-cd87-42ff-88c4-fff518ef8868.png)

(1)로그인 폼 하단의 signin 클릭하면 signup 폼을 열고 닫을 수 있다.

![image](https://user-images.githubusercontent.com/103189961/195994122-af720260-aeb9-4360-8d60-589ce1b73f2d.png)

(2)이메일과 패스워드를 입력하면 유효성이 체크되고 유효값 입력시 회원가입 버튼이 활성화된다.

가입하기 버튼을 누르면 입력된 정보로 API를 호출한다.

<성공시>
![success signup](https://user-images.githubusercontent.com/103189961/195993571-62582859-22b7-41a7-934b-0e5800daed7a.JPG)

<이메일 중복시>
![signup fail](https://user-images.githubusercontent.com/103189961/195993581-76b97c6c-abda-4a95-813c-652f41f4e99e.JPG)

### 2) signIn

이메일과 패스워드를 입력하면 유효성이 체크되며 유효값 입력시 signin 버튼이 활성화된다. 

signin 버튼을 누르면 signIn API가 호출되고 localstorage에 token값이 저장되도록 한다.

![image](https://user-images.githubusercontent.com/103189961/195994196-b947c2b3-9d4c-4e44-b7e1-69148696f903.png)

## 2.Todo

### 2-1) createTodo

할입 입력란에 text를 입력하고 추가 버튼을 누르면 createTodo API가 호출된다

![image](https://user-images.githubusercontent.com/103189961/195994369-eb9d210c-0148-408e-811d-cc5c1eddb42a.png)
![success createTodo](https://user-images.githubusercontent.com/103189961/195994424-9da03814-e48b-4e6e-8b0a-29135b21adbb.JPG)



