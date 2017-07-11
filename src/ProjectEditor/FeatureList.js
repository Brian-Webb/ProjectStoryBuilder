import React, { Component } from 'react';
import {Row, Input} 		    from 'react-materialize';
import { Debounce }         from 'react-throttle';

class FeatureList extends Component {
  constructor(props) {
    super(props);
    this.handleMetadataFeatureChange = this.handleMetadataFeatureChange.bind(this);
  }
  
  render() {
    var features = [];

    this.props.features.forEach( function(feature) {
      features.push( <FeatureRow feature={feature} key={feature.id} handleMetadataFeatureChange={this.handleMetadataFeatureChange} /> );
    }, this);

    return (
      <div className="FeatureList">
        <span className="FeaturesList--header">Features</span>
        {features}
      </div>
    )
  }

  // input handlers
    handleMetadataFeatureChange(key, field_name, value) {
      var story_index = key - 1;

      this.props.handleMetadataFeatureChange(story_index, field_name, value);
    }
}

class FeatureRow extends Component {
  constructor(props) {
    super(props);
    this.handleMetadataFeatureChange = this.handleMetadataFeatureChange.bind(this);
  }

  render() {
    var id = this.props.feature.id,
        name = this.props.feature.name;

    return (
      <Row className="FeatureRow" data-issue-row={id}>
        <Debounce time="400" handler="onChange">
          <Input type="text" s={10} defaultValue={name} name="name" onChange={this.handleMetadataFeatureChange} label="Feature Name" />
        </Debounce>
      </Row>
    )
  }

  // input handlers
    handleMetadataFeatureChange(e) {
      this.props.handleMetadataFeatureChange(this.props.feature.id, e.target.name, e.target.value);
    }
}

export default FeatureList;