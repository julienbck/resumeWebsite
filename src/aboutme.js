import React, { Component } from 'react';
import './App.css';

class Aboutme extends Component {
  render(){
    return(
      <section className= {this.props.aboutmeVisuel}>
      <a onClick={this.props.backToHome} className="close"></a>
      <div className="ContentPartLeft" style={{color: '#000'}}>
      <h2>MY STORY</h2>
      <div className="profilPicture"></div>

      <p>
      My name is Julien and i&lsquo;ve 22 years old.
      </p>
      <p>
      I am fascinate by computing world since my youngest age.
      </p>
      <p>
      I was above attracted by the gaming graphics to realize compositions for my friends or for projects of video game.
      </p>
      <p>
      After that I became interested at the webdesign
      </p>
      <div className="separator"></div>

      </div>

      <div className="ContentPartRight">
      <h1 className="TitleResumeContent"> ABOUT ME </h1>

      </div>
      </section>
  );

  }

}

export default Aboutme;
