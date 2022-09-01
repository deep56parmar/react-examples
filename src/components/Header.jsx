import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    
  return (
    <div>{props.title}</div>
  )
}

Header.defaultProps = {
    title: 'Indecision'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header