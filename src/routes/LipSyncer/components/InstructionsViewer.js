import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  outline: 1px solid #000;
  width: 12%;
`;

const Header = styled.div`
  border: 1px solid black;
  display: inline-block;
`;

const Data = styled.div`
  display: inline-block;
`;

class InstructionsViewer extends React.Component { 

  goToTime(e){
    let audioPlayer = document.getElementById('audio-player');
    audioPlayer.currentTime = parseFloat(e.target.innerText); 
  }

  render() {

    let { data, selectFrame } = this.props;

    return ( 
      <Container>
        Instructions
        <div>
          <Header style={{width: '30%'}}>
            Frame
          </Header>
          <Header style={{width: '70%'}}>
            Time
          </Header>
            {Object.keys(data.instructions).map((key)=>(
            <div key={key}>
              <Data style={{width: '30%'}}>{data.instructions[key].frameid}</Data>
              <Data style={{width: '70%', cursor: 'pointer'}} onClick={this.goToTime}>{data.instructions[key].time}</Data>
            </div>
          )).reverse()}
        </div>
      </Container>
    )
  }
}
InstructionsViewer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default InstructionsViewer
