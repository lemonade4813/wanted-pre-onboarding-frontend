# 2022년 10월 Wanted Frontend 프리온보딩 코스 사전과제


## 0.특이사항

![image](https://user-images.githubusercontent.com/103189961/195993322-f0b55c0f-8c09-4324-a476-65836af77d93.png)


프로젝트 실행시 Maximum Update update depth Excceed 관련 Warning 발생(useEffect), 프로젝트 내에서는 Login.js / SignUpComponent.js 파일에 useCallback 함수는 사용하였으나 useEffect 함수는 사용하지 않음. 
App.js 파일내 {  !localStorage.getItem('token') ? <Navigate to ="/" /> : <Navigate to="/todo" /> } 이 부분을 주석처리후 콘솔을 확인하니 위와 같은 에러가 발생되지 않았음
즉, !localStorage.getItem('token') 무한히 계속실행 되고 있는 것으로 확인. 현재 해결중





## 1. 프로젝트 실행 방법

1)signUp

![image](https://user-images.githubusercontent.com/103189961/195993472-2fec9028-f9d9-45a0-b39e-402934b27bb9.png)

로그인 폼 하단의 signin 클릭하면 signup 폼을 열고 닫을 수 있다.

![image](https://user-images.githubusercontent.com/103189961/195993505-4fdb3aff-046a-42e6-8b94-64f3d8b78f43.png)

이메일과 패스워드를 입력하면 유효성이 체크되고 유효값 입력시 회원가입 버튼이 활성화된다.

버튼을 누르면 입력된 정보로 API를 호출한다.

<성공시>
![success signup](https://user-images.githubusercontent.com/103189961/195993571-62582859-22b7-41a7-934b-0e5800daed7a.JPG)

<이메일 중복시>
![signup fail](https://user-images.githubusercontent.com/103189961/195993581-76b97c6c-abda-4a95-813c-652f41f4e99e.JPG)

2) signIn

![저장1](https://user-images.githubusercontent.com/103189961/195993707-8d364ba7-2fb3-4563-bc7c-a54e959cff98.JPG)


