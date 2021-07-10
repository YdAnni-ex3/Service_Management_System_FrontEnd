import React, { Component } from 'react';
import PinMasterService from '../../../ServiceComponent/Master/PinMasterService';


export default class addPinDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            pin_code:'',
            active_status:'',
            pinDetails : []
        }
        
        
        this.changePin_code = this.changePin_code.bind(this);
        this.changeActive_status = this.changeActive_status.bind(this);
        this.savePinDetails = this.savePinDetails.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    
    changePin_code = (event) =>{
        this.setState({pin_code: event.target.value});
    }

    changeActive_status = (event) =>{
        this.setState({active_status: event.target.value});
    }
    savePinDetails = (e) => {
        e.preventDefault();
        let pinDetails = {pin_code:this.state.pin_code,active_status:this.state.active_status};
        console.log('User => ' + JSON.stringify(pinDetails));
        PinMasterService.addPinDetail(pinDetails).then(res => {
           this.props.history.push('/');
            pinDetails = res.data;
        });
        
        this.setState({pinDetails});
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
                            <h3 className = "text-center">Add Pin Details</h3>
                            <div className = "card-body">
                                <form>
                                                                        
                                    <div className = "form-group">
                                    <label>Pin Code </label>
                                    <input placeholder="Pin Code" name="pin_code" className="form-control" 
                                    value={this.state.pin_code} onChange={this.changePin_code}/>
                                    </div>
                                    
                                    <div className = "form-group">
                                    <label>Active Status (1-Active 0-Not Active)</label>
                                    <input type = "boolean" placeholder="Active Status" name="active_status" className="form-control" 
                                    value={this.state.active_status} onChange={this.changeActive_status}/>
                                    </div>


                                        <button className="btn btn-success" onClick={this.savePinDetails}>Save Details</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>


                                <br />
                                {
                                    <div className = "row">
                                    <table className = "table table-striped table-bordered" hidden = "">
                                        <thead>
                                            <tr>

                                                <th>Pin Code</th>
                                                <th>Active Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                               
                                                    <tr key = {this.state.pinDetails.id}>
                                                       
                                                        
                                                        <td>{this.state.pinDetails.pin_code}</td>
                                                        <td>{this.state.pinDetails.active_status}</td>
                                                    </tr>
                                                
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                }
                                    {<div style = {{color:"red"}}>{this.state.pinDetails.pin_code}</div>}
                                    {<div style = {{color:"red"}}>{this.state.pinDetails.active_status}</div>}
                                            
                                
                            </div>
                        </div>
                    
                    </div>

                </div>
            </div>
        )
    }
}
