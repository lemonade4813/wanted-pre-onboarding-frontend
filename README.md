# 2022년 10월 Wanted Frontend 프리온보딩 코스 사전과제(2022/10/16 최종수정)


## 1. Auth

### Assignment1/ Assignment2/Assignment3

(1)로그인 폼 하단의 signin 클릭하면 signup 폼을 열고 닫을 수 있다.

![image](https://user-images.githubusercontent.com/103189961/195994049-9b37e102-cd87-42ff-88c4-fff518ef8868.png)

![image](https://user-images.githubusercontent.com/103189961/196024459-0482f1e5-8730-416a-ad66-fbcefd978a6c.png)

(2)이메일과 패스워드를 입력하면 유효성이 체크되고 유효값 입력시 회원가입 버튼이 활성화된다.

가입하기 버튼을 누르면 입력된 정보로 API를 호출한다.

![image](https://user-images.githubusercontent.com/103189961/195994122-af720260-aeb9-4360-8d60-589ce1b73f2d.png)

<성공시>
![success signup](https://user-images.githubusercontent.com/103189961/195993571-62582859-22b7-41a7-934b-0e5800daed7a.JPG)

<이메일 중복시>
![signup fail](https://user-images.githubusercontent.com/103189961/195993581-76b97c6c-abda-4a95-813c-652f41f4e99e.JPG)


(3) 이메일과 패스워드를 입력하면 유효성이 체크되며 유효값 입력시 signin 버튼이 활성화된다. 

signin 버튼을 누르면 signIn API가 호출되고 localstorage에 token값이 저장되도록 한다.

<span style="color:red">현재 로그인후 자동으로 /todo로 라우팅이 되지 않는 문제 발생 login 버튼 클릭후 주소창에 아래 주소로 다시 입력해야 합니다. </span><br/>
<span style="color:red">(양해 부탁드립니다)</span><br/>

<span style="color:red">https://lemonade4813.github.io/wanted-pre-onboarding-frontend/</span>

![image](https://user-images.githubusercontent.com/103189961/196025005-df9cf879-2e19-4655-a5f4-64b7731cd4a1.png)

(4) 로컬스토리지에 토큰 존재할경우 /todo 페이지로 이동
https://lemonade4813.github.io/wanted-pre-onboarding-frontend/
![image](https://user-images.githubusercontent.com/103189961/196025201-072f2a78-685c-4dbb-b0b5-53c594936bf0.png)
## 2.Todo

### Assignment4 

할입 입력란에 text를 입력하고 추가 버튼을 누르면 createTodo API가 호출된다

![image](https://user-images.githubusercontent.com/103189961/195994538-8ac2b7b7-0d9b-4534-af1d-bd4e1c944638.png)
![success createTodo](https://user-images.githubusercontent.com/103189961/195994424-9da03814-e48b-4e6e-8b0a-29135b21adbb.JPG)

좌측에 조회하기 버튼을 클릭하면 Todo 리스트를 조회할 수 있다
![저장5](https://user-images.githubusercontent.com/103189961/196026395-fac00eb4-c65c-4061-81ed-eac302ae38d1.JPG)


### Assignment5

#### useRef()로 이벤트가 발생한 DOM을 검색하는 방법을 찾아 보았지만 해결하지 못했습니다.
