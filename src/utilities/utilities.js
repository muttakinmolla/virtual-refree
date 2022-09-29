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

const removeFromLocal = () => {
    const breakTime = { 'break': 0, 'exercise': 0 };
    localStorage.setItem('breakTime', JSON.stringify(breakTime));
}

export {
    addToLocalStorage,
    getFromLocalStorage,
    removeFromLocal
};