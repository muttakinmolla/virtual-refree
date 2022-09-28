import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './ScoreBoard.css';
import Author from '../../muttakin_the_dev3.jpg';

const ScoreBoard = () => {
    return (
        <div>
            <div className='d-flex align-items-center mt-4 main-score-board'>
                <img src={Author} alt="" className='rounded-circle author-img' />
                <div className='ms-3'>
                    <h5><b>Md. Muttakin Molla</b></h5>
                    <p><FontAwesomeIcon icon={faLocationDot} /> Khulna, Bangladesh</p>
                </div>
            </div>
            <div className="row m-2 rounded body-details">
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
        </div>
    );
};

export default ScoreBoard;