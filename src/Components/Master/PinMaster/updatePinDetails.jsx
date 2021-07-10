import React, { Component } from 'react';
import PinMasterService from '../../../ServiceComponent/Master/PinMasterService';

export default class updatePinDetails extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
            id: 0,
            pin_code:'',
            active_status:'',
            cpinDetails : [],
            error:{}
        }
        
        //const [err, setErr] = useState("");
        this.changePin_code = this.changePin_code.bind(this);
        this.changeActive_status = this.changeActive_status.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeId = (event) =>{
        this.setState({id: event.target.value});
    }
    
    changePin_code = (event) =>{
        this.setState({pin_code: event.target.value});
    }

    changeActive_status = (event) =>{
        this.setState({active_status: event.target.value});
    }    

    componentDidCatch()
    {
        PinMasterService.getPinById(this.state.id).then(res =>{
            let count = res.data;
            this.setState(
                {
                    pin_code:count.pin_code,
                    active_status:count.active_status
                }
            );
        });
        
    }
    cancel(){
        this.props.history.push('/');
    }
    
    render() {
        const {error} = this.state;
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Update Pin Details</h3>
                            <div className = "card-body">
                                
                                <form>

                                    <div className = "form-group">
                                    <label>Country ID </label>
                                    {Object.keys(error).map((key) =>{
                                        return <div style = {{color:"red"}}key = {key}>
                                            {error[key]}</div>
                                    })}
                                    <input type = "int" placeholder="Pin ID" name="id" className="form-control" 
                                    value={this.state.id} onChange={this.changeId}/>
                                    </div>
                                   
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

                                        <button className="btn btn-success" onClick={this.updatePinDetail_error}>Update Details</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                     
                                </form>
                            </div>
                        </div>
                    
                    </div>

                </div>
            </div>
        )
    }
}
