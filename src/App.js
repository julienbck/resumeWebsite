import React, { Component } from 'react';
import './App.css';
import Content from './content.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      homeVisibility: 'visible',
      resumeVisibility: 'hidden',
      aboutVisibility: 'hidden',
      portfolioVisibility: 'hidden',
      contactVisibility: 'hidden',
      contentGénéral: 'ContentRight'
    }
  }
  onClickAtHome = () => {
    this.setState({
      homeVisibility: 'visible homeContent',
      aboutVisibility: 'hidden',
      resumeVisibility: 'hidden',
      portfolioVisibility: 'hidden',
      contactVisibility: 'hidden'
    })
  }
  onClickAtResume = () => {
    this.setState({
    homeVisibility: 'hidden',
    aboutVisibility: 'hidden',
    resumeVisibility: 'visible resumeContent',
    portfolioVisibility: 'hidden',
    contactVisibility: 'hidden'
    })
  }
  onClickAtAboutMe = () => {
    this.setState({
    homeVisibility: 'hidden',
    aboutVisibility: 'visible aboutContent',
    resumeVisibility: 'hidden',
    portfolioVisibility: 'hidden',
    contactVisibility: 'hidden'
    })
  }
  onClickAtPortfolio = () => {
    this.setState({
    homeVisibility: 'hidden',
    aboutVisibility: 'hidden',
    resumeVisibility: 'hidden',
    portfolioVisibility: 'visible portfolioContent',
    contactVisibility: 'hidden'
    })
  }
  onClickAtContact = () => {
    this.setState({
    homeVisibility: 'hidden',
    aboutVisibility: 'hidden',
    resumeVisibility: 'hidden',
    portfolioVisibility: 'hidden',
    contactVisibility: 'visible contactContent'
    })
  }
  render() {
    return (
      <div className="App">
      <nav className="NavBarFloatLeft">

        <ul className="MenuList">

          <li onClick={this.onClickAtAboutMe} className="BackgroundImg2">
            <div className="ContentToTileText">
              <a className="fa fa-user IconStyle"></a>
              <a className="titleMenu" >About Me</a>
              <p>Same word about me </p>
            </div>
          </li>

          <li className="BackgroundImg1" onClick={this.onClickAtResume} >
            <div className="ContentToTileText">
              <a className="fa fa-home IconStyle"></a>
              <a  className="titleMenu">Resume</a>
              <p>About my experience and my studies </p>
            </div>
          </li>

          <li className="BackgroundImg3" onClick={this.onClickAtPortfolio}>
            <div className="ContentToTileText">
              <a className="fa fa-picture-o IconStyle"></a>
              <a className="titleMenu" >Portfolio</a>
              <p>Little infographic creation</p>
            </div>
          </li>

          <li onClick={this.onClickAtContact} className="BackgroundImg4 ">
            <div className="ContentToTileText">
              <a className="fa fa-envelope IconStyle"></a>
              <a className="titleMenu" >Contact</a>
              <p>Contact me for more informations</p>
            </div>
          </li>
        </ul>
      </nav>
        <Content
        homeVisibility= {this.state.homeVisibility}
        aboutVisibility= {this.state.aboutVisibility}
        portfolioVisibility= {this.state.portfolioVisibility}
        contactVisibility= {this.state.contactVisibility}
        resumeVisibility= {this.state.resumeVisibility}
        contentGénéral = {this.state.ContentRight}
        />
      </div>
    );
  }
}

export default App;
