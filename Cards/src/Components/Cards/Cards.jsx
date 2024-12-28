import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Data from '../../Data';

const Cards = ({id,imgSrc,title,desc}) => {
    return (
        <div style={{display: "flex"}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSrc} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <Button variant="primary">{id}</Button>
                </Card.Body>
            </Card>


        </div>
    )
}

export default Cards;