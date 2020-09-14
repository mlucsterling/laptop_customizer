import React, { Component } from 'react';
import CartItem from './CartItem';

export default class CartSummary extends Component {
    render() {
        return(
            Object.keys(this.props.state.selected).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                const selectedOption = this.props.state.selected[feature];
          
                return (
                  <CartItem
                    featureHash={featureHash}
                    feature={feature}
                    selectedOption={selectedOption}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                  />
                );
              })
        )
    }
}