
import { Button,Form } from 'semantic-ui-react'

import React, { Component } from 'react'
import axios from 'axios';
import {Redirect,Link} from 'react-router-dom';
import Login from './login';
import { connect } from 'react-redux';
import { addUser } from '../actions/employeesActions';

 class signup extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            e_email:'',
            e_pass:'',
            emailError:'',
            passError:'',
            isLogin:false
            
        }
    }
    
onChangeEmail=(e)=>{
   this.setState({
       e_email:e.target.value
   })
}

onChangePass=(e)=>{
    this.setState({
        e_pass:e.target.value
    })
}

validate =()=>{
          
    let emailError='';
    let passError='';
    if(!this.state.e_email.includes("@")){
        emailError="Invalid email";
    }

    if((this.state.e_pass).length<6)
    {
        passError="Password should have atleast 6 digit";
    }

    if(emailError || passError) 
    {
        this.setState({emailError,passError});
        return false;
    }
    return true;
   }

onSubmit=(e)=>{
    


    const isValid = this.validate();
   
    if(isValid){

        e.preventDefault();
        const obj={
            email:this.state.e_email,
            pass:this.state.e_pass
           
          };
    
        // axios.post('http://localhost/practice/public/index.php/api/signup',obj)
        // .then(res=>console.log(res.data));
        
        this.props.addUser(obj);
        this.setState({
            e_email:'',
            e_pass:'',
            isSignup:true,
            emailError:'',
            passError:''
           
            },()=>console.log('false'))
    }
    
}

    render() {

    const {isSignup} = this.state;
    if(isSignup)
    {
        return <Redirect to='/' />
    }

        return (
            <div className="signup">
                <div style={{marginTop:100}}>
                <h3>Signup User</h3>
                <Form onSubmit={this.onSubmit}>

                <Form.Field>
               <label>Email</label>
               <input type="text" 
                value={this.state.e_email}
               onChange={this.onChangeEmail}
               />
                   <div style={{fontSize:12,color:"red"}}>
                  {this.state.emailError}
              </div>
               </Form.Field>

               <Form.Field>
               <label>Password</label>
               <input type="password" 
                value={this.state.e_pass}
               onChange={this.onChangePass}
               />
                   <div style={{fontSize:12,color:"red"}}>
                  {this.state.passError}
              </div>
               </Form.Field>
               <Button  primary type='submit'>Signup</Button>
               <Link  to={"/"}   className="button"> Already Have An Account
               </Link>

                </Form>
            
            </div>

            </div>
        )
    }
}

const mapStateToProps = state =>({
    user:state.employee
})


export default connect(mapStateToProps, {addUser})(signup);