import React, { Component } from 'react';
import './App.css';
import Lightbox from 'react-image-lightbox';


const images = [
  'https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg',
  'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-240723.jpg4',
  'BackgroundResume.png'
];

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  onClickOnImage = () => {
    this.setState({
      isOpen: true,
    });
  }
  onClickOnImage2 = () => {
    this.setState({
      isOpen: true,
      photoIndex: 1,
    })
  }
  onClickOnImage3 = () => {
    this.setState({
      isOpen: true,
      photoIndex: 2,
    })
  }
  render(){
    const { photoIndex, isOpen } = this.state;
    return(
      <section className= {this.props.portfolioVisuel}>
      <a onClick={this.props.backToHome} className="close"></a>
      <div className="ContentPartLeft">
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1)]}
            prevSrc={images[(photoIndex- 1)]}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
        <div className="GridPortfolioContent">
          <div className="RowPortfolio">

              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
              <img onClick={this.onClickOnImage} src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
              <img onClick={this.onClickOnImage2} src='https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-240723.jpg'></img>
          </div>
          <div className="RowPortfolio">

              <img onClick={this.onClickOnImage3} src='./BackgroundContent.png'></img>
              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
          </div>
          <div className="RowPortfolio">

              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
              <img src='https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172445.jpg'></img>
          </div>
          <div className="RowPortfolio">


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
