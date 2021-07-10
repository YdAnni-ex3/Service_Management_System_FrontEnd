import React, { Component } from 'react'
import PinMasterService from '../../../ServiceComponent/Master/PinMasterService';


export default class deleteCountryDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            pin_code:'',
            active_status:'',
            pin:[],
            error:{}
        }
        this.changeId = this.changeId.bind(this);
        this.deletePinDetail = this.deletePinDetail.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeId = (event) =>{
        this.setState({id: event.target.value});
    }

    deletePinDetail = (event) =>{
        let country = {id:this.state.id, pin_code:this.state.country_code,active_status:this.state.active_status};
        let isValid = true;
        console.log(pin);
        
        PinMasterService.deletePinDetails_(country).then(res => {
            console.log(res.data);
            const error = {};
            if(res.data==="Pin with Id is not there in Database")
            {
                error.IDerror = "Pin with Id is not there in Database";
                isValid = false;
            }
            else
            {
                isValid = true;
            }
            this.setState({error});
            return isValid;
        });
    }

    componentDidCatch()
    {
        PinMasterService.getPinById(this.state.id).then(res =>{
            let count = res.data;
            this.setState(
                {
                   id:count.id
                }
            );
        });
        
    }
    deletePinDetails_error = (e) =>{
        e.preventDefault();
        const isValid = this.deletePinDetail();
       
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
                            <h3 className = "text-center">Delete Pin Details</h3>
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
                                    
                                        <button className="btn btn-success" onClick={this.deletePinDetails_error.bind(this)}>Delete Details</button>
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
