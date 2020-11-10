import axios from 'axios';
import {   
         SEND_REQUEST,
         GET_EMPLOYEES,
         EMPLOYEES_LOADING, 
         ADD_EMPLOYEE, 
         DELETE_EMPLOYEE,
         GET_EMPLOYEE, 
         SIGNUP_USER,
         LOGIN_USER,
         LOGIN_REQUEST
         } 
         from './types';

export const fetchEmployees = (page) =>{

    
    return{
        type:SEND_REQUEST,
        payload:page
    }

}


export const getEmployees = (employees) =>{

    
    return{
        type:GET_EMPLOYEES,
        payload:employees
    }

}

export const postUser = (user_data) =>{
    return{
        type:LOGIN_REQUEST,
        payload:user_data
    }
}

export const loginUser = (user) =>{
        
        return{
          type:LOGIN_USER,
          payload:user
        }    
}

// export const getEmployee = (id)=>dispatch =>{

//     dispatch(setEmployeesLoading());
//     axios
//     .get(`http://localhost/practice/public/index.php/api/employee/${id}`)
//     .then(res=>
//      dispatch({
//          type:GET_EMPLOYEE,
//          payload:res.data
//      })
     
//      )
  
 
//  }
 


export const addEmployee = (employee)  =>{

    // axios
    // .post('http://localhost/practice/public/index.php//api/employees/add',employee)
    // .then(res=>
    //     dispatch({
    //       type:ADD_EMPLOYEE,
    //       payload:res.data
    // }))
    return{
        type:ADD_EMPLOYEE,
        payload:employee
    }

}


export const addUser = (user) =>{

    // axios
    // .post('http://localhost/practice/public/index.php/api/signup',user)
    // .then(res=>
    //     dispatch({
        return{
          type:SIGNUP_USER,
          payload:user
        }
    

}



export const deleteEmployee = (id) =>{
  
    return{
        type:DELETE_EMPLOYEE,
        payload:id
    }
    
}


export const setEmployeesLoading = () =>  {
    return{
        type:EMPLOYEES_LOADING 
    }
}