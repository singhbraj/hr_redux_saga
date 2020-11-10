import React, { Component } from 'react'

import { Table,Button } from 'semantic-ui-react'
import RecordList from './recordList';
import PropTypes from 'prop-types';
import { getEmployees,fetchEmployees } from '../actions/employeesActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class view extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             page:1
        }
    }
    preHandle=()=>{
        if(this.state.page >1){
       this.setState({page:this.state.page-1},()=>{
        // console.log(this.state.page);
        this.props.fetchEmployees(this.state.page);
       })
       
       
    }
    }

    nextHandle=()=>{
       
       this.setState({page:this.state.page+1},()=>{
        //console.log(this.state.page);
        this.props.fetchEmployees(this.state.page);
       })
       
       
    
    }

    componentDidMount(){
        // console.log(this.state.page);
        this.props.fetchEmployees(this.state.page);
          // console.log(this.props.employee.employees);
    }
  
    // usersList(){
    //     return employees.map((object,i)=>{
    //         return <RecordList obj={object} key={i} />;
    //     });
    // }

    

    render() {
      
        const { employees } = this.props.employee;
    

        return (
          <div>
             <Link to={'/insert'} className="button"> Add New Employee</Link>

            <div  className="view">
               
          {/* {
            this.props.employees.length===0?
                
               <h3>There is No employee in the list</h3>:null
                
            
            } */}
            <div>
                
                <h3 align="center">Employee List</h3>
            </div>
                <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Emp Name</Table.HeaderCell>
        <Table.HeaderCell>Emp Salary</Table.HeaderCell>
        <Table.HeaderCell>Emp Desi</Table.HeaderCell>
        <Table.HeaderCell colSpan="2">Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
                    <tbody>
                        { employees.map((object,i)=>(
                            <RecordList obj={object} key={i} />)
                    )}
                    </tbody>

   </Table>
   <div>
        <Button onClick={this.preHandle} primary>Previous</Button>
        <Button onClick={this.nextHandle} primary>Next</Button>
      </div>
    
            </div>
            </div>
           
        )
    }
} 

view.prototypes = {

    getEmployees:PropTypes.func.isRequired,
    employee:PropTypes.object.isRequired

}


const mapStateToProps = (state) => ({
    employee:state.employee
})


export default connect(mapStateToProps,{getEmployees,fetchEmployees})(view)
