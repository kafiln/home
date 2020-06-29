import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ title, logo }) => (
  <header className="px-4 bg-red-400">
    <div className="flex">
      <img src={logo} />
      <Link to="/">{title}</Link>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
