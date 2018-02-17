import React, { Component } from 'react';
import Calculations from '../js/calculations';


export default class ResultsTable extends Component{
    constructor(props){
        super(props);

        this.state = {
            totalExp: '',
            stats: {
                hitpoints: '',
                manapoints: '',
                capacity: ''
            },
            regularLoss:{
                blessExpLoss: '',
                noBlessExpLoss: ''
            },
            hcLoss:{
                blessExpLoss: '',
                noBlessExpLoss: ''
            },
            level: '',
            vocation: 'knight',
            promotion: ''
        }
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.level === 1){
            this.setState({
                totalExp: 0,
                stats: Calculations.calculateStats(nextProps.level, nextProps.vocation),
                regularLoss:{
                    blessExpLoss: 0,
                    noBlessExpLoss: 0
                },
                hcLoss:{
                    blessExpLoss: 0,
                    noBlessExpLoss: 0
                },
                level: 1
            });
            return null;
        } else if(nextProps.level <= 0 || !Number(nextProps.level)){
            this.setState({
                totalExp: '',
                stats: {
                    hitpoints: '',
                    manapoints: '',
                    capacity: ''
                },
                regularLoss:{
                    blessExpLoss: '',
                    noBlessExpLoss: ''
                },
                hcLoss:{
                    blessExpLoss: '',
                    noBlessExpLoss: ''
                },
                level: ''
            });
            return null; 
        }
        
        var stats = Calculations.calculateStats(nextProps.level, nextProps.vocation);
        var baseLoss = Calculations.baseExpLoss(nextProps.level);
        var totalExp = Calculations.totalExp(nextProps.level);

        // Non Hardcore Server
        var blessExpLoss = Calculations.expLoss(nextProps.level, baseLoss, nextProps.promotion, false, true);
        var noBlessExpLoss = Calculations.expLoss(nextProps.level,baseLoss, nextProps.promotion, false, false);

        // Hardcore Server
        var hcBlessExpLoss = Calculations.expLoss(nextProps.level, baseLoss, nextProps.promotion, true, true);
        var hcNoBlessExpLoss = Calculations.expLoss(nextProps.level, baseLoss, nextProps.promotion, true, false);

        var regularLoss = {
            blessExpLoss,
            noBlessExpLoss,
        };

        var hcLoss = {
            blessExpLoss: hcBlessExpLoss,
            noBlessExpLoss: hcNoBlessExpLoss,
        };

        this.setState({
            totalExp: Math.round(totalExp),
            stats,
            regularLoss,
            hcLoss,
            level: nextProps.level,
            promotion: nextProps.promotion,
            vocation: nextProps.vocation
        });
    }

    render(){
        return(
            <div id="resultsTable">
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">Hitpoints</label>
                        <input className="form-control col-md-8" type="text" value={this.state.stats.hitpoints} readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">Manapoints</label>
                        <input className="form-control col-md-8" type="text" value={this.state.stats.manapoints} readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">Capacity</label>
                        <input className="form-control col-md-8" type="text" value={this.state.stats.capacity} readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">Total Experience</label>
                        <input className="form-control col-md-8" type="text" value={this.state.totalExp} readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">All Blessings Experience Loss</label>
                        <input className="form-control col-md-8" type="text" value={this.state.regularLoss.blessExpLoss} readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">No Blessings Experience Loss</label>
                        <input className="form-control col-md-8" type="text" value={this.state.regularLoss.noBlessExpLoss} readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">Hardcore All Blessings Experience Loss</label>
                        <input className="form-control col-md-8" type="text" value={this.state.hcLoss.blessExpLoss} readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">Hardcore No Blessings Experience Loss</label>
                        <input className="form-control col-md-8" type="text" value={this.state.hcLoss.noBlessExpLoss} readOnly/>
                    </div>
                </div>
            </div>
        );
    }
}