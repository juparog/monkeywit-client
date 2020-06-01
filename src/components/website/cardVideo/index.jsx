import React, { PureComponent } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Image1 from 'static-files/img/utils/thumbnail-video.png';

import './style.css';

class CardVideo extends PureComponent {
  render() {
    const {
      image, title, description, videoId,
    } = this.props;
    return (
      <Card className="card-video m-2 shadow-black">
        <Card.Img variant="top" src={image} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <div className="module line-clamp">
            <Card.Text>{description}</Card.Text>
          </div>
          <div className="mt-auto">
            <Link
              to={`/cursos/videos/${videoId}`}
              className="btn btn-danger"
            >
              Ver video
            </Link>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

CardVideo.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  videoId: PropTypes.string,
};

CardVideo.defaultProps = {
  image: Image1,
  title: 'Video title',
  description: 'Some quick example text to build on the card title and make up the bulk of the card&apos;s content.',
  videoId: '#',
};

export default CardVideo;
