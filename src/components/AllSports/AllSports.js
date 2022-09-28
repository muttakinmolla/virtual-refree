import React, { useEffect, useState } from 'react';
import './AllSports.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import Sports from '../Sports/Sports';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

const AllSports = () => {
    const [sports, setSports] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSports(data)
            });
    }, []);
    return (
        <div className='row'>
            <div className="col-8">
                <h1 className='heading'><FontAwesomeIcon icon={faShield} className='icon pe-4' />Virtual Referee</h1>
                <h4 className='mt-5'>Take Your Game Today</h4>
                <div className="row">
                    {
                        sports.map(sport => <Sports sport={sport} key={sport.id}></Sports>)
                    }

                </div>
            </div>
            <div className="col-4 main-score-board">
                <ScoreBoard></ScoreBoard>
            </div>
        </div>
    );
};

export default AllSports;