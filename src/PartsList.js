import React, { Component } from 'react';
import PartsItem from './PartsItem';
import slugify from 'slugify';

export default class PartsList extends Component {

    render() {
        return (
            Object.keys(this.props.FeaturesList).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                const options = this.props.FeaturesList[feature].map(item => {
                  const itemHash = slugify(JSON.stringify(item));
                  return (
                        <PartsItem
                            updateFeature={this.props.updateFeature()}
                            itemHash={itemHash}
                            key={itemHash}
                            feature={feature}
                            item={item}
                            state={this.props.state}
                            USCurrencyFormat={this.props.USCurrencyFormat}
                        />
                  );
                });
          
                return (
                  <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                      <h3>{feature}</h3>
                    </legend>
                    {options}
                  </fieldset>
                );
              })
        )
    }
}