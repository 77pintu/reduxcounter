const initialVal = 0;

const changeNumber = (state = initialVal, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return 0;
        default:
            return state;
    }
}
export {
    changeNumber
};