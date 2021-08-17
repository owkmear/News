import React from 'react';
import './UXRow.sass';

class UXRow extends React.Component {
  render() {
    return <div className="ux-row">{this.props.children}</div>;
  }
}

export default UXRow;
