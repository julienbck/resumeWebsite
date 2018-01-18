
import React, { Component } from 'react';
import './App.css';

class Content extends Component {
  render(){

    return(
      <div className="ContentRightHome">
        <section className={this.props.homeVisibility}>
        <h1> HELLO </h1>
        <h2>I&lsquo;m Julien Bock</h2>
        <p className="paragraph animationtypewriter">Welcome on my resume Website...</p>
        </section>
        <section className= {this.props.aboutVisibility}>
          <h1> ABOUT ME </h1>
          <p className="paragraph ">Informations about me </p>

        </section>
        <section className= {this.props.portfolioVisibility}>
          <h1> PORTFOLIO </h1>
          <p className="paragraph ">Informations about me </p>
        </section>
        <section className= {this.props.contactVisibility}>
          <h1> CONTACT </h1>
          <p className="paragraph ">Informations about me </p>
        </section>
      </div>

    );
  }
}

export default Content;
