import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Img = styled.img`
  height: 100%;
  width: 100%;
  display: block;
`;

export const FrameViewer = ({frame}) => (
<Img src="https://target.scene7.com/is/image/Target/52298764_Alt01?wid=520&hei=520&fmt=pjpeg" />
)

export default FrameViewer
