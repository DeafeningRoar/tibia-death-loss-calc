import React, { Component } from 'react';
import { connect } from 'react-redux';
import Results from './results';


export default class Calculator extends Component{
    constructor(props){
        super(props);

        this.state = {
            level: 8,
            vocation: 'knight',
            promotion: false,   
        }

    }

    handleChange(e){
        this.setState({level: e.target.value});
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
                        <label className="col-md-2 col-form-label">Level</label>
                        <input className="form-control col-md-2" id="level" name="level" value={this.state.level} onChange={this.handleChange.bind(this)}/>
                        <div className="form-check col-md-2">
                            <span className="col-md-3">Promotion</span>
                            <input className="form-input col-md-3" type="checkbox" onChange={this.handlePromotionChange.bind(this)} checked={this.state.promotion}/>
                        </div>
                        <select onChange={this.onSelectchange.bind(this)} className="form-control col-md-3" ref="vocation">
                            <option value="knight">Knight</option>
                            <option value="paladin">Paladin</option>
                            <option value="sorcerer">Sorcerer</option>
                            <option value="druid">Druid</option>
                        </select>
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