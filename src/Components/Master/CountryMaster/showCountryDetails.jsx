import React, { Component } from 'react'
import CountryMasterService from '../../../ServiceComponent/Master/CountryMasterService';


export default class showCountryDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country:[]
        }
        this.goToHomePage = this.goToHomePage.bind(this);
    }

    componentDidMount()
    {
        CountryMasterService.showCountryDetail().then(res =>{
            let count = res.data
            this.setState({country:res.data});
            console.log(count);
            console.log(count.active_status);
        });
    }

    goToHomePage(){
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                 <div>
                <h2 className = "text-center">Country Master List</h2>
                
                
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Country Name</th>
                                <th>Country Code</th>
                                <th>Country Description</th>
                                <th>Active Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.country.map(
                                    country =>
                                    <tr key = {country.id}>
                                        <td>{country.id}</td>
                                        <td>{country.country_name}</td>
                                        
                                        <td>{country.country_code}</td>
                                        <td>{country.country_description}</td>
                                        <td>{country.active_status.toString()}</td>
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
                </div>
            </div>
            </div>
        )
    }
}
