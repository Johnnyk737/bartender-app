import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

import Main from './Main'
import DrinkList from './drinklist/DrinkList'
import '../styles/header.less'

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })

    // console.log(this.state)
    this.doSearch()
  }

  doSearch = () => {
    null
  }

  render() {
    return (
      <div className="navbar navbar-expand-lg fixed-top shadow">
        <div className="container-fluid">
          {/* TODO: at smaller widths, turn this into a hamburger icon */}
          <Nav className="navbar-nav">
            <Nav.Item>
              <Link className="nav-link" to='/drinklist'>Drink List</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link' to='/findyourdrink'>Find your Drink</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to='/'>Popular Drinks</Link>
            </Nav.Item>
            <Nav.Item>
            <Link className='nav-link' to='/'>About</Link>
            </Nav.Item>
            <Nav.Item>
            <Link className='nav-link' to='/admin'>Admin</Link>
            </Nav.Item>
          </Nav>
          <div id="image-text" className="navbar-brand header-title">
            {/* TODO: Keep center at smaller widths */}
            <div id="title">
              <Link className='nav-link' to='/'>Dranks</Link>
            </div>
          </div>
          <div className="form-inline my-2 my-lg-0 ml-auto">
            {/* TODO: at smaller widths, turn this into a search icon (magnifying glass) */}
            {/* <div className="search-bar form-control mr-sm-2"> */}
                <input type="search" 
                  className="search-bar form-control mr-sm-2" 
                  onChange={event=>this.handleChange(event)}
                  placeholder="Search Drinks" />
              {/* </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Header
