import React, { Component } from 'react';
import { connect } from 'react-redux';
import Results from './results';
import _ from 'lodash';
import CustomBless from './customBless';


export default class Calculator extends Component{
    constructor(props){
        super(props);

        this.state = {
            blessings: [],
            level: '',
            vocation: 'knight',
            promotion: false,   
        }

    }

    handleChange(e){
        var level = Number(e.target.value);
        if(level && level >= 1){
            this.setState({ level });
        } else {
            this.setState({ level: e.target.value });
        }
    }

    onSelectchange(e){
        this.setState({vocation: e.target.value});
    }

    handlePromotionChange(e){
        this.setState({promotion: e.target.checked});

    }

    renderResults(){
        return(
            <Results level={this.state.level} vocation={this.state.vocation} promotion={this.state.promotion} />
        );
    }

    handleOnBlessChange(event){
        var blessList = this.state.blessings;

        if(event.target.checked){
            blessList.push({id: event.target.attributes.id, name: event.target.value});
        }

        if(!event.target.checked){
            _.remove(blessList, {
                name: event.target.value
            });
        }

        this.setState({
            blessings: blessList
        })
    }

    renderCustomBless(){
        return(
            <CustomBless blessings={this.state.blessings} level={this.state.level} vocation={this.state.vocation} promotion={this.state.promotion} handleChange={this.handleOnBlessChange.bind(this)}/>
        );
    }

    renderForm(){
        return(
            <div>
                <div>
                    <div className="form-group row col-md-12 d-flex justify-content-center">
                        <label className="col-md-1 col-form-label"><strong>Level</strong></label>
                        <input className="form-control" type="number" id="level" name="level" value={this.state.level} onChange={this.handleChange.bind(this)}/>
                        <select id="vocations" onChange={this.onSelectchange.bind(this)} className="form-control" ref="vocation">
                            <option value="knight">Knight</option>
                            <option value="paladin">Paladin</option>
                            <option value="sorcerer">Sorcerer</option>
                            <option value="druid">Druid</option>
                        </select>
                        <div className="col col-md-2">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input col-form-label" id="chkPromotion" type="checkbox" onChange={this.handlePromotionChange.bind(this)} checked={this.state.promotion}/>
                                <label className="custom-control-label unselectable" htmlFor="chkPromotion">Promotion</label>
                                <label className="unselectable" htmlFor="chkPromotion">(Level 20+)</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render(){
        return(
            <div id="calcContainer" className="container">
                {this.renderForm()}
                <div className="row">
                    <div className="col col-md-6">
                        {this.renderResults()}
                    </div>
                    <div className="col col-md-6">
                        {this.renderCustomBless()}
                    </div>
                </div>
            </div>
        );
    }
}