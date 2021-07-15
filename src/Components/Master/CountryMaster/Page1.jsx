import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';


export default class Page1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        };
        
        this.addCountryDetails = this.addCountryDetails.bind(this);
        this.showCountryDetails = this.showCountryDetails.bind(this);
        // this.updateCountryDetails = this.updateCountryDetails.bind(this);
        // this.deleteCountryDetails = this.deleteCountryDetails.bind(this);
    }

    addCountryDetails = (e) =>
    {
        this.props.history.push('/addCountryDetails');
    }

    showCountryDetails = (e) =>
    {
        this.props.history.push('/showCountryDetails');
    }

    // updateCountryDetails = (e) =>
    // {
    //     this.props.history.push('/updateCountryDetails');
    // }

    // deleteCountryDetails = (e) =>
    // {
    //     this.props.history.push('/deleteCountryDetails');
    // }

    render() {
        return (

            
            <div>
                <div>
                
                </div>
                <div class="text-center">
                    <h3>Country Master Page</h3>
                    <br />
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-secondary" onClick = {this.addCountryDetails}>Add Country Details</button>
                        <button type="button" class="btn btn-secondary" onClick = {this.showCountryDetails}>Show All Country Details</button>
                        {/* <button type="button" class="btn btn-secondary" onClick = {this.updateCountryDetails}>Update Country Details</button> */}
                        {/* <button type="button" class="btn btn-secondary" onClick = {this.deleteCountryDetails}>Delete Country Details</button> */}
                    </div>

                </div>
                <br>
                </br>
                <div class="text-center">

                </div>
            </div >
        )
    }
}
