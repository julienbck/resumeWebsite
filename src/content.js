
import React, { Component } from 'react';
import './App.css';

class Content extends Component {
  render(){

    return(
      <div className={this.props.contentGeneral}>
        <section className={this.props.homeVisibility}>
          <div>
            <h1> HELLO </h1>
            <h2>I&lsquo;m Julien Bock</h2>
            <p className="paragraph animationtypewriter">Welcome on my resume Website...</p>
          </div>
        </section>
        <section className= {this.props.aboutVisibility}>
        <div>
        <h3 className="paragraphBlack ">ABOUT ME </h3>
        <h4 className="paragraphBlack">I&lsquo;m Julien Bock</h4>
        <hr/>
        <a onClick={this.props.backToStart} className="close"></a>
        </div>
        </section>
        <section className= {this.props.resumeVisibility}>
        <div>
          <h3 className="paragraphBlack ">MyResume </h3>

          <a onClick={this.props.backToStart} className="close"></a>

        </div>
        </section>
        <section className= {this.props.portfolioVisibility}>
        <div>
          <p className="paragraph ">Portfolio </p>
          <a onClick={this.props.backToStart} className="close"></a>
        </div>
        </section>
        <section className= {this.props.contactVisibility}>
        <div>
          <p className="paragraph ">Contact </p>
          <a onClick={this.props.backToStart} className="close"></a>
        </div>
        </section>
      </div>

    );
  }
}

export default Content;
