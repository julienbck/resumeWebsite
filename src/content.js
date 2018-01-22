
import React, { Component } from 'react';
import './App.css';



class Content extends Component {
  render(){

    return(
      <div className={this.props.contentGeneral}>
        <section className={this.props.homeVisibility}>
            <h1> HELLO </h1>
            <h2>I&lsquo;m Julien Bock</h2>
            <p className="line-1 anim-typewriter">Welcome on my resume Website...</p>
        </section>
        <section className= {this.props.aboutVisibility}>
        <a onClick={this.props.backToStartAbout} className="close"></a>
        <div className="ContentPartLeft">
        <p>
        </p>

        </div>

        <div className="ContentPartRight">
        <h1 className="TitleResumeContent"> ABOUT ME </h1>

        </div>
        </section>
        <section className= {this.props.resumeVisibility}>
          <a onClick={this.props.backToStartResume} className="close"></a>
          <div className="ContentPartLeft">
          <p>
          </p>

          </div>

          <div className="ContentPartRight">
          <h1 className="TitleResumeContent"> RESUME </h1>

          </div>
        </section>
        <section className= {this.props.portfolioVisibility}>

          <p className="paragraph ">Portfolio </p>
          <a onClick={this.props.backToStartPortfolio} className="close"></a>
          <div className="ContentPartLeft">
          <p>
          </p>

          </div>

          <div className="ContentPartRight">
          <h1 className="TitleResumeContent"> PORTFOLIO </h1>

          </div>
        </section>
        <section className= {this.props.contactVisibility}>
          <p className="paragraph ">Contact </p>
          <a onClick={this.props.backToStartContact} className="close"></a>
          <div className="ContentPartLeft">
          <p>
          </p>

          </div>

          <div className="ContentPartRight">
          <h1 className="TitleResumeContent"> CONTACT</h1>
          </div>
        </section>
      </div>

    );
  }
}

export default Content;
