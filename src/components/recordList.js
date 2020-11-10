import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { connect  } from 'react-redux';
import { deleteEmployee } from '../actions/employeesActions';
import { Link } from 'react-router-dom';



export class recordList extends Component {


     delete = () =>{
   
        this.props.deleteEmployee(this.props.obj.id);

     }
    //  update = e =>{

    //     console.log("Value of update",e.target.value);
    //     thi

    //  }


    render() {
        return (
                  
        <Table.Row>
        <Table.Cell>
            {this.props.obj.e_name}
        </Table.Cell>
        <Table.Cell>
            {this.props.obj.e_salary}
        </Table.Cell>
        <Table.Cell>
            {this.props.obj.e_desi}
        </Table.Cell>
        <Table.Cell>
     {/* onClick ={this.update} value={this.props.obj.id} */}
          
           <Link to={"/edit/"+this.props.obj.id}  className="button" >Edit</Link>
        
        </Table.Cell>
        <Table.Cell>
        <Button  secondary onClick={this.delete} className="delete" >Delete</Button>
        </Table.Cell>
    </Table.Row>
        )
    }
}

const mapStateToProps = (state) => ({
    employee:state.employee
})

export default connect(mapStateToProps, {deleteEmployee}) (recordList)
