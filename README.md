# 2022년 10월 Wanted Frontend 프리온보딩 코스 사전과제


0.특이사항

![image](https://user-images.githubusercontent.com/103189961/195993322-f0b55c0f-8c09-4324-a476-65836af77d93.png)
: 실행시 Maximum Update update depth Excceed 관련 Warning 발생(useEffect), 프로젝트 내에서는 Login.js / SignUpComponent.js 파일에 useCallback 함수는 사용하였으나
  useEffect 함수는 사용하지 않음. 
App.js 파일내 {  !localStorage.getItem('token') ? <Navigate to ="/" /> : <Navigate to="/todo" /> } 이 부분을 주석처리후 콘솔을 확인하니 위와 같은 에러가 발생되지 않았음
즉, !localStorage.getItem('token') 무한히 계속실행 되고 있는 것으로 확인. 현재 해결중





1. 프로젝트 실행 방법

1)




