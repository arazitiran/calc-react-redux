import * as mathi from 'mathjs';

const initState = {
    input: "",
    result: "",
    inputHistory: ""
};

export default function calculatorReducer(state = initState, action) {
    switch (action.type) {
        case "INPUT_BUTTON_PRESS":
            return { ...state, input: state.input + action.payload.btnval, inputHistory: state.inputHistory + action.payload.btnval } 
        case "RESULT_BUTTON_PRESS":
            return { ...state, result: ""+ mathi.evaluate(state.input), input:  mathi.evaluate(state.input) }
        case "CLEAR_BUTTON_PRESS":
            return { ...state, input: "", result: "", inputHistory:""} 
        case "PLUSMINUS_BUTTON_PRESS":
                return { ...state, input: Math.sign(state.input)*state.input} 
        default:
            break;
    }
    return state
}