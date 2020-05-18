import React, { PureComponent } from 'react';
import CardVideo from '~/components/website/card-video';
import Slider from '~/components/website/slider';
import Footer from '~/components/website/footer';
import './style.css';

class Main extends PureComponent {
  render() {
    const cardVideo = [];
    for (let index = 0; index < 7; index += 1) {
      cardVideo.push(<CardVideo key={index} />);
    }
    return (
      <>
        <header id="home-header">
          <Slider />
        </header>
        <main className="main-container px-4">
          <h2 className="text-secondary text-center font-weight-bold mt-2">Ultimos vídeos</h2>
          <div className="card-deck container-last-videos">
            {cardVideo}
          </div>
          <div className="videos-options">
            <button type="button" className="btn btn-danger btn-lg py-2 my-2">Ver todos los cursos</button>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Main;
