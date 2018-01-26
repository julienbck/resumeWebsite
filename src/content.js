
import React, { Component } from 'react';
import './App.css';
import Resume from './resume.js';
import Portfolio from './portfolio.js';
import Contact from './contact.js';
import Aboutme from './aboutme.js';



class Content extends Component {
  render(){

    return(
      <div className={this.props.contentGeneral}>
        <section className={this.props.homeVisibility}>
            <h1> HELLO </h1>
            <h2>I&lsquo;m Julien Bock</h2>
            <p className="line-1 anim-typewriter">Welcome on my resume Website...</p>
        </section>
          <Aboutme backToHome={this.props.backToStartAbout} aboutmeVisuel={this.props.aboutVisibility}/>

          <Resume backToHome={this.props.backToStartResume} resumeVisuel={this.props.resumeVisibility} />

          <Portfolio backToHome={this.props.backToStartPortfolio} portfolioVisuel={this.props.portfolioVisibility} />

          <Contact backToHome={this.props.backToStartContact} contactVisuel={this.props.contactVisibility}/>

      </div>

    );
  }
}

export default Content;
