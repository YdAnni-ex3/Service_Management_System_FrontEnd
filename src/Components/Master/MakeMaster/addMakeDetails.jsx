import React, { Component } from 'react';
import MakeMasterService from '../../../ServiceComponent/Master/MakeMasterService';


export default class addMakeDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            makeName:'',
            makeCode:'',
            makeDescription:'',
            makeDetails : []
        }
        
        this.changeMakeName = this.changeMakeName.bind(this);
        this.changeMakeCode = this.changeMakeCode.bind(this);
        this.changeMakeDescription = this.changeMakeDescription.bind(this);
        this.saveMakeDetails = this.saveMakeDetails.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeMakeName = (event) =>{
        this.setState({makeName: event.target.value});
    }

    changeMakeCode = (event) =>{
        this.setState({makeCode: event.target.value});
    }

    changeMakeDescription = (event) =>{
        this.setState({makeDescription: event.target.value});
    }

    
    saveMakeDetails = (e) => {
        e.preventDefault();
        let makeDetails = {country_id:this.state.id,makeName:this.state.makeName,makeCode:this.state.makeCode,makeDescription:this.state.makeDescription};
        console.log('User => ' + JSON.stringify(makeDetails));
        MakeMasterService.addMakeDetail(makeDetails).then(res => {
           this.props.history.push('/');
            makeDetails = res.data;
        }); 
        this.setState({makeDetails});
    }
    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Add Make Details</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                    <label>Make Name </label>
                                    <input placeholder="Make Name" name="makeName" className="form-control" 
                                    value={this.state.makeName} onChange={this.changeMakeName}/>
                                    </div>

                                    <div className = "form-group">
                                    <label>Make Code </label>
                                    <input placeholder="Make Code" name="makeCode" className="form-control" 
                                    value={this.state.makeCode} onChange={this.changeMakeCode}/>
                                    </div>

                                    <div className = "form-group">
                                    <label>Make Description </label>
                                    <input placeholder="Country Description" name="makeDescription" className="form-control" 
                                    value={this.state.makeDescription} onChange={this.changeMakeDescription}/>
                                    </div>


                                   


                                        <button className="btn btn-success" onClick={this.saveMakeDetails}>Save Details</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>


                                <br />
                                {
                                    <div className = "row">
                                    <table className = "table table-striped table-bordered" hidden = "">
                                        <thead>
                                            <tr>

                                                <th>Make Name</th>
                                                <th>Make Code</th>
                                                <th>Make Description</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                               
                                                    <tr key = {this.state.makeDetails.id}>
                                                       
                                                        <td>{this.state.makeDetails.makeName}</td>
                                                        
                                                        <td>{this.state.makeDetails.makeCode}</td>
                                                        <td>{this.state.makeDetails.makeDescription}</td>
                                                      
                                                    </tr>
                                                
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                }
                                
                            </div>
                        </div>
                    
                    </div>

                </div>
            </div>
        )
    }
}
