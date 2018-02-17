import React, { Component } from 'react';
import { calculateLoss } from '../js/calculations';


export default class ResultsTable extends Component{
    
    render(){
        var results = this.props.level >= 8 ? calculateLoss(this.props.level, this.props.promotion, this.props.vocation) : {};
        return(
            <div id="resultsTable">
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">Hitpoints</label>
                        <input className="form-control col-md-8" type="text" value={results.hitpoints || ''} readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">Manapoints</label>
                        <input className="form-control col-md-8" type="text" value={results.manapoints || ''} readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">Capacity</label>
                        <input className="form-control col-md-8" type="text" value={results.capacity || '' } readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">All Blessings Experience Loss</label>
                        <input className="form-control col-md-8" type="text" value={results.blessExpLoss || ''} readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">All Blessings Level Loss</label>
                        <input className="form-control col-md-8" type="text" value={results.blessLevelLoss || ''} readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">No Blessings Experience Loss</label>
                        <input className="form-control col-md-8" type="text" value={results.noBlessExpLoss || ''} readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">No Blessings Level Loss</label>
                        <input className="form-control col-md-8" type="text" value={results.noBlessLevelLoss || ''} readOnly/>
                    </div>
                </div>
            </div>
        );
    }
}