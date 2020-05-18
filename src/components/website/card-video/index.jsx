import React, { PureComponent } from 'react';
import { Card, Button } from 'react-bootstrap';

import Image1 from '*static/img/utils/thumbnail-video.png';

import './style.css';

class CardVideo extends PureComponent {
  render() {
    return (
      <Card className="card-video m-2">
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Vídeo Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card&apos;s content.
          </Card.Text>
          <Button variant="danger">Ver video</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CardVideo;
