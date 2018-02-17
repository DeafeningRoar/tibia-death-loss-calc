import React, { Component } from 'react';
import { connect } from 'react-redux';
import Results from './results';
import Calculations from '../js/calculations';


export default class Calculator extends Component{
    constructor(props){
        super(props);

        this.state = {
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

    renderForm(){
        return(
            <div>
                <div className="form-row">
                    <div className="form-group row col-md-12">
                        <label className="col-md-2 col-form-label"><strong>Level</strong></label>
                        <input className="form-control" type="number" id="level" name="level" value={this.state.level} onChange={this.handleChange.bind(this)}/>
                        <select id="vocations" onChange={this.onSelectchange.bind(this)} className="form-control" ref="vocation">
                            <option value="knight">Knight</option>
                            <option value="paladin">Paladin</option>
                            <option value="sorcerer">Sorcerer</option>
                            <option value="druid">Druid</option>
                        </select>
                        <span id="promotion">
                            Promotion
                            <br/>(level 20+)
                        </span>
                        <div className="form-check">
                            <input className="form-input" id="chkPromotion" type="checkbox" onChange={this.handlePromotionChange.bind(this)} checked={this.state.promotion}/>
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
                {this.renderResults()}
            </div>
        );
    }
}