import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const PageLayout = ({ children }) => (
  <div className='text-center'>
    <h1>Lip Syncer</h1>
   <div>
      {children}
    </div>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
