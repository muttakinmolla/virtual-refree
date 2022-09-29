import React, { useEffect, useState } from 'react';
import './AllSports.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import Sports from '../Sports/Sports';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import { ToastContainer } from 'react-toastify';

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
        <div className='row'>
            <ToastContainer />
            <div className="col-9 p-5">
                <h1 className='heading'><FontAwesomeIcon icon={faShield} className='icon pe-4' />Virtual Referee</h1>
                <h4 className='mt-5 mb-4'>Take Your Game Today</h4>
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
            <div className="col-3 main-score-board">
                <ScoreBoard gameTime={gameTime}></ScoreBoard>
            </div>

        </div>
    );
};

export default AllSports;