import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import json from '../../../../public/img/mouth.json'

const Frame = styled.div`
  margin: 0 auto;
`;

class FrameViewer extends React.Component {

  constructor(props) {
    super();
    this.ss = new createjs.SpriteSheet(json);
    this.frame = this.ss._frames[props.frame];
    this.style = {
      backgroundImage: 'url('+this.frame.image.src+')',
      height: this.frame.rect.height,
      width: this.frame.rect.width,
      backgroundPositionX: -this.frame.rect.x,
      backgroundPositionY: -this.frame.rect.y,
      marginTop: 'calc(50% - '+this.frame.rect.height/2+'px)'
    };
  }

  render() {
    return (
      <Frame style={this.style} />
    )
  }
}

export default FrameViewer
