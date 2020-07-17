import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomCard(props) {
  const cardStyle = {
    margin: "50px",
  }
  const cardType = [
    'Primary',
    'Secondary',
    'Success',
    'Warning',
    'Info',
    'Light',
    'Dark',
  ]
  const rand = Math.floor(Math.random() * cardType.length)
   return (
    <Card bg={cardType[rand].toLowerCase()}
          text={cardType[rand].toLowerCase() == 'light' ? 'dark' : 'white'}
          className="mb-2"
          style={cardStyle}>
    <Card.Header>{props.date}</Card.Header>
    <Card.Body>
   <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.name}
      </Card.Text>
    </Card.Body>
    </Card>
   );
}

export default CustomCard;
