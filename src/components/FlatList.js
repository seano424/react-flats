import React from 'react';
import Flat from './Flat'

class FlatList extends React.Component {
  
  renderFlats() {
    return this.props.flats.map(flat => {
      return (
        <Flat key={flat.name} flat={flat} onClick={this.props.onClick}></Flat>
      )
    })
  }

  render() {

    return (
      <div className="ui grid">
        <div className="row" style={{paddingBottom: '0 !important'}}>
        <div className="ui cards" style={{marginBottom: '0 !important'}}>
        {this.renderFlats()}
        </div>
        </div>
      </div>
    )
  }
}

export default FlatList;