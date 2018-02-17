import React, { Component } from 'react';
import Calculations from '../js/calculations';


export default class ResultsTable extends Component{
    constructor(props){
        super(props);

        this.state = {
            baseLoss: 0,
            expLoss: 0,
            stats: {
                hitpoints: '',
                manapoints: '',
                capacity: ''
            },
            regularLoss:{
                blessExpLoss: '',
                blessLvlLoss: '',
                noBlessExpLoss: '',
                noBlessLvlLoss:''
            },
            hcLoss:{
                blessExpLoss: '',
                blessLvlLoss: '',
                noBlessExpLoss: '',
                noBlessLvlLoss:''
            },
            level: 1,
            vocation: 'knight',
            promotion: false
        }
    }

    componentWillReceiveProps(nextProps){

        var stats = Calculations.calculateStats(nextProps.level, nextProps.vocation);
        var baseLoss = Calculations.baseExpLoss(nextProps.level);
        var totalExp = Calculations.totalExp(nextProps.level);

        // Non Hardcore Server
        var blessExpLoss = Calculations.expLoss(nextProps.level, baseLoss, nextProps.promotion, false, true);
        var blessLvlLoss = Calculations.levelLoss(blessExpLoss, totalExp);

        var noBlessExpLoss = Calculations.expLoss(nextProps.level,baseLoss, nextProps.promotion, false, false);
        var noBlessLvlLoss = Calculations.levelLoss(noBlessExpLoss, totalExp);

        // Hardcore Server
        var hcBlessExpLoss = Calculations.expLoss(nextProps.level, baseLoss, nextProps.promotion, true, true);
        var hcBlessLvlLoss = Calculations.levelLoss(hcBlessExpLoss, totalExp);

        var hcNoBlessExpLoss = Calculations.expLoss(nextProps.level, baseLoss, nextProps.promotion, true, false);
        var hcNoBlessLvlLoss = Calculations.levelLoss(hcNoBlessExpLoss, totalExp);

        var regularLoss = {
            blessExpLoss,
            blessLvlLoss,
            noBlessExpLoss,
            noBlessLvlLoss
        };

        var hcLoss = {
            blessExpLoss: hcBlessExpLoss,
            blessLvlLoss: hcBlessLvlLoss,
            noBlessExpLoss: hcNoBlessExpLoss,
            noBlessLvlLoss: hcNoBlessLvlLoss
        };

        this.setState({
            baseLoss,
            totalExp,
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
                        <label className="col-md-4 col-form-label">All Blessings Experience Loss</label>
                        <input className="form-control col-md-8" type="text" value={this.state.regularLoss.blessExpLoss} readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">All Blessings Level Loss</label>
                        <input className="form-control col-md-8" type="text" value={this.state.regularLoss.blessLvlLoss} readOnly/>
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
                        <label className="col-md-4 col-form-label">No Blessings Level Loss</label>
                        <input className="form-control col-md-8" type="text" value={this.state.regularLoss.noBlessLvlLoss} readOnly/>
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
                        <label className="col-md-4 col-form-label">Hardcore All Blessings Level Loss</label>
                        <input className="form-control col-md-8" type="text" value={this.state.hcLoss.blessLvlLoss} readOnly/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">Hardcore No Blessings Experience Loss</label>
                        <input className="form-control col-md-8" type="text" value={this.state.hcLoss.noBlessExpLoss} readOnly/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row col-md-6">
                        <label className="col-md-4 col-form-label">Hardcore No Blessings Level Loss</label>
                        <input className="form-control col-md-8" type="text" value={this.state.hcLoss.noBlessLvlLoss} readOnly/>
                    </div>
                </div>
            </div>
        );
    }
}