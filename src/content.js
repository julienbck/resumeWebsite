
import React, { Component } from 'react';
import './App.css';

class Content extends Component {
  render(){

    return(
      <div className="ContentRightHome">
        <section className={this.props.homeVisibility}>
          <div className="ContentSection">
            <h1> HELLO </h1>
            <h2>I&lsquo;m Julien Bock</h2>
            <p className="paragraph animationtypewriter">Welcome on my resume Website...</p>
          </div>
        </section>
        <section className= {this.props.aboutVisibility}>
        <div className="ContentSection">
          <p className="paragraph ">
About Me  </p>
        </div>
        </section>
        <section className= {this.props.resumeVisibility}>
        <div className="ContentSection">
          <p className="paragraph ">MyResume </p>
        </div>
        </section>
        <section className= {this.props.portfolioVisibility}>
        <div className="ContentSection">
          <p className="paragraph ">Portfolio </p>
        </div>
        </section>
        <section className= {this.props.contactVisibility}>
        <div className="ContentSection">
          <p className="paragraph ">Contact </p>
        </div>
        </section>
      </div>

    );
  }
}

export default Content;
