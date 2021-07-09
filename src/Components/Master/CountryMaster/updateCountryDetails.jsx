import React, { Component } from 'react';
import CountryMasterService from '../../../ServiceComponent/Master/CountryMasterService';

export default class updateCountryDetails extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
            id: 0,
            country_name:'',
            country_code:'',
            country_description:'',
            active_status:'',
            countryDetails : [],
            error:{}
        }
        
        //const [err, setErr] = useState("");
        this.changeCountry_name = this.changeCountry_name.bind(this);
        this.changeCountry_code = this.changeCountry_code.bind(this);
        this.changeCountry_description = this.changeCountry_description.bind(this);
        this.changeActive_status = this.changeActive_status.bind(this);
        this.updateCountryDetails = this.updateCountryDetails.bind(this);
        this.updateCountryDetail_error = this.updateCountryDetail_error.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeId = (event) =>{
        this.setState({id: event.target.value});
    }
    changeCountry_name = (event) =>{
        this.setState({country_name: event.target.value});
    }

    changeCountry_code = (event) =>{
        this.setState({country_code: event.target.value});
    }

    changeCountry_description = (event) =>{
        this.setState({country_description: event.target.value});
    }

    changeActive_status = (event) =>{
        this.setState({active_status: event.target.value});
    }
    updateCountryDetails = (e) => {
        let countryDetails = {id:this.state.id, country_name:this.state.country_name,country_code:this.state.country_code,country_description:this.state.country_description,active_status:this.state.active_status};
        console.log((countryDetails));
        let isValid =  true;
        CountryMasterService.updateCountryDetail(countryDetails).then(res => {
            console.log(res.data);
            const error = {};
            if(res.data==="Country with given ID does Not Exist")
            {
                
                error.IDerror = "Country with given ID does Not Exist";
                isValid = false;
                
            }
            this.setState({error});
            return isValid;
           //this.props.history.push('/');
        });
       
    }

    updateCountryDetail_error = (e) =>{
        e.preventDefault();
        const isValid = this.updateCountryDetails();
    }
    componentDidCatch()
    {
        CountryMasterService.getCountryById(this.state.id).then(res =>{
            let count = res.data;
            this.setState(
                {
                    country_name: count.country_name,
                    country_code:count.country_code,
                    country_description:count.country_description,
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
                            <h3 className = "text-center">Update Country Details</h3>
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
                                    <div className = "form-group">
                                    <label>Country Name </label>
                                    <input placeholder="Country Name" name="country_name" className="form-control" 
                                    value={this.state.country_name} onChange={this.changeCountry_name}/>
                                    </div>

                                    <div className = "form-group">
                                    <label>Country Code </label>
                                    <input placeholder="Country Code" name="country_code" className="form-control" 
                                    value={this.state.country_code} onChange={this.changeCountry_code}/>
                                    </div>

                                    <div className = "form-group">
                                    <label>Country Description </label>
                                    <input placeholder="Country Description" name="country_description" className="form-control" 
                                    value={this.state.country_description} onChange={this.changeCountry_description}/>
                                    
                                    </div>
                                    <div className = "form-group">
                                    <label>Active Status (1-Active 0-Not Active)</label>
                                    <input type = "boolean" placeholder="Active Status" name="active_status" className="form-control" 
                                    value={this.state.active_status} onChange={this.changeActive_status}/>
                                    </div>

                                        <button className="btn btn-success" onClick={this.updateCountryDetail_error}>Update Details</button>
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
