import React, { Component } from 'react';
import Calculations from '../js/calculations';
import Numeral from 'numeral';

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
        var totalExp = Calculations.totalExp(nextProps.level);
        var baseLoss = Calculations.baseExpLoss(nextProps.level, totalExp);

        // Non Hardcore Server
        var blessExpLoss = Calculations.expLoss(nextProps.level, baseLoss, nextProps.promotion, false, true);
        var noBlessExpLoss = Calculations.expLoss(nextProps.level,baseLoss, nextProps.promotion, false, false);

        // Hardcore Server
        var hcBlessExpLoss = Calculations.expLoss(nextProps.level, baseLoss, nextProps.promotion, true, true);
        var hcNoBlessExpLoss = Calculations.expLoss(nextProps.level, baseLoss, nextProps.promotion, true, false);

        var regularLoss = {
            blessExpLoss: Numeral(blessExpLoss).format('0,0'),
            noBlessExpLoss: Numeral(noBlessExpLoss).format('0,0')
        };

        var hcLoss = {
            blessExpLoss: Numeral(hcBlessExpLoss).format('0,0'),
            noBlessExpLoss: Numeral(hcNoBlessExpLoss).format('0,0')
        };

        this.setState({
            totalExp: Numeral(Math.round(totalExp)).format('0,0'),
            stats: {
                hitpoints: Numeral(stats.hitpoints).format('0,0'),
                manapoints: Numeral(stats.manapoints).format('0,0'),
                capacity: Numeral(stats.capacity).format('0,0'),
            },
            regularLoss,
            hcLoss,
            level:  Numeral(nextProps.level).format('0,0'),
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