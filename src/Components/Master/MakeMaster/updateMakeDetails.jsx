import React, { Component } from 'react';
import MakeMasterService from '../../../ServiceComponent/Master/MakeMasterService';

export default class updateMakeDetails extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
            id:this.props.match.params.id,
            makeName:'',
            makeCode:'',
            makeDescription:'',
            makeDetails : []
        }
        
        
        this.changeMakeName = this.changeMakeName.bind(this);
        this.changeMakeCode = this.changeMakeCode.bind(this);
        this.changeMakeDescription = this.changeMakeDescription.bind(this);
        this.updateMakeDetails = this.updateMakeDetails.bind(this);

        this.cancel = this.cancel.bind(this);
    }

    changeId = (event) =>{
        this.setState({id: event.target.value});
    }
    changeMakeName = (event) =>{
        this.setState({makeName: event.target.value});
    }

    changeMakeCode = (event) =>{
        this.setState({makeCode: event.target.value});
    }

    changeMakeDescription = (event) =>{
        this.setState({makeDescription: event.target.value});
    }

    changeActive_status = (event) =>{
        this.setState({active_status: event.target.value});
    }

    updateMakeDetails = (e) => {
        e.preventDefault();
        let makeDetails = {id:this.state.id, makeName:this.state.makeName,makeCode:this.state.makeCode,makeDescription:this.state.makeDescription};
        console.log((makeDetails));
    
        MakeMasterService.updateMakeDetail(makeDetails).then(res => {
            console.log(res.data);
        });
       this.props.history.push('/showAllMake');
    }

   
    componentDidMount()
    {
        MakeMasterService.getMakeById(this.state.id).then((res) =>{
           let make = res.data;
            //console.log("Rs data" + res.data);
            this.setState(
                {
                    id:make.id,
                    makeName:   make.makeName,
                    makeCode:   make.makeCode,
                    makeDescription :make.makeDescription
                }
            );
        }   );
        
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
                            <h3 className = "text-center">Update make Details</h3>
                            <div className = "card-body">
                                
                                <form>

                                    <div className = "form-group">
                                    <label>Make ID </label>
                                    <input type = "int" placeholder="Make ID" name="id" className="form-control" 
                                        value={this.state.id} onChange={this.changeId}/>
                                    </div>

                                    <div className = "form-group">
                                    <label>Make Name </label>
                                    <input placeholder="make Name" name="makeName" className="form-control" 
                                    value={this.state.makeName} onChange={this.changeMakeName}/>
                                    </div>

                                    <div className = "form-group">
                                    <label>Make Code </label>
                                    <input placeholder="make Code" name="makeCode" className="form-control" 
                                    value={this.state.makeCode} onChange={this.changeMakeCode}/>
                                    </div>

                                    <div className = "form-group">
                                    <label>Make Description </label>
                                    <input placeholder="make Description" name="makeDescription" className="form-control" 
                                    value={this.state.makeDescription} onChange={this.changeMakeDescription}/>
                                    </div>

                                        <button className="btn btn-success" onClick={this.updateMakeDetails}>Update Details</button>
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
