import React from 'react';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/core';
const override = css`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

class ButtonSpinner extends React.Component {
  render() {
    return (
      <BeatLoader
        css={override}
        color={'#ffffff'}
        sizeUnit={"px"}
        size={13}
      />
    )
  }
}

export default ButtonSpinner;