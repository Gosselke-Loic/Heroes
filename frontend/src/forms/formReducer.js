/**
 * Reduder to handle forms
 * @param {object} state 
 * @param {object} event 
 * @returns {object} cleanUp the input or fill the handle inputs
 */
const formReducer = (state, event) => {
    if(event.reset) {
        return {
            name: "",
            skill: "",
            damage: 0,
            defense: 0,
            speed: 0,
            gold: 0,
            weapons: ""
        }
    }

    return {
        ...state,
        [event.name]: event.value
    }
};

export default formReducer;