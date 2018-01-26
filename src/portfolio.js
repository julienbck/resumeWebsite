import React, { Component } from 'react';
import './App.css';

const modal = document.getElementById('myModal');
const img = document.getElementById('myImg');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("closeImg")[0];

class Portfolio extends Component {

onClickImg = () => {
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
// When the user clicks on <span> (x), close the modal
onClickSpan = () => {
  modal.style.display = "none";
}
  render(){
    return(
      <section className= {this.props.portfolioVisuel}>
      <a onClick={this.props.backToHome} className="close"></a>
      <div className="ContentPartLeft">
        <div className="GridPortfolioContent">
          <div className="RowPortfolio">

              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
          </div>
          <div className="RowPortfolio">

              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
          </div>
          <div className="RowPortfolio">

              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
          </div>
          <div className="RowPortfolio">
            <img className="myImg" src="https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg" alt="Trolltunga, Norway" width="20%" height="20%" onClick={this.onClickImg}></img>
            <div className="myModal" className="modal">
              <span className="closeImg" onClick={this.onClickSpan}>&times;</span>
              <img className="modal-content" className="img01"></img>
              <div className="caption"></div>
            </div>
          </div>
          </div>
      </div>

      <div className="ContentPartRight">
      <h1 className="TitleResumeContent"> PORTFOLIO </h1>

      </div>
      </section>
  );

  }

}

export default Portfolio;
