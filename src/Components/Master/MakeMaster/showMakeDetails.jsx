import React, { Component } from 'react'
import MakeMasterService from '../../../ServiceComponent/Master/MakeMasterService';
import {DropdownButton,Dropdown} from 'react-bootstrap' 

export default class showMakeDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            make:[]
        }
        this.goToHomePage = this.goToHomePage.bind(this);
        this.fucn = this.fucn.bind(this);
        this.editMakeDetails = this.editMakeDetails.bind(this);
    }

   
    componentDidMount()
    {
        MakeMasterService.showMakeDetails().then(res =>{
            let count = res.data
            this.setState({make:res.data});
            console.log(count);
        });
    }

    editMakeDetails(id)
    {
        this.props.history.push(`/updateMakeDetails/${id}`);
    }

   
    fucn(e)
    {
        MakeMasterService.getMakeById(e).then();
        this.state.count = e;
        console.log(this.state.count);
        this.props.history.push(`/updateMakeDetails/${e}`);
        
    }
    goToHomePage(){
        this.props.history.push("/");
    }
    render() {
        <div style = {{backgroundColor : "#ACFFAD"}}></div>
        return (
            <div>
                {/* <DropdownButton id = "dropdown-basic-button" title = "Select make">
                    {   
                        this.state.make.map(data =>
                        (
                            <Dropdown.Item onClick = {() => this.fucn(data.id)}>{data.country_name}</Dropdown.Item>
                        ))}
                </DropdownButton>      */}
                <h2 className = "text-center">Make Master List</h2> 
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Make Name</th>
                                <th>Make Code</th>
                                <th>Make Description</th>
                                <th>Update Make Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.make.map(
                                    make =>
                                    <tr key = {make.id}>
                                        <td>{make.id}</td>
                                        <td>{make.makeName}</td>
                                        <td>{make.makeCode}</td>
                                        <td>{make.makeDescription}</td>
                                        <td>
                                        <button className="btn btn-success" onClick = {() => this.editMakeDetails(make.id)}>Update Details</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                <div className = "text-center">
                    <div className = "btn-group-vertical">
                        <button className = "btn btn-primary" onClick = {this.goToHomePage}>
                        Home Page
                        </button>  
                    </div>
                    <div>{console.log(this.count)}</div>
                </div>
            </div>
        )
    }
}
