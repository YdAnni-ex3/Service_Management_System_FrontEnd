import React, { Component } from 'react'
import PinMasterService from '../../../ServiceComponent/Master/PinMasterService';


export default class showPinDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pin:[]
        }
        this.goToHomePage = this.goToHomePage.bind(this);
    }

    componentDidMount()
    {
        PinMasterService.showPinDetail().then(res =>{
            let count = res.data
            this.setState({pin:res.data});
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
                <h2 className = "text-center">Pin Master List</h2>
                
                
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Pin Code</th>
                                <th>Active Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pin.map(
                                    pin =>
                                    <tr key = {pin.id}>
                                        <td>{pin.id}</td>
                                        <td>{pin.pin_code}</td>
                                        <td>{pin.active_status.toString()}</td>
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
