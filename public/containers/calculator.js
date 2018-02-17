import React, { Component } from 'react';
import { connect } from 'react-redux';
import Results from './results';
import { bindActionCreators } from 'redux';
import { calculateLoss, handleLevel, handlePromotion, handleVocation } from '../actions/actions_calculator';

class Calculator extends Component{
    handleChange(e){
        this.props.handleLevel(e.target.value);
        if(this.props.status.level > 8){
            this.props.calculateLoss(this.props.status.level, this.props.status.promotion, this.props.status.voc);
        }
    }

    onSelectchange(e){
        this.props.handleVocation(e.target.value);
        this.props.calculateLoss(this.props.status.level, this.props.status.promotion, this.props.status.voc);
    }

    handlePromotionChange(e){
        this.props.handlePromotion(e.target.checked)
        this.props.calculateLoss(this.props.status.level, this.props.status.promotion, this.props.status.voc);
    }

    renderForm(){
        return(
            <div>
                <div className="form-row">
                    <div className="form-group row col-md-12">
                        <label className="col-md-2 col-form-label">Level</label>
                        <input className="form-control col-md-2" id="level" name="level" placeholder="Your Level..." onChange={this.handleChange.bind(this)}/>
                        <div className="form-check col-md-2">
                            <span className="col-md-3">Promotion</span>
                            <input className="form-input col-md-3" type="checkbox" value="promotion" onChange={this.handlePromotionChange.bind(this)} />
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
                <Results results={this.props.results}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { status: state.status, results: state.results };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ calculateLoss, handleLevel, handlePromotion, handleVocation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);