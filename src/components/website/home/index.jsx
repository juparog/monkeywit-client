import React, { PureComponent } from 'react';
import { Spinner } from 'react-bootstrap';
import { Fetch } from 'react-request';

import CardVideo from '~/components/website/cardVideo';
import Slider from '~/components/website/slider';
import './style.css';

class Main extends PureComponent {
  render() {
    return (
      <>
        <header id="home-header" className="mt-main">
          <Slider />
        </header>
        <main className="main-container px-4">
          <h2 className="text-secondary text-center font-weight-bold my-4">Ultimos vídeos</h2>
          <div className="card-deck container-last-videos">
            <Fetch url={`${process.env.urlApi}/videos`}>
              {({ fetching, failed, data }) => {
                if (fetching) {
                  return (
                    <>
                      <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                      <div className="ml-3">Cargando videos...</div>
                    </>
                  );
                }

                if (failed) {
                  return <div>Ops!, no hay videos para mostrar.</div>;
                }

                if (data) {
                  const cardVideo = [];
                  if (data.length) {
                    data.forEach((video) => {
                      const { snippet: { thumbnails: { high, medium } } } = video;
                      cardVideo.push(
                        <CardVideo
                          key={video.id.videoId}
                          image={high.url || medium.url}
                          title={video.snippet.title}
                          description={video.snippet.description}
                          videoId={video.id.videoId}
                        />,
                      );
                    });
                  }
                  return cardVideo;
                }

                return null;
              }}
            </Fetch>
          </div>
          <div className="videos-options my-4">
            <button type="button" className="btn btn-danger btn-lg py-2">Ver todos los cursos</button>
          </div>
        </main>
      </>
    );
  }
}

export default Main;
