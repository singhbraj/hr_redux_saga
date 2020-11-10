import React, { Component } from 'react'
import { Button, Form} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addEmployee } from '../actions/employeesActions';


 class insert extends Component {


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
            emp:{},
            addSuccess:false,
            nameError:'',
            salError:'',
            desiError:''
        }
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //       this.setState({addSuccess: !this.state.addSuccess})
    //     }, 10000)
    //   }

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

            if((this.state.e_desi).length<1)
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

//   toggle=()=>{
//     this.setState({
//         addSuccess: !this.state.addSuccess
//       });
//   }

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

        //    this.props.addEmployee(obj,this.toggle());
          this.props.addEmployee(obj,this.setState({
              addSuccess:!this.state.addSuccess
          }));
        //    console.log(this.state.emp);
            // console.log(this.props.employee.empadd);

            
            // this.setState({
            //     e_name:'',
            //     e_salary:'',
            //     e_desi:'',
            //     addSuccess:true,
            //     nameError:'',
            //     salError:'',
            //     desiError:''
            //     });
    
          
            
        }
    }
    


    render() {

        // const {addSuccess}=this.state;
        
    
         if(this.state.addSuccess===true )
          {
             return(    
                
                 <Redirect to={'/view'} />
             )
          }

        return (
            <div className="insert">
                <div style={{marginTop:10}}>
                <h3>Add New Employee</h3>
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

               <Button  primary type='submit'>Add</Button>

                </Form>
            
            </div>

            </div>
        )
    }
}


const mapStateToProps = state =>({
    employee:state.employee
})


export default connect(mapStateToProps,{addEmployee}) (insert);