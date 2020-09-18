import React, { Component } from 'react';
import PartsList from './PartsList';

export default class Parts extends Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <PartsList
                    updateFeature={() => this.props.updateFeature}
                    FeaturesList={this.props.FeaturesList}
                    state={this.props.state}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
            </form>
        )
    }
}