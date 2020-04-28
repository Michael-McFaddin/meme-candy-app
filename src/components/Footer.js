import React from 'react';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card>
      <Card.Body style={{backgroundColor: "#894B94", bottom: 0, height: 200}}>
        <Card.Title className="display-1" style={{ fontWeight: "bold", textAlign: "center", margin: 20  }}>Thank You For Tasting Our Delicious Meme Candy! </Card.Title>
      </Card.Body>
    </Card>
    )
}
export default Footer