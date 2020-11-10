import { takeEvery, call, put } from 'redux-saga/effects';
import  axios  from "axios";
import {getEmployees, loginUser} from '../actions/employeesActions';
import { DELETE_EMPLOYEE,SEND_REQUEST,LOGIN_REQUEST, ADD_EMPLOYEE, SIGNUP_USER} from '../actions/types';


function* asyncFetchRequest(action){
    
    try{
        const url =`http://localhost/practice/public/index.php/api/employees/${action.payload}`
        const response = yield call(()=>axios.get(url))
        yield put(getEmployees(response.data));
    }
    catch(error){
        console.log(error);
    }
}


export function* watchFetchEmployeesSaga(){
   yield takeEvery(SEND_REQUEST, asyncFetchRequest)
}


function* asyncLogin(action){

    try{
        const url ='http://localhost/practice/public/index.php/api/login'
        const response = yield call(()=>axios.post(url,action.payload))
        yield put(loginUser(response.data));
    }
    catch(error){
        console.log(error);
    }
}


export function* watchLoginUserSaga(){
    yield takeEvery(LOGIN_REQUEST,asyncLogin)
}


function* asyncAddEmployee(action){

    try{
        
        const url ='http://localhost/practice/public/index.php//api/employees/add'
        const response = yield call(()=>axios.post(url,action.payload))
      
    }
    catch(error){
        console.log(error);
    }

}



export function* watchAddEmployeeSaga(){
    yield takeEvery(ADD_EMPLOYEE,asyncAddEmployee)
}


function* asyncDeleteEmployee(action){

    try{
        
       // console.log('Hello Kishor');
        const url =`http://localhost/practice/public/index.php/api/employee/delete/${action.payload}`
        const response = yield call(()=>axios.delete(url))
    
    }
    catch(error){
        console.log(error);
    }

}


export function* watchDeleteEmployeeSaga(){
    yield takeEvery(DELETE_EMPLOYEE,asyncDeleteEmployee)
}


function* asyncSignupUser(action){

    try{
        
        console.log('Hello Kishor');
        const url ='http://localhost/practice/public/index.php/api/signup'
        const response = yield call(()=>axios.post(url,action.payload))
    
    }
    catch(error){
        console.log(error);
    }

}



export function* watchSignupUserSaga(){
    yield takeEvery(SIGNUP_USER,asyncSignupUser)
}