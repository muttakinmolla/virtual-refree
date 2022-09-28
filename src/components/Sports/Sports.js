import React from 'react';
import Card from 'react-bootstrap/Card';
import './Sports.css';

const Sports = (props) => {
    const { name, image } = props.sport;
    return (
        <div className="col-4 mb-3">
            <div className='card-div'>
                <Card className='p-3 card'>
                    <Card.Img variant="top" src={image} className='' />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <button className='AddSportsButton'>Add To List</button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Sports;