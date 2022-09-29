import React from 'react';
import Card from 'react-bootstrap/Card';
import './Sports.css';

const Sports = (props) => {
    const { name, image, time, age } = props.sport;
    const handleGameTime = props.handleGameTime;
    return (
        <div className="col-lg-4 mb-3">
            <Card className='p-3'>
                <Card.Img variant="top" src={image} className='' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Age: <b>{age}</b>
                    </Card.Text>
                    <p>Time: <b>{time}</b></p>
                    <button className='AddSportsButton' onClick={() => handleGameTime(time)}>Add To List</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Sports;