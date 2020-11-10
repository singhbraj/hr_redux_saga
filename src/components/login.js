import React, { Component } from 'react'
import axios from 'axios';
import { Button, Form, Message} from 'semantic-ui-react'
import {Link, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import { postUser } from '../actions/employeesActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



 class login extends Component {


       constructor(props) {
           super(props)
       
           this.state = {
                email:'',
                pass:'',
                emailError:'',
                passError:'',
                isLogin:false,
                message:''
           }
       }
        

       onChangeEmail =(e)=>{

         this.setState({
             email:e.target.value
         })

       }

       onChangePass=(e)=>{
           this.setState({
     pass:e.target.value
           })
       }

     

       validate =()=>{
          
        let emailError='';
        let passError='';
        if(!this.state.email.includes("@")){
            emailError="Invalid email";
        }
  
        if((this.state.pass).length<6)
        {
            passError="Password is not valid";
        }

        if(emailError || passError) 
        {
            this.setState({emailError,passError});
            return false;
        }
        return true;
       }
   
       onSubmit=(e)=>{
         
        e.preventDefault();

        const isValid = this.validate();

        if(isValid)
        {

        const obj={
            email:this.state.email,
            pass:this.state.pass
            
        };


        this.props.postUser(obj);
        
        // console.log(this.props.employee.user);
       
    //    console.log(this.props.employee);
        if(this.props.employee.user.success===false)
        {
            this.setState({
                message:'Email or Password is not correct!'})
            // },()=>console.log('false',this.state.message))
            // setTimeout(()=>{
            //     this.setState({message:''},()=>console.log('timeout',this.state.message))
            // },5000)
            // this.setState({message:''})
            e.preventDefault();

        }  
    };
       }
    

    render() {
     

        // const {isLogin} = this.state;

        if(this.props.employee.user.success === true)
        {
            return (
            //     <div>
            //     <Navbar />
            //  </div>
            <Redirect to={'/view'} />
             )

        }

       
       
     
        return (
            <>
             
            <div style={{marginTop:100}} className="login">
         
      
            <h3>Login User</h3>
            {
            this.state.message!==''?
                
                <Message negative className="message" >
                <Message.Header>{this.state.message} </Message.Header> 
                </Message>:null
                
            
            }
            <Form onSubmit={this.onSubmit}>
              
               <Form.Field>
               <label>Email</label>
               <input type="text" 
                value={this.state.email}
               onChange={this.onChangeEmail}
               />
                <div style={{fontSize:12,color:"red"}}>
                  {this.state.emailError}
              </div>
               </Form.Field>
             
               <Form.Field>
               <label>Password:</label>
               <input type="password" 
                value={this.state.pass}
               onChange={this.onChangePass}
               />
                 <div style={{fontSize:12,color:"red"}}>
                  {this.state.passError}
              </div>
               </Form.Field>
               
       
               <Button  primary type='submit'>Login</Button>
               <Link  to={"/signup"}   className="button"> Don't Have An Account
  
             </Link>

            
            </Form>
        
        </div>
        </>
        )
        }
    }

    login.prototypes = {

        loginUser:PropTypes.func.isRequired,
        employee:PropTypes.object.isRequired
    
    }

const mapStateToProps = (state)=>({
  
    employee:state.employee
}
);

    export default connect(mapStateToProps, {postUser} )(login)