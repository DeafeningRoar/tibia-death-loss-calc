import React, { Component } from 'react';

export default class ResultsTable extends Component{

    render(){
        console.log(this.props.results);
        return(
            <div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">Hitpoints</label>
                        <input className="form-control col-md-8" type="text" value={this.props.results.hitpoints || ''} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">Manapoints</label>
                        <input className="form-control col-md-8" type="text" value={this.props.results.manapoints || ''} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">Capacity</label>
                        <input className="form-control col-md-8" type="text" value={this.props.results.capacity || '' } />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">All Blessings Experience Loss</label>
                        <input className="form-control col-md-8" type="text" value={this.props.results.blessExpLoss || ''}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">All Blessings Level Loss</label>
                        <input className="form-control col-md-8" type="text" value={this.props.results.blessLevelLoss || ''} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">No Blessings Experience Loss</label>
                        <input className="form-control col-md-8" type="text" value={this.props.results.noBlessExpLoss || ''} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">No Blessings Level Loss</label>
                        <input className="form-control col-md-8" type="text" value={this.props.results.noBlessLevelLoss || ''} />
                    </div>
                </div>
            </div>
        );
    }
}