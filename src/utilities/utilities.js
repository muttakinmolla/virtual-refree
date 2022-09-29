const addToLocalStorage = (time) => {
    let breakTime = { 'break': 0 };

    const storedTime = localStorage.getItem('breakTime');
    if (storedTime) {
        breakTime = JSON.parse(storedTime);
    }

    breakTime.break = time;

    localStorage.setItem('breakTime', JSON.stringify(breakTime));
}

const getFromLocalStorage = () => {
    let breakTime = { 'break': 0 };

    const storedTime = localStorage.getItem('breakTime');
    if (storedTime) {
        breakTime = JSON.parse(storedTime);
    }

    return breakTime;
}


const deleteGameSummary = () =>{
    localStorage.removeItem('breakTime');
}

export {
    addToLocalStorage,
    getFromLocalStorage,
    deleteGameSummary
};