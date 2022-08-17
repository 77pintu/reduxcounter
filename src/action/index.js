const increment = (data) => {
    return {
        type: "INCREMENT",
        payload: data
    }
}
const decrement = () => {
    return {
        type: "DECREMENT"
    }
}
const reset = () => {
    return {
        type: "RESET"
    }
}

export {
    increment,
    decrement,
    reset
};