import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styledClass from 'styled-classnames'
import FrameViewer from './FrameViewer'

const Container = styled.div`
  padding: 5px;
`;

const Selection = styled.div`
  display: inline-block;
  margin: 10px;
  height: 100px;
  width: 100px;
`;

const active = styledClass`
  outline: ${ (props) => (props.id === props.selected) ? '1px solid blue' : 'none' }
`;


class FrameSelector extends React.Component {

frameClicked(id) {
  let audioPlayer = document.getElementById('audio-player');
  this.props.selectFrame(id, audioPlayer.currentTime, this.props.data)
}


  render() {
    let { data, selectFrame } = this.props;
    return (
      <Container>
        {data.json.frames.map((frame,i)=>{
          let markup = [];
          markup.push(<Selection key={i} onClick={this.frameClicked.bind(this,i)} className={active({id:i,selected: data.selected})}>
            <FrameViewer frame={i} />
          </Selection>);
          if ((i+1)%4 === 0) markup.push(<br />);
          return markup;
        })}
      </Container>
    )
  }
}

export default FrameSelector
