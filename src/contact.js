import React, { Component } from 'react';
import './App.css';

class Contact extends Component {
  render(){
    return(
      <section className= {this.props.contactVisuel}>
        <a onClick={this.props.backToHome} className="close"></a>
        <div className="ContentPartLeft">
        <p>
        </p>

        </div>

        <div className="ContentPartRight">
        <h1 className="TitleResumeContent"> CONTACT</h1>
        </div>
      </section>
  );

  }

}

export default Contact;
