import React, { Component } from 'react';
import Calculations from '../js/calculations';

export default class ResultsTable extends Component{
    constructor(props){
        super(props);
        
        this.state = {...Calculations.defaultValues};
    }

    componentWillReceiveProps(nextProps){
        var totalResults = Calculations.totalResults(nextProps.level, nextProps.vocation, nextProps.promotion)

        this.setState({...totalResults});
    }

    render(){
        return(
            <div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label >Hitpoints</label>
                    </div>
                    <input className="form-control col-md-7" type="text" value={this.state.stats.hitpoints} readOnly/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label >Manapoints</label>
                    </div>
                    <input className="form-control col-md-7" type="text" value={this.state.stats.manapoints} readOnly/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label >Capacity</label>
                    </div>
                    <input className="form-control col-md-7" type="text" value={this.state.stats.capacity} readOnly/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label >Total Experience</label>
                    </div>
                    <input className="form-control col-md-7" type="text" value={this.state.totalExp} readOnly/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label >All Blessings Experience Loss</label>
                    </div>
                    <input className="form-control col-md-7" type="text" value={this.state.fbExpLoss} readOnly/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label >No Blessings Experience Loss</label>
                    </div>
                    <input className="form-control col-md-7" type="text" value={this.state.nFbExpLoss} readOnly/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Hardcore All Blessings Experience Loss</label>
                    </div>
                    <input className="form-control col-md-7" type="text" value={this.state.hcfbExpLoss} readOnly/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label >Hardcore No Blessings Experience Loss</label>
                    </div>
                    <input className="form-control col-md-7" type="text" value={this.state.hcNfbExpLoss} readOnly/>
                </div>
            </div>
        );
    }
}