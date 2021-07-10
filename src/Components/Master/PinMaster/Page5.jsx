import React, { Component } from 'react'

export default class Page5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        
        this.addPinDetails = this.addPinDetails.bind(this);
        this.showPinDetails = this.showPinDetails.bind(this);
        this.updatePinDetails = this.updatePinDetails.bind(this);
        this.deletePinDetails = this.deletePinDetails.bind(this);
    }

    addPinDetails = (e) =>
    {
        this.props.history.push('/addPinDetails');
    }

    showPinDetails = (e) =>
    {
        this.props.history.push('/showPinDetails');
    }

    updatePinDetails = (e) =>
    {
        this.props.history.push('/updatePinDetails');
    }

    deletePinDetails = (e) =>
    {
        this.props.history.push('/deletePinDetails');
    }

    render() {
        return (
            <div>
                <div class="text-center">
                    <h3>Country Master Page</h3>
                    <br />
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-secondary" onClick = {this.addPinDetails}>Add Pin Details</button>
                        <button type="button" class="btn btn-secondary" onClick = {this.showPinDetails}>Show All Pin Details</button>
                        <button type="button" class="btn btn-secondary" onClick = {this.updatePinDetails}>Update Pin Details</button>
                        <button type="button" class="btn btn-secondary" onClick = {this.deletePinDetails}>Delete Pin Details</button>
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
