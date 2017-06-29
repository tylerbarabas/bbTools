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
  margin: 20px;
  height: 200px;
  width: 200px;
`;

const active = styledClass`
  outline: ${ (props) => (props.id === props.selected) ? '1px solid red' : 'none' }
`;


class FrameSelector extends React.Component {

frameClicked(id) {
  let audioPlayer = document.getElementById('audio-player');
  this.props.selectFrame(id, audioPlayer.currentTime)
}

render() {
  let { data, selectFrame } = this.props;
  return (
    <div>
      <Container>
        <Selection onClick={this.frameClicked.bind(this,0)} className={active({id:0,selected: data.selected})}>
          <FrameViewer frame={0} />
        </Selection>
        <Selection onClick={this.frameClicked.bind(this,1)} className={active({id:1,selected: data.selected})}>
          <FrameViewer frame={1} />
        </Selection>
        <Selection onClick={this.frameClicked.bind(this,2)} className={active({id:2,selected: data.selected})}>
          <FrameViewer frame={2} />
        </Selection>
        <Selection onClick={this.frameClicked.bind(this,3)} className={active({id:3,selected: data.selected})}>
          <FrameViewer frame={3} />
        </Selection>
      </Container>
      <Container>
        <Selection onClick={this.frameClicked.bind(this,4)} className={active({id:4,selected: data.selected})}>
          <FrameViewer frame={4} />
        </Selection>
        <Selection onClick={this.frameClicked.bind(this,5)} className={active({id:5,selected: data.selected})}>
          <FrameViewer frame={5} />
        </Selection>
        <Selection onClick={this.frameClicked.bind(this,6)} className={active({id:6,selected: data.selected})}>
          <FrameViewer frame={6} />
        </Selection>
        <Selection onClick={this.frameClicked.bind(this,7)} className={active({id:7,selected: data.selected})}>
          <FrameViewer frame={7} />
        </Selection>
      </Container>
    </div>
    )
  }
}

export default FrameSelector
