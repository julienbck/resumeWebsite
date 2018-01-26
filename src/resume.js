import React, { Component } from 'react';
import './App.css';

class Resume extends Component {
  render(){
    return(
      <section className= {this.props.resumeVisuel}>
        <a onClick={this.props.backToHome} className="close"></a>
      <div className="ContentPartLeft">
        <p>
        </p>

        </div>

        <div className="ContentPartRight">
        <h1 className="TitleResumeContent"> RESUME </h1>
      </div>
      </section>
  );

  }

}

export default Resume;
