import React, { PureComponent } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Fetch } from 'react-request';

import PropTypes from 'prop-types';
import './style.css';

class ShowVideo extends PureComponent {
  render() {
    const { match: { params } } = this.props;
    return (
      <div className="mt-main mx-4 pt-2">
        <div className="video-container mt-2 row">
          <Fetch url={`${process.env.urlApi}/videos/id/${params.videoId}`}>
            {({ fetching, failed, data }) => {
              if (fetching) {
                return (
                  <>
                    <Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                    <div className="ml-3">Cargando vídeo...</div>
                  </>
                );
              }

              if (failed) {
                return <div>Ops!, no pudo cargarce el vídeo.</div>;
              }

              if (data) {
                let component = <div>Ops!, no pudo cargarce el vídeo.</div>;
                if (data.length) {
                  data.forEach((video) => {
                    const tags = [];
                    video.snippet.tags.forEach((tag) => {
                      tags.push(
                        <a key={tags.length} href="/#" className="h5 mx-1">
                          <span className="badge bg-monkey-blue">{tag}</span>
                        </a>,
                      );
                    });
                    component = (
                      <>
                        <div className="col-lg-8 col-md-12 col-sm-12 p-0 mb-2">
                          <Card className="mx-1 shadow-black">
                            <div className="embed-responsive embed-responsive-16by9">
                              <iframe
                                className="embed-responsive-item"
                                title={params.videoId}
                                src={`https://www.youtube-nocookie.com/embed/${params.videoId}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                            <Card.Body>
                              <Card.Title>{video.snippet.title}</Card.Title>
                              <div className="module">
                                <pre>{video.snippet.description}</pre>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 p-0 mb-2">
                          <Card className="mx-1 shadow-black">
                            <Card.Body>
                              {tags}
                            </Card.Body>
                          </Card>
                        </div>
                      </>
                    );
                  });
                }
                return component;
              }

              return null;
            }}
          </Fetch>
        </div>
      </div>
    );
  }
}

// width="560"
// height="315"

ShowVideo.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

ShowVideo.defaultProps = {
  match: {},
};

export default ShowVideo;
