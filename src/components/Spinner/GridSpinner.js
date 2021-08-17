import React from 'react';
import { GridLoader } from 'react-spinners';

class GridSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    return <GridLoader color={'#337ab7'} loading={this.state.loading} />;
  }
}

export default GridSpinner;
