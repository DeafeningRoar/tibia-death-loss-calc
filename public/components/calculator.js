import React, { Component } from 'react';
import { connect } from 'react-redux';

class Calculator extends Component{

    blessings(){
        return(
            <tr>
                <td><input type="checkbox" name="chkAll" value="All Blessings"/></td>
                <td><input type="checkbox" name="chkSpiritual" value="The Spiritual Shielding"/></td>
                <td><input type="checkbox" name="chkEmbrace" value="The Embrace of Tibia"/></td>
                <td><input type="checkbox" name="chkFire" value="The Fire of the Suns"/></td>
                <td><input type="checkbox" name="chkSpark" value="The Spark of the Phoenix"/></td>
                <td><input type="checkbox" name="chkWisdom" value="The Wisdom of Solitude"/></td>
                <td><input type="checkbox" name="chkBlood" value="Blood of the Mountain"/></td>
                <td><input type="checkbox" name="chkHeart" value="Heart of the Mountain"/></td>
            </tr>
        );
    }

    renderTable(){
        return(
            <table>
                <tbody>
                    <tr>
                        <td>
                            Level:
                        </td>
                        <td>
                            <input type="text" name="level"/>
                        </td>
                        <td>
                            Promotion:
                        </td>
                        <td>
                            <input type="checkbox" name="chkPromotion" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Hitpoints:
                        </td>
                        <td colSpan="2">
                        <span ref="hp"></span>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Manapoints:
                        </td>
                        <td>
                            <span ref="mana"></span>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Capacity:
                        </td>
                        <td>
                        <span ref="cap"></span>
                        </td>
                    </tr>
                    {this.blessings()}
                    <tr>
                        <td colSpan="2">
                            Experience Lost:
                        </td>
                        <td>
                            <span ref="expLost"></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }


    renderForm(){
        return(
            <form>
                <div class="form-group row">
                    <label for="level" class="col-sm-2 col-form-label">Level</label>
                    <div class="col-sm-10">
                        <input className="form-control input-xs" id="level" name="level" placeholder="Your Level..."/>
                    </div>
                </div>
                <div class="form-check row">
                    <div className="form-check">
                    <label class="form-check-label" for="promotion">
                        Promotion
                    </label>
                        <input className="form-check-input" type="checkbox" id="promotion" name="promotion" />
                    </div>
                </div>
            </form>
        );
    }

    render(){
        return(
            <div id="calcContainer" className="container">
                {this.renderForm()}
            </div>
        );
    }
}


export default connect()(Calculator);