import React from 'react';
import PropTypes from 'prop-types';
import './UXFigure.sass';

class Figure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      height: null,
    };
    this.image = React.createRef();
  }
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    arWidth: PropTypes.number,
    arHeight: PropTypes.number,
  };

  static defaultProps = {
    arWidth: 16,
    arHeight: 9,
  };

  componentDidMount() {
    // this.fetchImage(this.props.src);
    const { src } = this.props;
    console.log(this.image);
    // this.image.src = src;
  }

  handleImageLoaded = () => {
    console.log('loaded');
    const { arWidth, arHeight } = this.props;
    const height = this.image.current.width * (arWidth / arHeight);
    this.setState({ loading: false, error: false, height });
  };

  handleImageErrored = () => {
    console.log('fail');
    this.setState({ loading: false, error: true });
  };

  render() {
    const { loading, error } = this.state;
    const { src, alt } = this.props;

    return (
      <div className="figure">
        {loading ? (
          <p>Spinner</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          <img
            ref={this.image}
            width={'100%'}
            height={this.state.height}
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
            alt={alt}
          />
        )}
      </div>
    );
  }
}

export default Figure;
