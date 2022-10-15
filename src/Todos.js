import {useState} from 'react'
import axios from 'axios'


export default function Todos(){
    
    if(localStorage.getItem('token') === "undefined"){
        localStorage.removeItem('token')
    }

     //Todo 공통 url (createTodo/getTodo/updateTodo/deleteTodo)
     let url = "https://pre-onboarding-selection-task.shop/todos"  
  
    // 할일 입력 input 창에 입력한 값 가져오기
    const [todo, setTodo] = useState("")
    
    // getTodo 호출값 저장
    const [datas, setGetDatas] = useState([])

    // 할입 입력 input 창에 이벤트 발생시
    function listenTodo(e){
        setTodo(e.target.value)
    }

    // 로컬 스토리지에 token 저장
    const token = localStorage.getItem('token')
    console.log(token)
    
    //Todo 공통 url (createTodo/getTodo/updateTodo/deleteTodo)
   // let url = "https://pre-onboarding-selection-task.shop/todos"  


    //Todo 입력
    function createTodo(){

        let data = {
                     "todo": todo
                   }
                   
                   axios
                   .post(url,  JSON.stringify(data), {
                   headers: {
                               "Content-Type": `application/json`,
                               "Authorization" : `Bearer ${token}`,
                               "withCredentials" : true
                            },
                   })
                   .then((res) => {
                        localStorage.setItem('token', res.data.access_token)
                        console.log("success createTodo")
                    });  
        }     
    
        // Todo 리스트 가져오기

        function getTodo(){
                
                axios
                .get(url, {
                        headers: {
                                   "Authorization" : `Bearer ${token}`
                                },
                    })
                .then((res) => {
                           setGetDatas(res.data)
                           console.log(datas)
                           console.log("success getTodo") 
                    })
                .catch((error)=>{
                            console.log(error.response)
                    });  
            }    
       
        // Todo 리스트 삭제   

        function deleteTodo(id){
                       
                console.log(id)
                       
                axios      
                .delete(url + `/${id}`, {
                       headers: {
                                   "Authorization" : `Bearer ${token}`
                                },
                       })
                .then((res) => {
                           setGetDatas(res.data)
                       })
                .catch((error)=>{
                            console.log(error.response)
                       });  
            } 

        // Todo 리스트 수정   

        function updateTodo(id){
                       
                console.log(id)
                
                axios
               .put(url + `/${id}`, {
                    headers: {
                                "Authorization" : `Bearer ${token}`
                             },
                    })
               .then((res) => {
                   setGetDatas(res.data)
                    })
               .catch((error)=>{
                    console.log(error.response)
                });  
    }  

    const tdClick =(e) => {
        console.log(e.target)
    }

    return(
        <div className ="todoList">
            <h1>TodoList</h1>
            
            <div class="headerTodoList">
                <div class="getTodo">
                    <button onClick={getTodo}>조회하기</button>
                </div>
                <div class="inputTodo">
                    <p>할일 입력</p>
                    <input onChange={listenTodo} type="text" placeholder='input Todo'/>
                    <button onClick={createTodo}>추가</button>
                </div>
            </div>
            <div id ="todotable" className = "todoTable">
                <table> 
                    <thead>
                    <tr>
                        <td><strong>ID</strong></td>
                        <td><strong>Todo</strong></td>    
                        <td><strong>완료여부</strong></td>
                        <td><strong>수정하기</strong></td>
                        <td><strong>수정내용입력</strong></td>
                        <td><strong>전송</strong></td>
                        <td><strong>취소</strong></td>
                        <td><strong>삭제</strong></td>
                    </tr>
                    </thead>
                    <tbody>
                    {datas.map((data) => (
                        <tr onClick = {tdClick} key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.todo}</td>
                            <td>완료</td>
                            <td><button style={{width:"100%"}} onClick={updateTodo(data.id)}>수정하기</button></td>
                            <td><input type="text" style={{width : "100px"}} disabled ="true"/></td> {/*수정 내용입력부분*/}
                            <td><button style={{width:"100%"}}>전송하기</button></td>
                            <td><button style={{width:"100%"}}>취소하기</button></td>
                            <td><button style={{width:"100%"}} onClick={deleteTodo(data.id)}>삭제하기</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            
        </div>
        
    )
}