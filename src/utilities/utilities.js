
const addToLocalStorage = (time) => {
    const breakTime = time;
    localStorage.setItem('breakTime', JSON.stringify(breakTime))
}


const getStoredBreakTime = () =>{
    let shoppingCart = {};


    const storedBreakTime = localStorage.getItem('breakTime');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

export {
    addToLocalStorage,
    getStoredBreakTime
}