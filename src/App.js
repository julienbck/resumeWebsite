import React, { Component } from 'react';
import './App.css';
import Content from './content.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      homeVisibility: 'ContentRightHome',
      resumeVisibility: 'hidden',
      aboutVisibility: 'hidden',
      portfolioVisibility: 'hidden',
      contactVisibility: 'hidden',
      contentGeneral: 'contentGeneral',
      navbar: 'NavBarFloatLeft'
    }
  }
  onClickAtHome = () => {
    this.setState({
      homeVisibility: 'visible',
      aboutVisibility: 'hidden',
      resumeVisibility: 'hidden',
      portfolioVisibility: 'hidden',
      contactVisibility: 'hidden'
    })
  }
  onClickAtResume = () => {
    this.setState({
    homeVisibility: 'ContentRightHome MoveOnRight',
    aboutVisibility: 'hidden',
    resumeVisibility: 'resumeContent',
    portfolioVisibility: 'hidden',
    contactVisibility: 'hidden',
    contentGeneral:'contentGeneral',
    navbar: 'NavBarFloatLeft MoveOnLeft'
    })
  }
  onClickAtAboutMe = () => {
    this.setState({
      homeVisibility: 'ContentRightHome MoveOnRight',
      aboutVisibility: 'aboutContent',
      resumeVisibility: 'hidden',
      portfolioVisibility: 'hidden',
      contactVisibility: 'hidden',
      contentGeneral:'contentGeneral',
      navbar: 'NavBarFloatLeft MoveOnLeft'
    })
  }
  onClickAtPortfolio = () => {
    this.setState({
      homeVisibility: 'ContentRightHome MoveOnRight',
      aboutVisibility: 'hidden',
      resumeVisibility: 'hidden',
      portfolioVisibility: 'portfolioContent',
      contactVisibility: 'hidden',
      contentGeneral:'contentGeneral',
      navbar: 'NavBarFloatLeft MoveOnLeft'
    })
  }
  onClickAtContact = () => {
    this.setState({
      homeVisibility: 'ContentRightHome MoveOnRight',
      aboutVisibility: 'hidden',
      resumeVisibility: 'hidden',
      portfolioVisibility: 'hidden',
      contactVisibility: 'contactContent',
      contentGeneral:'contentGeneral',
      navbar: 'NavBarFloatLeft MoveOnLeft'
    })
  }
  onClickAtCrossResume = () => {
    this.setState({
      homeVisibility: 'ContentRightHome BackToRight',
      aboutVisibility: 'hidden ',
      resumeVisibility: 'ContentStartPosition',
      portfolioVisibility: 'hidden',
      contactVisibility: 'hidden',
      contentGeneral:'contentGeneral',
      navbar: 'NavBarFloatLeft BackToLeft'
    })
  }
  onClickAtCrossAbout = () => {
    this.setState({
      homeVisibility: 'ContentRightHome BackToRight',
      aboutVisibility: 'ContentStartPosition',
      resumeVisibility: 'hidden',
      portfolioVisibility: 'hidden',
      contactVisibility: 'hidden',
      contentGeneral:'contentGeneral',
      navbar: 'NavBarFloatLeft BackToLeft'
    })
  }
  onClickAtCrossPortfolio = () => {
    this.setState({
      homeVisibility: 'ContentRightHome BackToRight',
      aboutVisibility: 'hidden ',
      resumeVisibility: 'hidden',
      portfolioVisibility: 'ContentStartPosition',
      contactVisibility: 'hidden',
      contentGeneral:'contentGeneral',
      navbar: 'NavBarFloatLeft BackToLeft'
    })
  }
  onClickAtCrossContact = () => {
    this.setState({
      homeVisibility: 'ContentRightHome BackToRight',
      aboutVisibility: 'hidden ',
      resumeVisibility: 'hidden',
      portfolioVisibility: 'hidden',
      contactVisibility: 'ContentStartPosition',
      contentGeneral:'contentGeneral',
      navbar: 'NavBarFloatLeft BackToLeft'
    })
  }
  render() {
    return (
      <div className="App">
      <nav className={this.state.navbar}>

        <ul className="MenuList">

          <li onClick={this.onClickAtAboutMe} className="BackgroundImg2">
            <div className="ContentToTileText">
              <a className="fa fa-user IconStyle"></a>
              <a className="titleMenu" ><span style={{color:'#6A8D9D'}}>A</span>bout Me</a>
              <p>Same word about me </p>
            </div>
          </li>

          <li className="BackgroundImg1" onClick={this.onClickAtResume} >
            <div className="ContentToTileText">
              <a className="fa fa-home IconStyle"></a>
              <a  className="titleMenu"><span style={{color:'#6A8D9D'}}>R</span>esume</a>
              <p>About my experience and my studies </p>
            </div>
          </li>

          <li className="BackgroundImg3" onClick={this.onClickAtPortfolio}>
            <div className="ContentToTileText">
              <a className="fa fa-picture-o IconStyle"></a>
              <a className="titleMenu" ><span style={{color:'#6A8D9D'}}>P</span>ortfolio</a>
              <p>Little infographic creation</p>
            </div>
          </li>

          <li onClick={this.onClickAtContact} className="BackgroundImg4 ">
            <div className="ContentToTileText">
              <a className=" IconStyle"><a className="fa fa-envelope"></a></a>
              <a className="titleMenu" ><span style={{color:'#6A8D9D'}}>C</span>ontact</a>
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
        contentGeneral = {this.state.contentGeneral}
        backToStartResume = {this.onClickAtCrossResume}
        backToStartAbout = {this.onClickAtCrossAbout}
        backToStartPortfolio = {this.onClickAtCrossPortfolio}
        backToStartContact = {this.onClickAtCrossContact}
        />
      </div>
    );
  }
}

export default App;
