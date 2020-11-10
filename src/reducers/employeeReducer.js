
import 
{    
    SEND_REQUEST,
    GET_EMPLOYEES,
     EMPLOYEES_LOADING,
     ADD_EMPLOYEE, 
     DELETE_EMPLOYEE,
     GET_EMPLOYEE,
     SIGNUP_USER,
     LOGIN_USER
    } 
    from '../actions/types';

const initialState = {

    employees:[],
    user:{},
    users:[],
    loading:false
}

export default function(state=initialState,action){
    switch(action.type)
    {

        case SEND_REQUEST:
             // console.log(action.payload);
            return {
                 ...state,
                loading:true
    
            };


        case GET_EMPLOYEES:
             // console.log(action.payload);
            return {
                 ...state,
                employees:action.payload,
                loading:false
    
            };


            case GET_EMPLOYEE:
               console.log(action.payload);
                return {
                     ...state,
                    employee:action.payload,
                    loading:false
                };

       

           case ADD_EMPLOYEE:
            //    console.log(action.payload);
            return{
                ...state,
                employees:[action.payload, ...state.employees]
            };
           
            case SIGNUP_USER:
                return{
                    ...state,
                    users:[action.payload, ...state.users]
                };

             case LOGIN_USER:
                return{
                    ...state,
                    user:action.payload
                 };
          

            
            case DELETE_EMPLOYEE:
                return{
                    ...state,
                    employees:state.employees.filter(employee=>employee.id!=action.payload)
                }

                case EMPLOYEES_LOADING:
                    return{
                       ...state,
                       loading:true 
                  };
     
         default:
          return state;   
        }
    }