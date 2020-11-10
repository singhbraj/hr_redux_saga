import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, Message } from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';


export default class edit extends Component {
    constructor(props) {
        super(props)
         
        this.onChangeEmpName = this.onChangeEmpName.bind(this);
        this.onChangeEmpSal = this.onChangeEmpSal.bind(this);
        this.onChangeEmpDes = this.onChangeEmpDes.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            e_name:'',
            e_salary:'',
            e_desi:'',
            nameError:'',
            salError:'',
            desiError:'',
            isUpdate:'',
        }
    }

    componentDidMount(){

        axios.get('http://localhost/practice/public/index.php/api/employee/'+this.props.match.params.id)
        .then(response => {

    
            this.setState({
            
                e_name:response.data.e_name,
                e_salary:response.data.e_salary,
                e_desi:response.data.e_desi
            
            });
        })
        .catch(function(error){
            console.log(error);
        })
       
    }

        onChangeEmpName(e)
        {
            this.setState({
                e_name:e.target.value
            });
        }

        onChangeEmpSal(e)
        {
            this.setState({
                e_salary:e.target.value
            });
        }
       
        onChangeEmpDes(e)
        {
            this.setState({
                e_desi:e.target.value
            });
        }   


        validate =()=>{
          
            let nameError='';
            let salError='';
            let desiError='';
            
      
            if((this.state.e_name).length<3)
            {
                nameError="Name should be at least three character";
            }

            if((this.state.e_salary).length<4)
            {
                salError="Salary should be more than three digit";
            }

            if((this.state.e_desi).length<2)
            {
                desiError="Designation should not be empty";
            }
    
            if(nameError || salError || desiError) 
            {
                this.setState({nameError,salError,desiError});
                return false;
            }
            return true;
           }

        onSubmit(e)
        {
   
            const isValid = this.validate();

            if(isValid)
            {

            e.preventDefault();
            const obj={
                e_name:this.state.e_name,
                e_salary:this.state.e_salary,
                e_desi:this.state.e_desi
            };
    
    
            axios.put('http://localhost/practice/public/index.php/api/employee/update/'+this.props.match.params.id,obj)
            .then(res=>this.setState({
                isUpdate:res.data.success
            }));
            // this.setState({
            //     isUpdate:res.data.success
            // })
        }
    }

 
    
    
    render() {
 

       const {isUpdate} = this.state;

       if(isUpdate)
       {
           return(
            <Redirect to={'/view'} />
           )
       }
      
       
        return (

            <div style={{marginTop:10}}>
                <h3>Update User</h3>
                <Form onSubmit={this.onSubmit}>

                <Form.Field>
               <label>Emp Name</label>
               <input type="text" 
                value={this.state.e_name}
               onChange={this.onChangeEmpName}
               />
                 <div style={{fontSize:12,color:"red"}}>
               {this.state.nameError}
              </div>
               </Form.Field>

               <Form.Field>
               <label>Emp Salary</label>
               <input type="text" 
                value={this.state.e_salary}
               onChange={this.onChangeEmpSal}
               />
               <div style={{fontSize:12,color:"red"}}>
                  {this.state.salError}
              </div>
               </Form.Field>



                 <Form.Field>
               <label>Emp Desi</label>
               <input type="text" 
                value={this.state.e_desi}
               onChange={this.onChangeEmpDes}
               />
               <div style={{fontSize:12,color:"red"}}>
                  {this.state.desiError}
                 </div>
               </Form.Field>

               <Button  primary type='submit'>Update</Button>

                </Form>
            </div>
        )
    }
}
