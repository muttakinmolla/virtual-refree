import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './ScoreBoard.css';
import Author from '../../muttakin_the_dev3.jpg';
import { addToLocalStorage, deleteGameSummary, getFromLocalStorage } from '../../utilities/utilities';
import 'react-toastify/dist/ReactToastify.css';

const ScoreBoard = (props) => {
    const gameTime = props.gameTime;

    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        const newBreakTime = getFromLocalStorage();
        setBreakTime(newBreakTime.break)
    }, []);

    const handleBreakTime = (time) => {
        addToLocalStorage(time);
        setBreakTime(time);
    };

    const clearAll = () => {
        deleteGameSummary();
        toast.success(' successfully cleared', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const newBreakTime = getFromLocalStorage()
        setBreakTime(newBreakTime ? newBreakTime.break : 0)
    }
    return (
        <div>
            <ToastContainer />
            <div className='d-flex align-items-center justify-content-center  mt-4 main-score-board'>
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
            <h5 className='mt-4 mb-4 text-center text-lg-start'>Add a Interval</h5>
            <div className="row m-2 p-4 rounded body-details">
                <div className="col-3">
                    <div className=''>
                        <button className='interval-btn ' onClick={() => handleBreakTime(10)}>10<span className='span-text'>min</span></button>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                        <button className='interval-btn' onClick={() => handleBreakTime(20)}>20<span className='span-text'>min</span></button>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                        <button className='interval-btn' onClick={() => handleBreakTime(30)}>30<span className='span-text'>min</span></button>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                        <button className='interval-btn' onClick={() => handleBreakTime(40)}>40<span className='span-text'>min</span></button>
                    </div>
                </div>
            </div>

            <h3 className='mt-4 mb-4 text-center text-lg-start'>Exercise Details</h3>
            <div className='d-flex justify-content-between m-2 game-time p-2 rounded'>
                <p><b>Exercise Time :</b></p>
                <p>{gameTime} <span>M</span></p>
            </div>
            <div className='d-flex justify-content-between m-2 game-time p-2 rounded'>
                <p><b>Break Time :</b></p>
                <p>{breakTime} <span>M</span></p>
            </div>

            <button className='mt-5 w-100 game-end-btn rounded mb-4' onClick={clearAll}>Game End</button>

        </div>
    );
};

export default ScoreBoard;