import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './ScoreBoard.css';
import Author from '../../muttakin_the_dev3.jpg';

const ScoreBoard = (props) => {
    const gameTime = props.gameTime;
    console.log(gameTime)
    return (
        <div>
            <div className='d-flex align-items-center mt-4 main-score-board'>
                <img src={Author} alt="" className='rounded-circle author-img' />
                <div className='ms-3'>
                    <h5><b>Md. Muttakin Molla</b></h5>
                    <p><FontAwesomeIcon icon={faLocationDot} /> Khulna, Bangladesh</p>
                </div>
            </div>
            <div className="row my-4 mx-2 p-2 rounded body-details">
                <div className="col-4">
                    <div>
                        <h2>75<span className='span-text'>kg</span></h2>
                        <h5>Weight</h5>
                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <h2>5.9<span><sup>''</sup></span></h2>
                        <h5>Height</h5>
                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <h2>75<span className='span-text'>Yrs</span></h2>
                        <h5>Age</h5>
                    </div>
                </div>
            </div>
            <h5 className='mt-4 mb-4'>Add a Interval</h5>
            <div className="row m-2 p-4 rounded body-details">
                <div className="col-3">
                    <div className=''>
                        <button className='interval-btn'><p>10<span className='span-text'>min</span></p></button>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                        <button className='interval-btn'><p>20<span className='span-text'>min</span></p></button>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                        <button className='interval-btn'><p>30<span className='span-text'>min</span></p></button>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                        <button className='interval-btn'><p>40<span className='span-text'>min</span></p></button>
                    </div>
                </div>
            </div>

            <h3 className='mt-4 mb-4'>Exercise Details</h3>
            <div className='d-flex justify-content-between m-2 game-time p-2 rounded'>
                <p><b>Exercise Time :</b></p>
                <p>{ gameTime } <span>M</span></p>
            </div>
            <div className='d-flex justify-content-between m-2 game-time p-2 rounded'>
                <p><b>Break Time :</b></p>
                <p>0 <span>M</span></p>
            </div>

            <button className='mt-5 w-100 game-end-btn rounded'>Game End</button>
        </div>
    );
};

export default ScoreBoard;