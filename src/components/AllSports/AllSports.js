import React, { useEffect, useState } from 'react';
import './AllSports.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import Sports from '../Sports/Sports';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

const AllSports = () => {
    const [sports, setSports] = useState([]);
    const [gameTime, setGameTime] = useState(0);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => { setSports(data) });
    }, []);

    const handleGameTime = (time) => {
        const newGameTime = gameTime + time;
        setGameTime(newGameTime);
    }
    return (
        <div className='row flex-column-reverse flex-lg-row'>
            <div className="col-lg-9 pt-5 ps-5 pe-5">
                <h1 className='heading text-center text-lg-start'><FontAwesomeIcon icon={faShield} className='icon pe-4' />Virtual Referee</h1>
                <h4 className='mt-5 mb-4 text-center text-lg-start'>Take Your Game Today</h4>
                <div className="row">
                    {
                        sports.map(sport => <Sports
                            sport={sport}
                            key={sport.id}
                            handleGameTime={handleGameTime}
                        ></Sports>)
                    }

                </div>
            </div>
            <div className="col-lg-3 main-score-board">
                <ScoreBoard gameTime={gameTime}></ScoreBoard>
            </div>

        </div>
    );
};

export default AllSports;