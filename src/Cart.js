import React, { Component } from 'react'
import CartSummary from './CartSummary';

export default class Cart extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                    <CartSummary
                        state={this.props.state}
                        USCurrencyFormat={this.props.USCurrencyFormat}
                    />
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {this.props.USCurrencyFormat}
                    </div>
                </div>
            </section>
        )
    }
}