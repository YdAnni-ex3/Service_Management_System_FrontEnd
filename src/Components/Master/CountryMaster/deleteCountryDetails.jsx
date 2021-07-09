import React, { Component } from 'react'
import CountryMasterService from '../../../ServiceComponent/Master/CountryMasterService';


export default class deleteCountryDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            country_name:'',
            country_code:'',
            country_description:'',
            active_status:'',
            country:[],
            error:{}
        }
        this.changeId = this.changeId.bind(this);
        this.deleteCountryDetail = this.deleteCountryDetail.bind(this);
        this.deleteCountryDetails_error = this.deleteCountryDetails_error.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeId = (event) =>{
        this.setState({id: event.target.value});
    }

    deleteCountryDetail = (event) =>{
        let country = {id:this.state.id, country_name:this.state.country_name,country_code:this.state.country_code,country_description:this.state.country_description,active_status:this.state.active_status};
        let isValid = true;
        console.log(country);
        
        CountryMasterService.deleteCountryDetails_(country).then(res => {
            console.log(res.data);
            const error = {};
            if(res.data==="Country with Id is not there in Database")
            {
                error.IDerror = "Country with Id is not there in Database";
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
        CountryMasterService.getCountryById(this.state.id).then(res =>{
            let count = res.data;
            this.setState(
                {
                   id:count.id
                }
            );
        });
        
    }
    deleteCountryDetails_error = (e) =>{
        e.preventDefault();
        const isValid = this.deleteCountryDetail();
       
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
                            <h3 className = "text-center">Delete Country Details</h3>
                            <div className = "card-body">
                                
                                <form>

                                    <div className = "form-group">
                                    <label>Country ID </label>
                                    {Object.keys(error).map((key) =>{
                                        return <div style = {{color:"red"}}key = {key}>
                                            {error[key]}</div>
                                    })}
                                    <input type = "int" placeholder="Country ID" name="id" className="form-control" 
                                    value={this.state.id} onChange={this.changeId}/>
                                    </div>
                                    
                                        <button className="btn btn-success" onClick={this.deleteCountryDetails_error.bind(this)}>Delete Details</button>
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
