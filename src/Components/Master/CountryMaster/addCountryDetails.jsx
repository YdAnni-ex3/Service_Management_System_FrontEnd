import React, { Component } from 'react';
import CountryMasterService from '../../../ServiceComponent/Master/CountryMasterService';


export default class addCountryDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            country_name:'',
            country_code:'',
            country_description:'',
            active_status:'',
            countryDetails : []
        }
        
        this.changeCountry_name = this.changeCountry_name.bind(this);
        this.changeCountry_code = this.changeCountry_code.bind(this);
        this.changeCountry_description = this.changeCountry_description.bind(this);
        this.changeActive_status = this.changeActive_status.bind(this);
        this.saveCountryDetails = this.saveCountryDetails.bind(this);
        this.cancel = this.cancel.bind(this);
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
    saveCountryDetails = (e) => {
        e.preventDefault();
        let countryDetails = {country_id:this.state.id,country_name:this.state.country_name,country_code:this.state.country_code,country_description:this.state.country_description,active_status:this.state.active_status};
        console.log('User => ' + JSON.stringify(countryDetails));
        CountryMasterService.addCountryDetail(countryDetails).then(res => {
           this.props.history.push('/');
            countryDetails = res.data;
        });
        
        this.setState({countryDetails});
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
                            <h3 className = "text-center">Add Country Details</h3>
                            <div className = "card-body">
                                <form>
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


                                        <button className="btn btn-success" onClick={this.saveCountryDetails}>Save Details</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>


                                <br />
                                {
                                    <div className = "row">
                                    <table className = "table table-striped table-bordered" hidden = "">
                                        <thead>
                                            <tr>

                                                <th>Country Name</th>
                                                <th>Country Code</th>
                                                <th>Country Description</th>
                                                <th>Active Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                               
                                                    <tr key = {this.state.countryDetails.id}>
                                                       
                                                        <td>{this.state.countryDetails.country_name}</td>
                                                        
                                                        <td>{this.state.countryDetails.country_code}</td>
                                                        <td>{this.state.countryDetails.country_description}</td>
                                                        <td>{this.state.countryDetails.active_status}</td>
                                                    </tr>
                                                
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                }
                                { 
                                
                                    <div style = {{color:"red"}}>{this.state.countryDetails.country_name}</div>}
                                    {<div style = {{color:"red"}}>{this.state.countryDetails.country_name}</div>}
                                    {<div style = {{color:"red"}}>{this.state.countryDetails.country_name}</div>}
                                    {<div style = {{color:"red"}}>{this.state.countryDetails.country_name}</div>}
                                    {<div style = {{color:"red"}}>{this.state.countryDetails.country_name}</div>}
                                            
                                
                            </div>
                        </div>
                    
                    </div>

                </div>
            </div>
        )
    }
}
