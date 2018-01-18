import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      homeVisibility: 'visible',
      aboutVisibility: 'hidden',
      portfolioVisibility: 'hidden',
      contactVisibility: 'hidden'
    }
  }
  onClickAtHome = () => {
    this.setState({
      homeVisibility: 'visible',
      aboutVisibility: 'hidden',
      portfolioVisibility: 'hidden',
      contactVisibility: 'hidden'
    })
  }
  onclickAtAboutMe = () => {
    this.setState({
    homeVisibility: 'hidden',
    aboutVisibility: 'visible',
    portfolioVisibility: 'hidden',
    contactVisibility: 'hidden'
    })
  }
  onclickAtPortfolio = () => {
    this.setState({
    homeVisibility: 'hidden',
    aboutVisibility: 'hidden',
    portfolioVisibility: 'visible',
    contactVisibility: 'hidden'
    })
  }
  onclickAtContact = () => {
    this.setState({
    homeVisibility: 'hidden',
    aboutVisibility: 'hidden',
    portfolioVisibility: 'hidden',
    contactVisibility: 'visible'
    })
  }
  render(){
    return (<nav className="NavBarFloatLeft">

      <div className="Picture">
        <div className="Circle">
        </div>
      </div>
      <div className="FullName">
      <h3> John DOE</h3>
      </div>
      <ul className="MenuList">
        <li>
          <a className="fa fa-home IconStyle"></a>
          <span className="arrow-left"></span>
          <a href="#" className="titleMenu">Home</a>
        </li>

        <li>
          <a className="fa fa-home IconStyle"></a>
          <span className="arrow-left"></span>
          <a href="#" className="titleMenu">About Me</a>
        </li>
        <li>
          <a className="fa fa-home IconStyle"></a>
          <span className="arrow-left"></span>
          <a href="#" className="titleMenu">Portfolio</a>
        </li>

        <li>
          <a className="fa fa-home IconStyle"></a>
          <span className="arrow-left"></span>
          <a href="#" className="titleMenu">Contact</a>
        </li>
      </ul>
    </nav>
  );
  }
}

export default Navbar;
