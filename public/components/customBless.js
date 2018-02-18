import React, { Component } from 'react';
import Calculations from '../js/calculations';

export default class CustomBless extends Component{
    constructor(props){
        super(props);

        this.state = {
            expLoss: '',
            hcExpLoss: '',
        };
    }

    componentWillReceiveProps(nextProps){
        var customLoss = '';
        var hcCustomLoss = '';

        if(nextProps.level > 1){
            var totalExp = Calculations.totalExperience(nextProps.level);
            var baseLoss = Calculations.baseExperienceLoss(nextProps.level, totalExp);

            customLoss = Calculations.expLossCustomBless(nextProps.level, baseLoss, nextProps.promotion, false, nextProps.blessings);
            hcCustomLoss = Calculations.expLossCustomBless(nextProps.level, baseLoss, nextProps.promotion, true, nextProps.blessings);
        }

        this.setState({
            expLoss: customLoss,
            hcExpLoss: hcCustomLoss
        });
    }

    renderBlessingsList(){
        var blessList = [
            { id: 1, name: 'The Spiritual Shielding' },
            { id: 2, name: 'The Wisdom of Solitude'},
            { id: 3, name: 'The Embrace of Tibia' },
            { id: 4, name: 'Blood of the Mountain' },
            { id: 5, name: 'The Fire of the Suns' },
            { id: 6, name:  'Heart of the Mountain'},
            { id: 7, name: 'The Spark of the Phoenix' }
        ];

        return blessList.map((bless) => {
            return (
                <div key={bless.name + bless.id} className="custom-control custom-checkbox col-md-6">
                    <input key={bless.name} type="checkbox" className="custom-control-input" value={bless.name} id={bless.name} onChange={this.props.handleChange.bind(this)}/>
                    <label key={bless.id} className="custom-control-label unselectable" htmlFor={bless.name}> {bless.name} </label>
                </div>
            );
        });
    }

    render(){
        return(
            <div className="col">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Custom Blessings Experience Loss</label>
                    </div>
                    <input className="form-control col-md-8" type="text" value={this.state.expLoss} readOnly/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Hardcore Custom Blessings Experience Loss</label>
                    </div>
                    <input className="form-control col-md-8" type="text" value={this.state.hcExpLoss} readOnly/>
                </div>
                <div id="blessList" className="row col">
                    {this.renderBlessingsList()}
                </div>
            </div>
        );
    }
}